import { ServiceHero } from '@/components/shared/services';

export default function SecurityHero() {
  return (
    <ServiceHero
      badge="Integrated Security Systems"
      titleStart="Intelligent"
      titleHighlight="Protection"
      titleEnd="Solutions"
      mobileSubtitle="Advanced electronic security systems for commercial, industrial, and residential environments."
      desktopDescription="End-to-end electronic security solutions — from intelligent CCTV and AI analytics to enterprise access control and intrusion detection — ensuring maximum safety and operational efficiency."
      imageSrc="/images/security/hero-bg.png"
      imageAlt="MH Tracon Security Solutions — CCTV, Access Control and Monitoring"
      imageClassName="object-cover object-[center_30%]"
      primaryCTA={{ label: 'Request Site Survey', href: '/contact-us' }}
      secondaryCTA={{ label: 'Explore Systems', href: '#security-services' }}
      className="security-hero"
    />
  );
}
