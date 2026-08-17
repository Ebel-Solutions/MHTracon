// src/lib/server/rateLimiter.ts
// In-memory rate limiter — 5 requests per 10 minutes per IP.
// Resets on server restart. Upgrade to Redis/Upstash for production multi-instance.

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateLimitRecord>();

const LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes

// Clean up expired entries every 15 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of store.entries()) {
    if (record.resetAt < now) store.delete(key);
  }
}, 15 * 60 * 1000);

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number;
}

export function checkRateLimit(ip: string): RateLimitResult {
  const now = Date.now();
  const existing = store.get(ip);

  if (!existing || existing.resetAt < now) {
    // First request or window expired — start fresh
    const record: RateLimitRecord = { count: 1, resetAt: now + WINDOW_MS };
    store.set(ip, record);
    return { allowed: true, remaining: LIMIT - 1, resetAt: record.resetAt };
  }

  if (existing.count >= LIMIT) {
    return { allowed: false, remaining: 0, resetAt: existing.resetAt };
  }

  existing.count += 1;
  return { allowed: true, remaining: LIMIT - existing.count, resetAt: existing.resetAt };
}
