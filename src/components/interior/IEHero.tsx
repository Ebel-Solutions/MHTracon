import { ServiceHero } from '@/components/shared/services';

export default function IEHero() {
  return (
    <ServiceHero
      badge="Premium Architectural Solutions"
      titleStart="Interior & Exterior"
      titleHighlight="Design"
      titleEnd="Excellence"
      mobileSubtitle="Turnkey architectural, fit-out, and façade solutions for commercial & residential projects."
      desktopDescription="Comprehensive interior, exterior, architectural, and fit-out solutions for commercial, hospitality, and residential developments across Saudi Arabia."
      imageSrc="/images/interior/hero-bg.png"
      imageAlt="MH Tracon Interior & Exterior Design — Glass Facades and Architectural Solutions"
      imageClassName="object-cover object-center"
      primaryCTA={{ label: 'Request a Quote', href: '/contact-us' }}
      secondaryCTA={{ label: 'View Services', href: '#ie-services' }}
      className="ie-hero"
    />
  );
}
