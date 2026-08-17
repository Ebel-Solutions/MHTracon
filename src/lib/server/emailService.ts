// src/lib/server/emailService.ts
import { Resend } from 'resend';
import type { Lead } from '@/types/lead';

function getResend(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error('Missing RESEND_API_KEY');
  return new Resend(apiKey);
}

function buildEmailHtml(lead: Lead): string {
  const serviceLabel = lead.service.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const timestamp = new Date(lead.createdAt).toLocaleString('en-SA', { timeZone: 'Asia/Riyadh' });

  const row = (label: string, value: string) => `
    <tr style="border-bottom: 1px solid #eeeeee;">
      <td style="padding:12px 8px;color:#666666;font-weight:500;width:140px;vertical-align:top;">${label}</td>
      <td style="padding:12px 8px;color:#222222;vertical-align:top;word-break:break-word;">${value}</td>
    </tr>
  `;

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><title>New Quote Request</title></head>
<body style="font-family:Inter,system-ui,sans-serif;background:#f5f5f5;margin:0;padding:24px;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.1);">

    <!-- Header -->
    <div style="background:#f16d2b;padding:24px 32px;">
      <h1 style="color:#ffffff;margin:0;font-size:20px;font-weight:600;">
        New Quote Request
      </h1>
      <p style="color:#aaaaaa;margin:4px 0 0;font-size:14px;">
        Reference ID: <strong style="color:#ffffff;">${lead.id || 'N/A'}</strong>
      </p>
    </div>

    <!-- Body -->
    <div style="padding:32px;">

      <table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.5;">
        ${row("Quote ID", lead.id || 'N/A')}
        ${row("Submitted", timestamp)}
        ${row("Contact Person", lead.name)}
        ${row("Company", lead.company || '—')}
        ${row("Phone", '<a href="tel:' + lead.phone + '" style="color:#000000;">' + lead.phone + '</a>')}
        ${row("Email", '<a href="mailto:' + lead.email + '" style="color:#000000;">' + lead.email + '</a>')}
        ${row("Service", serviceLabel)}
        ${lead.message ? row("Message", lead.message.replace(/\n/g, '<br/>')) : ""}
        ${row("Lead Source", lead.source || 'Website')}
        ${lead.status ? row("Lead Status", lead.status) : ""}
      </table>

      <div style="margin-top:24px;padding:16px;background:#f9f9f9;border-radius:6px;font-size:13px;color:#666;">
        <strong>Next step:</strong> Contact the customer within 24 hours.
      </div>
    </div>

    <!-- Footer -->
    <div style="background:#f0f0f0;padding:16px 32px;font-size:12px;color:#999;text-align:center;">
      MHtracon — Internal Quote Notification — Do not reply to this email.
    </div>
  </div>
</body>
</html>`;
}

export async function sendQuoteNotification(lead: Lead): Promise<void> {
  const resend = getResend();

  const from =
    process.env.RESEND_FROM_EMAIL ??
    'MHtracon Website <noreply@support.mhtracon.com>';

  const to =
    process.env.RESEND_TO_EMAIL ??
    'info@mhtracon.com';

  const serviceLabel = lead.service
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());

  await resend.emails.send({
    from,
    to: [to],
    replyTo: lead.email,
    subject: `New Lead: ${lead.name} — ${serviceLabel}`,
    html: buildEmailHtml(lead),
  });
}
