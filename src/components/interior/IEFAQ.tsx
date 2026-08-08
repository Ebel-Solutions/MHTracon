import { ServiceFAQ, type FAQItem } from '@/components/shared/services';

const faqs: FAQItem[] = [
  { q: 'Do you offer a free design consultation?', a: 'Yes. We offer a complimentary initial consultation to understand your project requirements, site conditions, and objectives before proposing a design approach.' },
  { q: 'What materials do you use for aluminium cladding systems?', a: 'We use premium aluminium composite panels (ACP) from certified manufacturers, in a range of finishes including brushed, mirror, matte, wood-effect, and custom colours.' },
  { q: 'What is the typical timeline for a commercial fit-out project?', a: 'Timeline depends on project scale and complexity. A typical office fit-out of 1,000–5,000 sqm takes 6–16 weeks from design approval to handover, subject to scope and site access.' },
  { q: 'Do you handle the full installation process?', a: 'Yes. We provide turnkey delivery — our own certified installation teams handle all phases including fabrication, transport, on-site assembly, and final finishing.' },
  { q: 'What maintenance is required for structural glazing and facades?', a: 'Glass curtain wall systems require periodic cleaning and annual sealant inspections. We provide a post-handover maintenance guide and offer optional service contracts.' },
  { q: 'Do you provide a warranty on your work?', a: 'Yes. We provide a standard 12-month workmanship warranty on all installations. Material warranties vary by product and manufacturer — typically 5 to 10 years.' },
  { q: 'Can you handle large-scale commercial projects?', a: 'Absolutely. We have delivered large-scale commercial, hospitality, and mixed-use projects across Saudi Arabia. Our capacity scales to meet the demands of any project size.' },
  { q: 'Can we customise the design and finishes?', a: 'All our solutions are fully customisable. We work with your architect or interior designer to specify finishes, colours, profiles, and configurations that match your brand and vision.' },
];

export default function IEFAQ() {
  return (
    <ServiceFAQ
      faqs={faqs}
      sectionLabel="Common Questions"
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about our architectural and fit-out services."
      className="ie-faq"
    />
  );
}
