'use client';

import { ServiceCTA, type CTACard } from '@/components/shared/services';
import { ArrowRight, CalendarCheck, Phone } from 'lucide-react';

const cards: CTACard[] = [
  {
    icon: ArrowRight,
    title: 'Request a Quote',
    desc: 'Get a detailed project quotation within 48 hours based on your specific requirements.',
    href: '/contact-us',
    label: 'Get Quote Now',
    primary: true,
  },
  {
    icon: CalendarCheck,
    title: 'Schedule a Site Visit',
    desc: 'Book a complimentary site visit by our senior engineer at your convenience.',
    href: '/contact-us',
    label: 'Book Site Visit',
  },
  {
    icon: Phone,
    title: 'Speak with Our Experts',
    desc: 'Connect directly with our architectural solutions team for immediate guidance.',
    href: 'tel:+966506030311',
    label: 'Call Us Now',
  },
];

export default function IEFCTA() {
  return (
    <ServiceCTA
      cards={cards}
      sectionLabel="Start Your Project"
      headlineStart="Ready to Build Something"
      headlineHighlight="Extraordinary?"
      subtext="Join 350+ completed projects across Saudi Arabia. Let MH Tracon turn your architectural vision into a precision-engineered reality."
      backgroundImage="/images/interior/cta-bg.png"
      className="ie-cta"
    />
  );
}
