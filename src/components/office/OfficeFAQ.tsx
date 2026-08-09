import { ServiceFAQ, type FAQItem } from '@/components/shared/services';

const faqs: FAQItem[] = [
  { q: 'Do you offer Annual Procurement Contracts?', a: 'Yes. Our Annual Supply Agreements lock in preferential bulk pricing and guarantee priority stock allocation for your recurring office needs throughout the year.' },
  { q: 'What is your Minimum Order Quantity (MOQ)?', a: 'MOQs vary by product category. Everyday office supplies have very low MOQs, while custom-branded merchandise (like uniforms or engraved pens) typically require a minimum of 50-100 units.' },
  { q: 'Can you customize products with our corporate logo?', a: 'Absolutely. We offer premium in-house branding services including embroidery, screen printing, UV printing, and laser engraving for apparel, drinkware, and stationery.' },
  { q: 'How fast is your delivery for bulk orders?', a: 'Standard stock items are delivered within 24-48 hours across major cities. Customized or specially imported bulk orders generally take 7-14 working days after artwork approval.' },
  { q: 'Do you provide eco-friendly or sustainable office products?', a: 'Yes. We have a dedicated range of sustainable products including recycled paper, bamboo desk accessories, biodegradable pens, and reusable corporate drinkware.' },
  { q: 'Can you supply Employee Welcome Kits for new hires?', a: 'Yes, this is one of our specialties. We can curate, brand, package, and deliver premium welcome kits (backpacks, notebooks, hoodies, flasks) directly to your office.' },
  { q: 'Are your IT consumables genuine and authorized?', a: '100%. We source all our IT consumables (toners, ink, storage devices) directly from authorized regional distributors, ensuring full warranties and zero counterfeit risks.' },
  { q: 'Do you offer dedicated account management?', a: 'Yes. All our corporate clients are assigned a dedicated procurement account manager to handle quotes, track deliveries, and manage urgent restock requests.' },
];

export default function OfficeFAQ() {
  return (
    <ServiceFAQ
      faqs={faqs}
      sectionLabel="Common Questions"
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about our corporate supply and procurement services."
      className="office-faq"
    />
  );
}
