'use client';

import { ServiceFeatures, type ServiceFeature } from '@/components/shared/services';
import {
  ShieldCheck, Brain, Server, BellRing, Smartphone, 
  FileCheck, Expand, Wrench, Lock, Video
} from 'lucide-react';

const features: ServiceFeature[] = [
  { icon: Lock, title: 'Certified Security Professionals', desc: 'Our team comprises certified security system engineers with deep expertise in enterprise deployments.' },
  { icon: ShieldCheck, title: 'Tailored Security Solutions', desc: 'Custom-designed architectures based on rigorous risk assessments and specific operational needs.' },
  { icon: Brain, title: 'AI-Enabled Surveillance', desc: 'Deploying advanced analytics for facial recognition, perimeter breach, and unusual behavior detection.' },
  { icon: Server, title: 'High-Quality Equipment', desc: 'Partnering exclusively with industry-leading manufacturers for robust, reliable hardware.' },
  { icon: Wrench, title: 'Professional Installation', desc: 'Flawless execution with neat cabling, secure mounting, and zero disruption to your daily operations.' },
  { icon: FileCheck, title: 'Regulatory Compliance', desc: 'Systems designed to meet strict local municipality and Saudi Civil Defense security standards.' },
  { icon: Expand, title: 'Scalable Infrastructure', desc: 'Future-proof systems that easily expand from a single office to multi-site national operations.' },
  { icon: BellRing, title: 'Real-Time Alerts', desc: 'Instant push notifications and SMS alerts for any unauthorized access or perimeter breaches.' },
  { icon: Smartphone, title: 'Secure Remote Access', desc: 'Monitor your entire facility from anywhere in the world via secure, encrypted mobile applications.' },
  { icon: Video, title: '24/7 Technical Support', desc: 'Round-the-clock monitoring and emergency technical support to guarantee zero downtime.' },
];

export default function SecurityWhyChooseUs() {
  return (
    <ServiceFeatures
      features={features}
      sectionLabel="Key Benefits"
      title="Why Trust MH Tracon?"
      subtitle="Delivering intelligent, scalable, and robust security infrastructures that protect your most valuable assets."
      variant="dark"
      cols={5}
      className="security-why-choose-us"
    />
  );
}
