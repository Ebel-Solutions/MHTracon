'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const services = [
  'Custom Embroidery',
  'Logo Branding',
  'Screen Printing',
  'Heat Transfer Printing',
  'Name Personalization',
  'Custom Labels',
  'Bulk Manufacturing',
  'Private Label Manufacturing',
  'Corporate Branding',
  'Recurring Supply Agreements',
  'Long-Term Uniform Programs',
  'Bulk Order Discounts',
];

export default function ValueAddedServices() {
  return (
    <section className="uniform-value-added py-20 lg:py-24 bg-white">
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
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">Added Value</span>
          </div>
          <h2 className="font-heading font-bold text-secondary-dark text-3xl lg:text-4xl mb-4">
            Customisation & Branding Services
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-xl mx-auto">
            Beyond manufacturing — we offer a full suite of value-added services to make your uniforms truly yours.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
              className="group flex items-center gap-2 bg-gray-50 hover:bg-primary border border-gray-200 hover:border-primary rounded-full px-5 py-2.5 cursor-default transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary group-hover:text-white transition-colors duration-300" />
              <span className="font-body text-secondary-dark group-hover:text-white text-sm font-medium transition-colors duration-300">
                {service}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
