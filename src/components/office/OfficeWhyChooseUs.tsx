'use client';

import { ServiceFeatures, type ServiceFeature } from '@/components/shared/services';
import {
  PackageSearch, Medal, ArchiveRestore, Truck,
  Tags, Brush, Sprout, UserCheck, Handshake, ShieldCheck
} from 'lucide-react';

const features: ServiceFeature[] = [
  { icon: PackageSearch, title: 'One-Stop Procurement', desc: 'Consolidate your purchasing. We supply everything from paper clips to IT hardware under one roof.' },
  { icon: Medal, title: 'Premium Quality', desc: 'We strictly source from authorized global distributors to guarantee genuine, high-quality products.' },
  { icon: ArchiveRestore, title: 'Reliable Inventory', desc: 'Our large-scale warehousing ensures that your critical office essentials are always in stock.' },
  { icon: Tags, title: 'Competitive Pricing', desc: 'Benefit from our bulk purchasing power with aggressive B2B pricing and volume discounts.' },
  { icon: Truck, title: 'Fast Delivery', desc: 'Our dedicated logistics fleet ensures timely, secure delivery to your corporate premises.' },
  { icon: Brush, title: 'Customized Branding', desc: 'In-house customization for uniforms, drinkware, and executive gifts with your corporate logo.' },
  { icon: Sprout, title: 'Sustainable Options', desc: 'A wide range of eco-friendly, biodegradable, and recycled products to meet your ESG goals.' },
  { icon: UserCheck, title: 'Dedicated Accounts', desc: 'A dedicated account manager for personalized service, rapid quotes, and order tracking.' },
  { icon: Handshake, title: 'Long-Term Partnerships', desc: 'Flexible annual supply contracts locking in prices and ensuring uninterrupted supply chains.' },
  { icon: ShieldCheck, title: 'Bulk Supply Expertise', desc: 'Proven track record of fulfilling massive procurement orders for government and enterprise sectors.' },
];

export default function OfficeWhyChooseUs() {
  return (
    <ServiceFeatures
      features={features}
      sectionLabel="The MH Tracon Advantage"
      title="Why Choose Us for Corporate Supply?"
      subtitle="We don't just sell products; we provide reliable, scalable procurement solutions that save you time and money."
      variant="dark"
      cols={5}
      className="office-why-choose-us"
    />
  );
}
