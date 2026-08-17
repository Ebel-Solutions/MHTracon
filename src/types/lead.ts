export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'closed';
export type IntegrationResult = 'pending' | 'success' | 'failed';

export interface LeadIntegrationStatus {
  sheetSync: IntegrationResult;
  emailSent: IntegrationResult;
}

export interface Lead {
  id?: string;
  name: string;
  company?: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
  status: LeadStatus;
  integrationStatus: LeadIntegrationStatus;
  createdAt: string;
  updatedAt: string;
  ipAddress?: string;
  source: string;
}

export interface CreateLeadInput {
  name: string;
  company?: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
  ipAddress?: string;
  source?: string;
}

export interface ApiSuccessResponse {
  success: true;
  leadId: string;
  message: string;
}

export interface ApiErrorResponse {
  success: false;
  error: string;
  details?: Record<string, string[]>;
}

export type ApiResponse = ApiSuccessResponse | ApiErrorResponse;
