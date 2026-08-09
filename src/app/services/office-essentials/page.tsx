import type { Metadata } from 'next';
import OfficeHero from '@/components/office/OfficeHero';
import OfficeStatsBar from '@/components/office/OfficeStatsBar';
import OfficeCategories from '@/components/office/OfficeCategories';
import OfficeWhyChooseUs from '@/components/office/OfficeWhyChooseUs';
import OfficeIndustries from '@/components/office/OfficeIndustries';
import OfficeWorkflow from '@/components/office/OfficeWorkflow';
import OfficeBulkSupply from '@/components/office/OfficeBulkSupply';
import OfficeGallery from '@/components/office/OfficeGallery';
import OfficeTestimonials from '@/components/office/OfficeTestimonials';
import OfficeFAQ from '@/components/office/OfficeFAQ';
import OfficeCTA from '@/components/office/OfficeCTA';

export const metadata: Metadata = {
  title: 'Office Essentials & Corporate Procurement | MH Tracon Saudi Arabia',
  description:
    'MH Tracon is your one-stop corporate procurement partner in Saudi Arabia, supplying premium office stationery, IT consumables, workplace essentials, and branded merchandise.',
  keywords: [
    'office essentials saudi arabia',
    'corporate procurement riyadh',
    'office supplies wholesale',
    'IT consumables saudi arabia',
    'corporate gifts riyadh',
    'branded corporate apparel',
    'workplace hygiene products',
    'eco-friendly office supplies',
    'annual supply contracts',
    'bulk stationery supplier',
    'employee welcome kits',
    'office equipment saudi arabia',
  ],
  openGraph: {
    title: 'Office Essentials & Corporate Procurement | MH Tracon',
    description: 'Comprehensive workplace procurement solutions. Premium office supplies, IT accessories, and corporate merchandise for businesses in Saudi Arabia.',
    url: 'https://mhtracon.com/services/office-essentials',
    siteName: 'MH Tracon',
    type: 'website',
  },
};

export default function OfficeEssentialsPage() {
  return (
    <main className="office-essentials-page">
      <OfficeHero />
      <OfficeStatsBar />
      <OfficeCategories />
      <OfficeIndustries />
      <OfficeBulkSupply />
      <OfficeWhyChooseUs />
      <OfficeWorkflow />
      <OfficeGallery />
      <OfficeTestimonials />
      <OfficeFAQ />
      <OfficeCTA />
    </main>
  );
}
