import type { Metadata } from 'next';
import IEHero from '@/components/interior/IEHero';
import IEStatsBar from '@/components/interior/IEStatsBar';
import IEServicesOverview from '@/components/interior/IEServicesOverview';
import IEServiceCards from '@/components/interior/IEServiceCards';
import IEWhyChooseUs from '@/components/interior/IEWhyChooseUs';
import IEClientsServed from '@/components/interior/IEClientsServed';
import IEProjectWorkflow from '@/components/interior/IEProjectWorkflow';
import IEGallery from '@/components/interior/IEGallery';
import IETestimonials from '@/components/interior/IETestimonials';
import IEFAQ from '@/components/interior/IEFAQ';
import IEFCTA from '@/components/interior/IEFCTA';

export const metadata: Metadata = {
  title: 'Interior & Exterior Design | MH Tracon — Architectural & Fit-Out Solutions in Saudi Arabia',
  description:
    'MH Tracon delivers premium interior, exterior, architectural, and fit-out solutions including glass facades, aluminium cladding, structural glazing, office partitions, railing systems, and stainless steel works across Saudi Arabia.',
  keywords: [
    'interior exterior design saudi arabia',
    'glass facade riyadh',
    'aluminium cladding',
    'structural glazing',
    'office fit-out saudi arabia',
    'office partitions riyadh',
    'aluminium works',
    'railing systems',
    'stainless steel fabrication',
    'architectural solutions riyadh',
    'commercial fit-out saudi arabia',
    'curtain wall system',
  ],
  openGraph: {
    title: 'Interior & Exterior Design | MH Tracon',
    description: 'Premium glass facades, aluminium cladding, structural glazing, fit-out and architectural solutions across Saudi Arabia.',
    url: 'https://mhtracon.com/services/interior-exterior',
    siteName: 'MH Tracon',
    type: 'website',
  },
};

export default function InteriorExteriorPage() {
  return (
    <main className="interior-exterior-page">
      <IEHero />
      <IEStatsBar />
      <IEServicesOverview />
      <IEServiceCards />
      <IEWhyChooseUs />
      <IEClientsServed />
      <IEProjectWorkflow />
      <IEGallery />
      <IETestimonials />
      <IEFAQ />
      <IEFCTA />
    </main>
  );
}
