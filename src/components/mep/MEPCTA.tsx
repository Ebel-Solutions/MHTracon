'use client';

import { ServiceCTA, type CTACard } from '@/components/shared/services';
import { ArrowRight, CalendarCheck, Phone, MessageSquare } from 'lucide-react';

const cards: CTACard[] = [
  {
    icon: ArrowRight,
    title: 'Request a Quote',
    desc: 'Receive a detailed MEP project quotation within 48 hours of submitting your requirements.',
    href: '/contact-us',
    label: 'Get Quote Now',
    primary: true,
  },
  {
    icon: CalendarCheck,
    title: 'Schedule a Site Visit',
    desc: 'Book a complimentary on-site assessment by our senior MEP engineer.',
    href: '/contact-us',
    label: 'Book Site Visit',
  },
  {
    icon: MessageSquare,
    title: 'Engineering Consultation',
    desc: 'Speak with our MEP lead engineer about design requirements, standards, or project feasibility.',
    href: '/contact-us',
    label: 'Book Consultation',
  },
  {
    icon: Phone,
    title: 'Speak to Our Team',
    desc: 'Connect with our MEP sales team directly for immediate project assistance.',
    href: 'tel:+966506030311',
    label: 'Call Us Now',
  },
];

export default function MEPCTA() {
  return (
    <ServiceCTA
      cards={cards}
      sectionLabel="Start Your MEP Project"
      headlineStart="Ready to Engineer"
      headlineHighlight="Something Great?"
      subtext="280+ completed MEP projects across Saudi Arabia. One engineering partner for mechanical, electrical, plumbing, fire protection, and beyond."
      backgroundImage="/images/mep/cta-bg.png"
      contactLine="info@mhtracon.com • +966 506 030 311 • Riyadh, Saudi Arabia"
      className="mep-cta"
    />
  );
}
