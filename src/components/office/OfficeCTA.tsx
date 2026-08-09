'use client';

import { ServiceCTA, type CTACard } from '@/components/shared/services';
import { ArrowRight, BookOpen, Handshake, Phone } from 'lucide-react';

const cards: CTACard[] = [
  {
    icon: ArrowRight,
    title: 'Request a Quote',
    desc: 'Submit your procurement list and receive a highly competitive bulk pricing quotation.',
    href: '/contact-us',
    label: 'Get Quote Now',
    primary: true,
  },
  {
    icon: BookOpen,
    title: 'Request Catalogue',
    desc: 'Get our comprehensive digital catalogue featuring thousands of premium office products.',
    href: '/contact-us',
    label: 'Get Catalogue',
  },
  {
    icon: Handshake,
    title: 'Corporate Contracts',
    desc: 'Discuss an Annual Supply Agreement to lock in pricing and streamline your purchasing.',
    href: '/contact-us',
    label: 'Discuss Contract',
  },
  {
    icon: Phone,
    title: 'Speak to Sales',
    desc: 'Connect directly with our corporate procurement team for immediate assistance.',
    href: 'tel:+966506030311',
    label: 'Call Us Now',
  },
];

export default function OfficeCTA() {
  return (
    <ServiceCTA
      cards={cards}
      sectionLabel="Streamline Your Procurement"
      headlineStart="Ready to Upgrade Your"
      headlineHighlight="Workplace?"
      subtext="Partner with MH Tracon to ensure your office is always equipped, organized, and running at peak productivity."
      backgroundImage="/images/office/cta-bg.png"
      className="office-cta"
    />
  );
}
