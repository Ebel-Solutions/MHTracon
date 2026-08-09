'use client';

import { ServiceCTA, type CTACard } from '@/components/shared/services';
import { ArrowRight, Shield, Phone, FileCheck } from 'lucide-react';

const cards: CTACard[] = [
  {
    icon: ArrowRight,
    title: 'Request a Quote',
    desc: 'Receive a detailed security system quotation within 48 hours based on your operational requirements.',
    href: '/contact-us',
    label: 'Get Quote Now',
    primary: true,
  },
  {
    icon: FileCheck,
    title: 'Free Site Survey',
    desc: 'Book a complimentary security assessment and site survey by our senior engineers.',
    href: '/contact-us',
    label: 'Book Survey',
  },
  {
    icon: Shield,
    title: 'Security Consultation',
    desc: 'Discuss your vulnerabilities, compliance needs, and system upgrades with an expert.',
    href: '/contact-us',
    label: 'Book Consultation',
  },
  {
    icon: Phone,
    title: 'Speak to Our Team',
    desc: 'Connect directly with our security solutions team for immediate assistance.',
    href: 'tel:+966506030311',
    label: 'Call Us Now',
  },
];

export default function SecurityCTA() {
  return (
    <ServiceCTA
      cards={cards}
      sectionLabel="Secure Your Facility"
      headlineStart="Ready to Upgrade Your"
      headlineHighlight="Security?"
      subtext="Join hundreds of businesses across Saudi Arabia that trust MH Tracon for intelligent, reliable, and compliant electronic security solutions."
      backgroundImage="/images/security/cta-bg.png"
      className="security-cta"
    />
  );
}
