import { ServiceFAQ, type FAQItem } from '@/components/shared/services';

const faqs: FAQItem[] = [
  { q: 'What is the Minimum Order Quantity (MOQ) for corporate gifts?', a: 'MOQs vary depending on the product and the branding required. Standard promotional items usually start at 100 units, while premium executive gifts or customized welcome kits can start from 50 units.' },
  { q: 'What branding options do you provide?', a: 'We offer a comprehensive suite of in-house branding including UV printing, silk screen printing, laser engraving, heat transfer, and precision embroidery, ensuring the right application for every material.' },
  { q: 'Can you create custom packaging?', a: 'Yes. Presentation is key in corporate gifting. We design and produce custom magnetic boxes, rigid boxes, and luxury sleeves complete with your branding and custom die-cut foam inserts.' },
  { q: 'What are your typical delivery timelines?', a: 'Standard branded merchandise from local stock typically takes 7-10 working days after artwork approval. Large bulk orders or customized imports may take 3-4 weeks.' },
  { q: 'Do you offer seasonal gifting programs?', a: 'Absolutely. We curate exclusive collections for Ramadan, Eid, Saudi National Day, and End-of-Year celebrations. We recommend planning these at least 6 weeks in advance.' },
  { q: 'Can you handle distribution to multiple locations?', a: 'Yes. We can deliver bulk orders to your central headquarters, or we can handle individual fulfillment, shipping welcome kits or gifts directly to your employees\' homes or regional offices.' },
  { q: 'Do you offer eco-friendly gifting options?', a: 'Yes. We have a dedicated sustainable collection featuring bamboo tech accessories, recycled notebooks, organic cotton apparel, and biodegradable pens.' },
];

export default function GiftsFAQ() {
  return (
    <ServiceFAQ
      faqs={faqs}
      sectionLabel="Common Questions"
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about our corporate gifting and branding services."
      className="gifts-faq"
    />
  );
}
