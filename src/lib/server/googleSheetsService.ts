// src/lib/server/googleSheetsService.ts
import { google } from 'googleapis';

import type { Lead } from '@/types/lead';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SHEET_NAME = 'leads';

function getAuth() {
  const email = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const key = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!email || !key) {
    throw new Error('Missing GOOGLE_SHEETS_CLIENT_EMAIL or GOOGLE_SHEETS_PRIVATE_KEY');
  }

  return new google.auth.JWT({ email, key, scopes: SCOPES });
}

export async function appendLeadToSheet(lead: Lead): Promise<void> {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  if (!spreadsheetId) throw new Error('Missing GOOGLE_SHEETS_SPREADSHEET_ID');

  const auth = getAuth();
  const sheets = google.sheets({ version: 'v4', auth });

  const row = [
    lead.id ?? '',
    lead.createdAt,
    lead.name,
    lead.company ?? '',
    lead.email,
    lead.phone,
    lead.service,
    lead.message ?? '',
    lead.status,
    lead.source,
    lead.ipAddress ?? '',
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${SHEET_NAME}!A:K`,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: { values: [row] },
  });
}

