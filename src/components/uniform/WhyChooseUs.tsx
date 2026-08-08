'use client';

import { ServiceFeatures, type ServiceFeature } from '@/components/shared/services';
import {
  Gem, Settings, Scissors, Package, Truck, ShieldCheck,
  BadgeDollarSign, Award, Layers,
} from 'lucide-react';

const features: ServiceFeature[] = [
  { icon: Gem, title: 'Premium Fabrics', desc: 'We source only top-grade, industry-certified textiles that offer superior comfort, durability, and appearance.' },
  { icon: Settings, title: 'Custom Manufacturing', desc: 'Every order is manufactured to your exact specifications — fabric, cut, color, and finish.' },
  { icon: Scissors, title: 'Expert Tailoring', desc: 'Precision tailoring by experienced craftsmen ensuring a perfect fit for every employee.' },
  { icon: Package, title: 'Bulk Production', desc: 'State-of-the-art production facilities capable of handling large-volume orders efficiently.' },
  { icon: Truck, title: 'Fast Delivery', desc: 'Streamlined logistics ensuring timely delivery with real-time order tracking.' },
  { icon: ShieldCheck, title: 'Quality Assurance', desc: 'Rigorous multi-stage quality inspections ensuring every uniform meets our premium standards.' },
  { icon: BadgeDollarSign, title: 'Competitive Pricing', desc: 'Enterprise-grade quality at competitive market rates with flexible pricing for bulk orders.' },
  { icon: Award, title: 'Industry Expertise', desc: 'Over a decade of experience serving clients across 15+ industries across Saudi Arabia.' },
  { icon: Layers, title: 'End-to-End Solutions', desc: 'From consultation and design to manufacturing, branding, and delivery — all under one roof.' },
];

export default function WhyChooseUs() {
  return (
    <ServiceFeatures
      features={features}
      sectionLabel="Why MH Tracon"
      title="The MH Tracon Advantage"
      subtitle="Nine reasons why leading organisations across Saudi Arabia choose us as their uniform partner."
      variant="light"
      cols={3}
      className="uniform-why-choose"
    />
  );
}
