'use client';

import { ServiceFeatures, type ServiceFeature } from '@/components/shared/services';
import {
  Layers, Users, ShieldCheck, Leaf, Package, Award,
  AlertTriangle, Clock, Wrench, Building2,
} from 'lucide-react';

const features: ServiceFeature[] = [
  { icon: Layers, title: 'End-to-End MEP Solutions', desc: 'Complete project lifecycle from engineering design through installation, testing, and long-term maintenance.' },
  { icon: Users, title: 'Experienced Engineering Team', desc: 'Senior MEP engineers and certified technicians with decades of combined project experience.' },
  { icon: ShieldCheck, title: 'International Standards', desc: 'Full compliance with ASHRAE, NFPA, IEC, BS, CIBSE, and Saudi SBC regulations.' },
  { icon: Leaf, title: 'Energy-Efficient Designs', desc: 'Sustainable MEP design methodologies targeting LEED, Estidama, and Green Building compliance.' },
  { icon: Package, title: 'Turnkey Project Execution', desc: 'Single-source accountability — we handle design, procurement, installation, and commissioning.' },
  { icon: Award, title: 'Proven Quality Assurance', desc: 'Structured QA/QC protocols at every project phase, validated through independent testing and inspection.' },
  { icon: AlertTriangle, title: 'Safety-First Approach', desc: 'Strict QHSE standards, safety method statements, and permit-to-work systems on every site.' },
  { icon: Clock, title: 'Timely Project Delivery', desc: 'Programme-driven project management ensuring on-time delivery without compromising quality.' },
  { icon: Wrench, title: 'Maintenance Expertise', desc: 'In-house PPM and AMC teams with full CAFM system integration for real-time asset tracking.' },
  { icon: Building2, title: 'Long-Term Facility Support', desc: 'Post-handover partnerships providing 24/7 support, annual contracts, and lifecycle cost management.' },
];

export default function MEPWhyChooseUs() {
  return (
    <ServiceFeatures
      features={features}
      sectionLabel="Why MH Tracon"
      title="10 Reasons to Choose Us"
      subtitle="Engineering quality, safety, and service that leading clients across Saudi Arabia depend on."
      variant="dark"
      cols={5}
      className="mep-why-choose-us"
    />
  );
}
