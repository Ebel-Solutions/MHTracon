import { ServiceHero } from '@/components/shared/services';

export default function OfficeHero() {
  return (
    <ServiceHero
      badge="Workplace Procurement"
      titleStart="Premium"
      titleHighlight="Office"
      titleEnd="Essentials"
      mobileSubtitle="Comprehensive workplace procurement and corporate office solutions."
      desktopDescription="Simplify your corporate purchasing with MH Tracon. We provide end-to-end office essentials—from premium stationery and IT consumables to branded corporate apparel and eco-friendly products—ensuring a productive and professional work environment."
      imageSrc="/images/office/hero-bg.png"
      imageAlt="MH Tracon Office Essentials and Corporate Procurement"
      imageClassName="object-cover object-center"
      primaryCTA={{ label: 'Request Catalogue', href: '/contact-us' }}
      secondaryCTA={{ label: 'View Categories', href: '#office-categories' }}
      className="office-hero"
    />
  );
}
