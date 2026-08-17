// src/lib/server/leadService.ts
import { getDb } from './firebase';
import type { Lead, CreateLeadInput, LeadIntegrationStatus } from '@/types/lead';

const COLLECTION = 'leads';

/**
 * Generates a short unique quote ID like QR-7F3K9P
 */
export function generateQuoteId(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // unambiguous charset
  const randomPart = Array.from({ length: 6 }, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join("");
  return `QR-${randomPart}`;
}

export async function createLead(input: CreateLeadInput): Promise<Lead> {
  const db = getDb();
  const now = new Date().toISOString();
  const customId = generateQuoteId();

  const lead: Lead = {
    id: customId,
    name: input.name,
    company: input.company ?? '',
    email: input.email,
    phone: input.phone,
    service: input.service,
    message: input.message ?? '',
    status: 'new',
    integrationStatus: {
      sheetSync: 'pending',
      emailSent: 'pending',
    },
    createdAt: now,
    updatedAt: now,
    ipAddress: input.ipAddress ?? '',
    source: input.source ?? 'website-cta',
  };

  await db.collection(COLLECTION).doc(customId).set(lead);
  return lead;
}

export async function updateLeadIntegrationStatus(
  leadId: string,
  integrationStatus: Partial<LeadIntegrationStatus>
): Promise<void> {
  const db = getDb();
  await db.collection(COLLECTION).doc(leadId).update({
    'integrationStatus.sheetSync': integrationStatus.sheetSync,
    'integrationStatus.emailSent': integrationStatus.emailSent,
    updatedAt: new Date().toISOString(),
  });
}
