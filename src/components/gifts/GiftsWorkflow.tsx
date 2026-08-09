'use client';

import { motion } from 'framer-motion';

const steps = [
  { number: '01', title: 'Consultation', desc: 'We discuss your objectives, target audience, budget, and timeline for the gifting campaign.' },
  { number: '02', title: 'Gift Selection', desc: 'Our specialists present a curated list of premium products and merchandise that align with your brand.' },
  { number: '03', title: 'Branding & Design', desc: 'We create digital mockups showing exactly how your logo and messaging will look on the items.' },
  { number: '04', title: 'Product Approval', desc: 'You review physical or digital samples to ensure complete satisfaction before mass production.' },
  { number: '05', title: 'Production', desc: 'Our in-house team executes the printing, embroidery, or engraving with precision.' },
  { number: '06', title: 'Premium Packaging', desc: 'Items are carefully assembled into bespoke luxury boxes with custom inserts.' },
  { number: '07', title: 'Quality Inspection', desc: 'Every single package undergoes strict quality control to guarantee perfection.' },
  { number: '08', title: 'Distribution', desc: 'We deliver bulk to your headquarters or handle individual shipping to remote employees.' },
];

export default function GiftsWorkflow() {
  return (
    <section className="gifts-workflow py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/4 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-primary font-heading font-bold text-lg">//</span>
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
              Our Process
            </span>
          </div>
          <h2 className="font-heading font-bold text-secondary-dark text-3xl lg:text-4xl mb-4">
            From Concept to Delivery
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-xl mx-auto">
            A seamless, stress-free methodology ensuring your corporate gifts arrive beautifully branded and perfectly on time.
          </p>
        </motion.div>

        {/* Desktop: 4+4 grid with connector line */}
        <div className="hidden lg:block">
          {[steps.slice(0, 4), steps.slice(4)].map((row, rowIdx) => (
            <div key={rowIdx} className="relative mb-10 last:mb-0">
              <div className="absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
              <div className="grid grid-cols-4 gap-4">
                {row.map((step, i) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (rowIdx * 4 + i) * 0.08, duration: 0.5 }}
                    className="relative flex flex-col items-center text-center"
                  >
                    <div className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/25 mb-4">
                      <span className="font-heading font-bold text-white text-sm">{step.number}</span>
                    </div>
                    <h3 className="font-heading font-bold text-secondary-dark text-sm mb-2">{step.title}</h3>
                    <p className="font-body text-gray-500 text-xs leading-relaxed max-w-[200px]">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: vertical list */}
        <div className="lg:hidden flex flex-col gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md shadow-primary/20">
                  <span className="font-heading font-bold text-white text-xs">{step.number}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-primary to-primary/10 my-1" />
                )}
              </div>
              <div className="pb-6">
                <h3 className="font-heading font-bold text-secondary-dark text-base mb-1">{step.title}</h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
