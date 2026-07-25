import HeroBanner from '@/components/sections/HeroBanner';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProjectsCarousel from '@/components/sections/ProjectsCarousel';
import CtaBanner from '@/components/sections/CtaBanner';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import ClientsCarousel from '@/components/sections/ClientsCarousel';
import ContactInfoBar from '@/components/sections/ContactInfoBar';

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'MH Tracon',
            url: 'https://mhtracon.com',
            logo: 'https://mhtracon.com/images/logos/logo-1.png',
            description:
              'MH Tracon is a Riyadh-based multi-solutions company delivering engineering, MEP, security, AI, interior design, and business solutions across Saudi Arabia.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'AL Jandriya',
              addressLocality: 'Riyadh',
              postalCode: '13611',
              addressCountry: 'SA',
            },
            telephone: '+966506030311',
            email: 'info@mhtracon.com',
            sameAs: ['https://mhtracon.com'],
          }),
        }}
      />

      {/* Hero Banner Carousel */}
      <HeroBanner />

      {/* About Company Section */}
      <AboutSection />

      {/* Services Grid */}
      <ServicesSection />

      {/* Projects Portfolio */}
      <ProjectsCarousel />

      {/* Call to Action */}
      <CtaBanner />

      {/* Features / Why Choose Us */}
      <FeaturesGrid />

      {/* Clients Logo Carousel */}
      <ClientsCarousel />

      {/* Contact Information Bar */}
      <ContactInfoBar />
    </>
  );
}
