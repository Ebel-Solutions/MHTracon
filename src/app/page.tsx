import HeroBanner from '@/components/sections/HeroBanner';
import AboutSection from '@/components/sections/AboutSection';
import ServiceSection from '@/components/sections/ServiceSection';
import ProjectsCarousel from '@/components/sections/ProjectsCarousel';
import CtaBanner from '@/components/sections/CtaBanner';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import ClientsCarousel from '@/components/sections/ClientsCarousel';
import ContactInfoBar from '@/components/sections/ContactInfoBar';
import { services } from '@/data/services';

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
            name: 'Webcon Engineers Pvt. Ltd.',
            url: 'https://webconengineers.com',
            logo: 'https://webconengineers.com/images/logos/logo-3-1.png',
            description:
              'PEB Projects Consultants and Civil Engineering Company in Kolkata with 25+ years of experience.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '263, Jodhpur Park',
              addressLocality: 'Kolkata',
              addressRegion: 'West Bengal',
              postalCode: '700068',
              addressCountry: 'IN',
            },
            telephone: '+91-33-24140232',
            email: 'info@webconengineers.com',
            sameAs: [],
          }),
        }}
      />

      {/* Hero Banner Carousel */}
      <HeroBanner />

      {/* About Company Section */}
      <AboutSection />

      {/* Services - Rendered from data */}
      {services.map((service) => (
        <ServiceSection key={service.id} service={service} />
      ))}

      {/* Projects Carousel */}
      <ProjectsCarousel />

      {/* Call to Action */}
      <CtaBanner />

      {/* PEB Features Grid */}
      <FeaturesGrid />

      {/* Clients Logo Carousel */}
      <ClientsCarousel />

      {/* Contact Information */}
      <ContactInfoBar />
    </>
  );
}
