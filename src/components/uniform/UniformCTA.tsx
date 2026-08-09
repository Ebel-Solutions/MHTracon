'use client';

import { ServiceCTA, type CTACard } from '@/components/shared/services';
import { ArrowRight, Phone, CalendarCheck } from 'lucide-react';

const cards: CTACard[] = [
  {
    icon: ArrowRight,
    title: 'Request a Quote',
    desc: 'Get a detailed quotation for your uniform requirements within 24 hours.',
    href: '/contact-us',
    label: 'Get Quote Now',
    primary: true,
  },
  {
    icon: Phone,
    title: 'Talk to Sales',
    desc: 'Speak directly with our uniform solutions experts for immediate assistance.',
    href: 'tel:+966506030311',
    label: 'Call Us Now',
  },
  {
    icon: CalendarCheck,
    title: 'Schedule Consultation',
    desc: 'Book a free design consultation at your convenience — on-site or virtual.',
    href: '/contact-us',
    label: 'Book Consultation',
  },
];

export default function UniformCTA() {
  return (
    <ServiceCTA
      cards={cards}
      sectionLabel="Get Started Today"
      headlineStart="Ready to Dress Your Team"
      headlineHighlight="For Success?"
      subtext="Join 500+ organisations across Saudi Arabia that trust MH Tracon for their uniform needs. Let's create something exceptional together."
      backgroundImage="/images/uniform/cta-bg.png"
      className="uniform-cta"
    />
  );
}
