'use client';

import { ServiceCTA, type CTACard } from '@/components/shared/services';
import { ArrowRight, BookOpen, Package, Phone } from 'lucide-react';

const cards: CTACard[] = [
  {
    icon: ArrowRight,
    title: 'Request a Quote',
    desc: 'Submit your requirements and receive a comprehensive proposal for your gifting campaign.',
    href: '/contact-us',
    label: 'Get Quote Now',
    primary: true,
  },
  {
    icon: BookOpen,
    title: 'Request Catalogue',
    desc: 'Explore our latest collection of premium corporate gifts and promotional merchandise.',
    href: '/contact-us',
    label: 'Get Catalogue',
  },
  {
    icon: Package,
    title: 'Plan Your Gifting',
    desc: 'Speak with our branding specialists to design a custom welcome kit or seasonal hamper.',
    href: '/contact-us',
    label: 'Book Consultation',
  },
  {
    icon: Phone,
    title: 'Speak to Sales',
    desc: 'Connect directly with our corporate branding team for immediate assistance.',
    href: 'tel:+966506030311',
    label: 'Call Us Now',
  },
];

export default function GiftsCTA() {
  return (
    <ServiceCTA
      cards={cards}
      sectionLabel="Strengthen Your Relationships"
      headlineStart="Ready to Create"
      headlineHighlight="Lasting Impressions?"
      subtext="Partner with MH Tracon to deliver exceptional corporate gifts that elevate your brand and show true appreciation."
      backgroundImage="/images/gifts/cta-bg.png"
      className="gifts-cta"
    />
  );
}
