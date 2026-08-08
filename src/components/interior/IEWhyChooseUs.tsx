'use client';

import { ServiceFeatures, type ServiceFeature } from '@/components/shared/services';
import {
  Building2, Users, Award, Layers, Cpu, Gem, ShieldCheck, Clock, Leaf, Globe,
} from 'lucide-react';

const features: ServiceFeature[] = [
  { icon: Building2, title: 'Turnkey Project Delivery', desc: 'Single-source responsibility from design to handover, eliminating coordination gaps.' },
  { icon: Users, title: 'Experienced Engineers & Designers', desc: 'Our team brings decades of combined expertise in architecture, fabrication, and fit-out.' },
  { icon: Gem, title: 'Premium Materials', desc: 'We source only grade-A aluminium, tempered glass, and certified stainless steel materials.' },
  { icon: Layers, title: 'Customised Solutions', desc: 'Every project receives bespoke design tailored to your specific requirements and brand identity.' },
  { icon: Cpu, title: 'Modern Construction Techniques', desc: 'We employ the latest engineering methods, BIM planning, and precision fabrication technology.' },
  { icon: Award, title: 'Precision Workmanship', desc: 'Millimetre-accurate installation and finishing standards across every trade we deliver.' },
  { icon: ShieldCheck, title: 'Quality Assurance', desc: 'Rigorous multi-stage quality inspections at fabrication, installation, and final handover.' },
  { icon: Clock, title: 'Timely Project Completion', desc: 'Disciplined project management ensuring on-schedule delivery without compromising quality.' },
  { icon: Leaf, title: 'Sustainable Design Approach', desc: 'Energy-efficient glazing, responsible material selection, and sustainable construction practices.' },
  { icon: Globe, title: 'International Standards', desc: 'Fully compliant with international construction, safety, and material quality standards.' },
];

export default function IEWhyChooseUs() {
  return (
    <ServiceFeatures
      features={features}
      sectionLabel="Why MH Tracon"
      title="10 Reasons Clients Trust Us"
      subtitle="Engineering excellence meets architectural vision in everything we build."
      variant="dark"
      cols={5}
      className="ie-why-choose-us"
    />
  );
}
