import { ServiceHero } from '@/components/shared/services';

export default function MEPHero() {
  return (
    <ServiceHero
      badge="Integrated MEP Engineering"
      titleStart="MEP Solutions,"
      titleHighlight="Precisely"
      titleEnd="Engineered"
      mobileSubtitle="Mechanical, Electrical & Plumbing solutions for commercial, healthcare, hospitality and industrial projects."
      desktopDescription="Fully integrated MEP engineering services — from design and installation to testing, commissioning, and long-term maintenance — delivered to international standards across Saudi Arabia."
      imageSrc="/images/mep/hero-bg.png"
      imageAlt="MH Tracon MEP Engineering — HVAC, Electrical and Plumbing Systems"
      imageClassName="object-cover object-center"
      primaryCTA={{ label: 'Request a Quote', href: '/contact-us' }}
      secondaryCTA={{ label: 'Our Services', href: '#mep-services' }}
      className="mep-hero"
    />
  );
}
