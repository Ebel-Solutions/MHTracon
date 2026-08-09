'use client';

import { ServiceFeatures, type ServiceFeature } from '@/components/shared/services';
import {
  Palette, PenTool, Focus, Type, PackageOpen, Box, FileImage
} from 'lucide-react';

const solutions: ServiceFeature[] = [
  { icon: Palette, title: 'Corporate Identity Integration', desc: 'Seamless application of your brand colors, logos, and typography across all merchandise.' },
  { icon: PenTool, title: 'Precision Embroidery', desc: 'High-quality, durable thread embroidery for corporate apparel, caps, and premium bags.' },
  { icon: Focus, title: 'Laser Engraving', desc: 'Elegant, permanent etching on metal drinkware, executive pens, and crystal awards.' },
  { icon: Type, title: 'Logo Printing', desc: 'Vibrant screen printing and heat transfers for high-volume promotional items and t-shirts.' },
  { icon: FileImage, title: 'UV Printing', desc: 'High-resolution, full-color printing for tech accessories, notebooks, and flat surfaces.' },
  { icon: PackageOpen, title: 'Premium Packaging', desc: 'Luxury finishing touches including embossed boxes, ribbon ties, and personalized inserts.' },
  { icon: Box, title: 'Custom Gift Box Design', desc: 'Bespoke box engineering tailored perfectly to the dimensions of your curated gift sets.' },
  { icon: Palette, title: 'Apparel Branding', desc: 'Custom branding for corporate wear and promotional clothing to unify your team.' },
];

export default function GiftsBrandingSolutions() {
  return (
    <ServiceFeatures
      features={solutions}
      sectionLabel="In-House Capabilities"
      title="Corporate Branding Solutions"
      subtitle="We utilize state-of-the-art branding techniques to ensure your corporate logo and message are presented flawlessly."
      variant="light"
      cols={3}
      className="gifts-branding-solutions"
    />
  );
}
