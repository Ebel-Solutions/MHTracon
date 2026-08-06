import type { Metadata } from 'next';
import UniformHero from '@/components/uniform/UniformHero';
import UniformStatsBar from '@/components/uniform/UniformStatsBar';
import ServicesOverview from '@/components/uniform/ServicesOverview';
import UniformCategories from '@/components/uniform/UniformCategories';
import WhyChooseUs from '@/components/uniform/WhyChooseUs';
import IndustriesServed from '@/components/uniform/IndustriesServed';
import BrandingProcess from '@/components/uniform/BrandingProcess';
import ValueAddedServices from '@/components/uniform/ValueAddedServices';
import UniformGallery from '@/components/uniform/UniformGallery';
import TestimonialsSlider from '@/components/uniform/TestimonialsSlider';
import UniformFAQ from '@/components/uniform/UniformFAQ';
import UniformCTA from '@/components/uniform/UniformCTA';

export const metadata: Metadata = {
  title: 'Uniform Services | MH Tracon — Premium Custom Uniforms in Saudi Arabia',
  description:
    'MH Tracon designs and manufactures premium custom uniforms for corporate, healthcare, aviation, hospitality, industrial, and school sectors across Saudi Arabia. Request a quote today.',
  keywords: [
    'uniform services saudi arabia',
    'custom uniforms riyadh',
    'corporate uniforms',
    'medical uniforms',
    'aviation uniforms',
    'hospitality uniforms',
    'industrial workwear',
    'school uniforms',
    'security uniforms',
    'branded uniforms',
    'bulk uniform manufacturer',
  ],
  openGraph: {
    title: 'Uniform Services | MH Tracon',
    description: 'Premium custom uniforms for every industry. Custom manufacturing, expert tailoring, and fast delivery across Saudi Arabia.',
    url: 'https://mhtracon.com/services/uniform-services',
    siteName: 'MH Tracon',
    type: 'website',
  },
};

export default function UniformServicesPage() {
  return (
    <main className="uniform-services-page">
      <UniformHero />
      <UniformStatsBar />
      <ServicesOverview />
      <UniformCategories />
      <WhyChooseUs />
      <IndustriesServed />
      <BrandingProcess />
      <ValueAddedServices />
      <UniformGallery />
      <TestimonialsSlider />
      <UniformFAQ />
      <UniformCTA />
    </main>
  );
}
