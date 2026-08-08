import type { Metadata } from 'next';
import MEPHero from '@/components/mep/MEPHero';
import MEPStatsBar from '@/components/mep/MEPStatsBar';
import MEPServiceCards from '@/components/mep/MEPServiceCards';
import MEPWhyChooseUs from '@/components/mep/MEPWhyChooseUs';
import MEPClientsServed from '@/components/mep/MEPClientsServed';
import MEPWorkflow from '@/components/mep/MEPWorkflow';
import MEPGallery from '@/components/mep/MEPGallery';
import MEPTestimonials from '@/components/mep/MEPTestimonials';
import MEPFAQ from '@/components/mep/MEPFAQ';
import MEPCTA from '@/components/mep/MEPCTA';

export const metadata: Metadata = {
  title: 'MEP Services | MH Tracon — Mechanical, Electrical & Plumbing Solutions in Saudi Arabia',
  description:
    'MH Tracon provides fully integrated MEP engineering services including HVAC, electrical installations, plumbing, fire protection, testing & commissioning, and annual maintenance contracts (AMC) across Saudi Arabia.',
  keywords: [
    'MEP services saudi arabia',
    'MEP contractor riyadh',
    'HVAC installation riyadh',
    'electrical installation saudi arabia',
    'plumbing services riyadh',
    'fire protection systems saudi arabia',
    'testing and commissioning',
    'annual maintenance contract AMC',
    'MEP engineering company',
    'mechanical electrical plumbing riyadh',
    'facility maintenance saudi arabia',
    'MEP design and build',
  ],
  openGraph: {
    title: 'MEP Services | MH Tracon',
    description: 'Integrated mechanical, electrical, plumbing, fire protection, testing & commissioning, and facility maintenance services across Saudi Arabia.',
    url: 'https://mhtracon.com/services/mep',
    siteName: 'MH Tracon',
    type: 'website',
  },
};

export default function MEPPage() {
  return (
    <main className="mep-page">
      <MEPHero />
      <MEPStatsBar />
      <MEPServiceCards />
      <MEPWhyChooseUs />
      <MEPClientsServed />
      <MEPWorkflow />
      <MEPGallery />
      <MEPTestimonials />
      <MEPFAQ />
      <MEPCTA />
    </main>
  );
}
