'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  q: string;
  a: string;
}

export interface ServiceFAQProps {
  faqs: FAQItem[];
  sectionLabel?: string;
  title?: string;
  subtitle?: string;
  /** Extra class on outer section */
  className?: string;
}

function AccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
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

export default function ServiceFAQ({
  faqs,
  sectionLabel = 'Common Questions',
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know.',
  className = '',
}: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={`service-faq py-20 lg:py-28 bg-gray-50 ${className}`}>
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
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
              {sectionLabel}
            </span>
          </div>
          <h2 className="font-heading font-bold text-secondary-dark text-3xl lg:text-4xl mb-4">{title}</h2>
          {subtitle && (
            <p className="font-body text-gray-500 text-lg max-w-xl mx-auto">{subtitle}</p>
          )}
        </motion.div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <AccordionItem
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
