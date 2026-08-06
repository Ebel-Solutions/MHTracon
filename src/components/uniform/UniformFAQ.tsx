'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What is the minimum order quantity for custom uniforms?',
    a: 'Our minimum order quantity is 25 pieces per style/design. For bulk corporate programs, we offer special pricing tiers starting from 100 pieces.',
  },
  {
    q: 'How long does it take to manufacture and deliver uniforms?',
    a: 'Standard orders are completed in 10–15 business days. Rush orders (5–7 business days) are available at a premium. Complex multi-category orders may take 20–25 days.',
  },
  {
    q: 'Can you match our exact brand colors?',
    a: 'Yes. We work with Pantone color codes and custom dye processes to match your brand colors precisely. Sample swatches are provided for approval before bulk manufacturing.',
  },
  {
    q: 'Do you provide samples before bulk production?',
    a: 'Absolutely. A physical sample is always manufactured and sent for your approval before we proceed with bulk production — at no extra charge for orders above 100 pieces.',
  },
  {
    q: 'What branding and customization options are available?',
    a: 'We offer embroidery, screen printing, heat transfer printing, woven labels, name personalization, custom buttons, and private label manufacturing.',
  },
  {
    q: 'Do you offer recurring supply agreements?',
    a: 'Yes. We offer long-term uniform programs with scheduled replenishment, dedicated account management, and preferential pricing for annual contracts.',
  },
  {
    q: 'Can you handle orders for multiple locations or branches?',
    a: 'Yes. We manage multi-location delivery programs, separate packaging by branch, and centralized billing for enterprise clients.',
  },
  {
    q: 'What fabric options do you offer?',
    a: 'We offer a wide range of fabrics including 100% cotton, polyester-cotton blends, anti-static, flame-retardant, moisture-wicking, and antibacterial fabrics depending on your industry requirements.',
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden hover:border-primary/30 transition-colors duration-300">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 lg:p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="font-heading font-semibold text-secondary-dark text-base lg:text-lg">
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0"
        >
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

export default function UniformFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="uniform-faq py-20 lg:py-28 bg-gray-50">
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
            Everything you need to know about our uniform solutions.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
