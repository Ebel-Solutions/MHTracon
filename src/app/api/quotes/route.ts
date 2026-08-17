// src/app/api/quotes/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { checkRateLimit } from '@/lib/server/rateLimiter';
import { createLead, updateLeadIntegrationStatus } from '@/lib/server/leadService';
import { appendLeadToSheet } from '@/lib/server/googleSheetsService';
import { sendQuoteNotification } from '@/lib/server/emailService';

// ── Validation schema ────────────────────────────────────────────────────────
const quoteApiSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  company: z.string().max(150).optional(),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .min(7, 'Phone number is too short')
    .max(25, 'Phone number is too long')
    .regex(/^[+\d\s\-().]+$/, 'Invalid phone number format'),
  service: z.enum(['interior', 'mep', 'ai', 'security', 'office', 'gifts', 'uniforms', 'other'] as const, {
    message: 'Please select a valid service'
  }),
  message: z.string().max(2000).optional(),
});

type QuotePayload = z.infer<typeof quoteApiSchema>;

// ── Helper: get client IP ────────────────────────────────────────────────────
function getClientIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  );
}

// ── POST /api/quotes ─────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  const ip = getClientIp(req);

  // 1. Rate limiting
  const rateLimit = checkRateLimit(ip);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { success: false, error: 'Too many requests. Please wait before submitting again.' },
      {
        status: 429,
        headers: {
          'Retry-After': String(Math.ceil((rateLimit.resetAt - Date.now()) / 1000)),
        },
      }
    );
  }

  // 2. Parse + validate body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request body.' },
      { status: 400 }
    );
  }

  const parsed = quoteApiSchema.safeParse(body);
  if (!parsed.success) {
    const details: Record<string, string[]> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path.join('.');
      if (!details[field]) details[field] = [];
      details[field].push(issue.message);
    }
    return NextResponse.json(
      { success: false, error: 'Validation failed.', details },
      { status: 400 }
    );
  }

  const data: QuotePayload = parsed.data;

  // 3. Save to Firestore (blocking — must succeed)
  let lead;
  try {
    lead = await createLead({ ...data, ipAddress: ip });
  } catch (err) {
    console.error('[quotes] Firestore createLead failed:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to save your request. Please try again.' },
      { status: 500 }
    );
  }

  // 4. Background integrations (non-blocking)
  const [sheetsResult, emailResult] = await Promise.allSettled([
    appendLeadToSheet(lead),
    sendQuoteNotification(lead),
  ]);

  const sheetSync = sheetsResult.status === 'fulfilled' ? 'success' : 'failed';
  const emailSent = emailResult.status === 'fulfilled' ? 'success' : 'failed';

  if (sheetsResult.status === 'rejected') {
    console.error('[quotes] Google Sheets sync failed:', sheetsResult.reason);
  }
  if (emailResult.status === 'rejected') {
    console.error('[quotes] Email notification failed:', emailResult.reason);
  }

  // 5. Update integration status in Firestore
  try {
    await updateLeadIntegrationStatus(lead.id!, { sheetSync, emailSent });
  } catch (err) {
    console.error('[quotes] Failed to update integration status:', err);
    // Non-critical — lead is already saved
  }

  // 6. Success response
  return NextResponse.json({
    success: true,
    leadId: lead.id,
    message: 'Thank you! We will get back to you within 24 hours.',
  });
}


