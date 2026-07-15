import type { ClientLogo } from '@/types';

export const clientLogos: ClientLogo[] = Array.from({ length: 14 }, (_, i) => ({
  id: i + 1,
  imageSrc: `/images/clients/clients-logo-${i + 1}.jpg`,
  alt: `Client Logo ${i + 1}`,
}));
