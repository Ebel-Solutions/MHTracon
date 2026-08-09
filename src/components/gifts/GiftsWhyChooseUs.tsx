'use client';

import { ServiceFeatures, type ServiceFeature } from '@/components/shared/services';
import {
  Paintbrush, Award, Box, Layers, Zap, Gift,
  Headset, Globe2, Briefcase, Handshake
} from 'lucide-react';

const features: ServiceFeature[] = [
  { icon: Paintbrush, title: 'Fully Customized Branding', desc: 'Every product is meticulously branded to match your strict corporate identity guidelines.' },
  { icon: Award, title: 'Premium Product Quality', desc: 'We source only from reputable global manufacturers, ensuring every gift reflects excellence.' },
  { icon: Box, title: 'Luxury Packaging', desc: 'Presentation is everything. We offer bespoke boxes, premium ribbons, and personalized inserts.' },
  { icon: Layers, title: 'Bulk Order Expertise', desc: 'Equipped to seamlessly handle massive quantities for national conferences and enterprise workforces.' },
  { icon: Zap, title: 'Fast Turnaround', desc: 'Agile operations and local printing capabilities allow us to meet tight corporate deadlines.' },
  { icon: Gift, title: 'Creative Gift Curation', desc: 'Our team helps you conceptualize unique, memorable gifts rather than standard catalog items.' },
  { icon: Headset, title: 'Dedicated Account Management', desc: 'A single point of contact for smooth communication from conceptualization to final delivery.' },
  { icon: Globe2, title: 'Reliable Global Sourcing', desc: 'Access to exclusive international brands and promotional merchandise not available locally.' },
  { icon: Briefcase, title: 'Corporate Branding Specialists', desc: 'Decades of experience understanding the nuances of B2B relationships and executive etiquette.' },
  { icon: Handshake, title: 'Long-Term Partnerships', desc: 'We aim to become your trusted ongoing partner for all annual gifting and promotional needs.' },
];

export default function GiftsWhyChooseUs() {
  return (
    <ServiceFeatures
      features={features}
      sectionLabel="The MH Tracon Advantage"
      title="Why Choose Us for Corporate Gifting?"
      subtitle="Delivering excellence in every box. We handle the complexity of bulk sourcing and branding so you can focus on building relationships."
      variant="dark"
      cols={5}
      className="gifts-why-choose-us"
    />
  );
}
