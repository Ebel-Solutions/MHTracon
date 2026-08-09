import type { Metadata } from 'next';
import GiftsHero from '@/components/gifts/GiftsHero';
import GiftsCategories from '@/components/gifts/GiftsCategories';
import GiftsIndustries from '@/components/gifts/GiftsIndustries';
import GiftsBrandingSolutions from '@/components/gifts/GiftsBrandingSolutions';
import GiftsWhyChooseUs from '@/components/gifts/GiftsWhyChooseUs';
import GiftsWorkflow from '@/components/gifts/GiftsWorkflow';
import GiftsGallery from '@/components/gifts/GiftsGallery';
import GiftsTestimonials from '@/components/gifts/GiftsTestimonials';
import GiftsFAQ from '@/components/gifts/GiftsFAQ';
import GiftsCTA from '@/components/gifts/GiftsCTA';

export const metadata: Metadata = {
  title: 'Corporate Gifts & Branded Merchandise | MH Tracon Saudi Arabia',
  description:
    'Premium corporate gifting solutions, employee welcome kits, promotional merchandise, and custom branding services for businesses in Saudi Arabia.',
  keywords: [
    'corporate gifts saudi arabia',
    'branded merchandise riyadh',
    'employee welcome kits',
    'promotional products saudi arabia',
    'corporate branding services',
    'executive gift hampers',
    'ramadan corporate gifts',
    'customized gift boxes',
    'event giveaways riyadh',
    'crystal awards and trophies',
    'corporate apparel branding',
    'client appreciation gifts',
  ],
  openGraph: {
    title: 'Corporate Gifts & Branded Merchandise | MH Tracon',
    description: 'Elevate your corporate relationships with premium, customized corporate gifts and branded promotional merchandise.',
    url: 'https://mhtracon.com/services/corporate-gifts',
    siteName: 'MH Tracon',
    type: 'website',
  },
};

export default function CorporateGiftsPage() {
  return (
    <main className="corporate-gifts-page">
      <GiftsHero />
      <GiftsCategories />
      <GiftsIndustries />
      <GiftsBrandingSolutions />
      <GiftsWhyChooseUs />
      <GiftsWorkflow />
      <GiftsGallery />
      <GiftsTestimonials />
      <GiftsFAQ />
      <GiftsCTA />
    </main>
  );
}
