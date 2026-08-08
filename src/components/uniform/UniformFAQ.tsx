import { ServiceFAQ, type FAQItem } from '@/components/shared/services';

const faqs: FAQItem[] = [
  { q: 'What is the minimum order quantity for custom uniforms?', a: 'Our minimum order quantity is 25 pieces per style/design. For bulk corporate programs, we offer special pricing tiers starting from 100 pieces.' },
  { q: 'How long does it take to manufacture and deliver uniforms?', a: 'Standard orders are completed in 10–15 business days. Rush orders (5–7 business days) are available at a premium. Complex multi-category orders may take 20–25 days.' },
  { q: 'Can you match our exact brand colors?', a: 'Yes. We work with Pantone color codes and custom dye processes to match your brand colors precisely. Sample swatches are provided for approval before bulk manufacturing.' },
  { q: 'Do you provide samples before bulk production?', a: 'Absolutely. A physical sample is always manufactured and sent for your approval before we proceed with bulk production — at no extra charge for orders above 100 pieces.' },
  { q: 'What branding and customization options are available?', a: 'We offer embroidery, screen printing, heat transfer printing, woven labels, name personalization, custom buttons, and private label manufacturing.' },
  { q: 'Do you offer recurring supply agreements?', a: 'Yes. We offer long-term uniform programs with scheduled replenishment, dedicated account management, and preferential pricing for annual contracts.' },
  { q: 'Can you handle orders for multiple locations or branches?', a: 'Yes. We manage multi-location delivery programs, separate packaging by branch, and centralized billing for enterprise clients.' },
  { q: 'What fabric options do you offer?', a: 'We offer a wide range of fabrics including 100% cotton, polyester-cotton blends, anti-static, flame-retardant, moisture-wicking, and antibacterial fabrics depending on your industry requirements.' },
];

export default function UniformFAQ() {
  return (
    <ServiceFAQ
      faqs={faqs}
      sectionLabel="Common Questions"
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about our uniform solutions."
      className="uniform-faq"
    />
  );
}
