'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'Do you offer a free design consultation?', a: 'Yes. We offer a complimentary initial consultation to understand your project requirements, site conditions, and objectives before proposing a design approach.' },
  { q: 'What materials do you use for aluminium cladding systems?', a: 'We use premium aluminium composite panels (ACP) from certified manufacturers, in a range of finishes including brushed, mirror, matte, wood-effect, and custom colours.' },
  { q: 'What is the typical timeline for a commercial fit-out project?', a: 'Timeline depends on project scale and complexity. A typical office fit-out of 1,000–5,000 sqm takes 6–16 weeks from design approval to handover, subject to scope and site access.' },
  { q: 'Do you handle the full installation process?', a: 'Yes. We provide turnkey delivery — our own certified installation teams handle all phases including fabrication, transport, on-site assembly, and final finishing.' },
  { q: 'What maintenance is required for structural glazing and facades?', a: 'Glass curtain wall systems require periodic cleaning and annual sealant inspections. We provide a post-handover maintenance guide and offer optional service contracts.' },
  { q: 'Do you provide a warranty on your work?', a: 'Yes. We provide a standard 12-month workmanship warranty on all installations. Material warranties vary by product and manufacturer — typically 5 to 10 years.' },
  { q: 'Can you handle large-scale commercial projects?', a: 'Absolutely. We have delivered large-scale commercial, hospitality, and mixed-use projects across Saudi Arabia. Our capacity scales to meet the demands of any project size.' },
  { q: 'Can we customise the design and finishes?', a: 'All our solutions are fully customisable. We work with your architect or interior designer to specify finishes, colours, profiles, and configurations that match your brand and vision.' },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden hover:border-primary/30 transition-colors duration-300">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 lg:p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="font-heading font-semibold text-secondary-dark text-base lg:text-lg">{faq.q}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="flex-shrink-0">
          <ChevronDown className="h-5 w-5 text-primary" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-5 lg:px-6 pb-5 lg:pb-6 bg-white">
              <div className="w-8 h-0.5 bg-primary mb-3" />
              <p className="font-body text-gray-600 text-sm lg:text-base leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function IEFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="ie-faq py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-primary font-heading font-bold text-lg">//</span>
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">Common Questions</span>
          </div>
          <h2 className="font-heading font-bold text-secondary-dark text-3xl lg:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-xl mx-auto">
            Everything you need to know about our architectural and fit-out services.
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
