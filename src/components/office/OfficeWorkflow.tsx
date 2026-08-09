'use client';

import { motion } from 'framer-motion';

const steps = [
  { number: '01', title: 'Consultation', desc: 'We assess your recurring office needs, employee headcount, and brand requirements.' },
  { number: '02', title: 'Product Selection', desc: 'Our experts curate a tailored catalog of premium supplies and branded merchandise.' },
  { number: '03', title: 'Quotation', desc: 'You receive a transparent, competitive bulk quotation or annual contract proposal.' },
  { number: '04', title: 'Approval', desc: 'Once approved, your dedicated account manager locks in the pricing and inventory.' },
  { number: '05', title: 'Procurement', desc: 'We source the highest quality products directly from authorized global manufacturers.' },
  { number: '06', title: 'Customization', desc: 'In-house branding applied to uniforms, gifts, and stationery as per brand guidelines.' },
  { number: '07', title: 'Quality Check', desc: 'Rigorous inspection to ensure print quality, product integrity, and accurate quantities.' },
  { number: '08', title: 'Packaging', desc: 'Secure, organized corporate packaging. Specialized boxing for employee welcome kits.' },
  { number: '09', title: 'Delivery', desc: 'Prompt, scheduled delivery to your headquarters or multiple regional branches.' },
  { number: '10', title: 'Ongoing Support', desc: 'Seamless reordering, inventory management, and dedicated post-sales assistance.' },
];

export default function OfficeWorkflow() {
  return (
    <section className="office-workflow py-20 lg:py-28 bg-white relative overflow-hidden">
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
              Procurement Process
            </span>
          </div>
          <h2 className="font-heading font-bold text-secondary-dark text-3xl lg:text-4xl mb-4">
            How We Supply Your Business
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-xl mx-auto">
            A streamlined, transparent supply chain designed for enterprise efficiency and reliability.
          </p>
        </motion.div>

        {/* Desktop: 5+5 grid with connector line */}
        <div className="hidden lg:block">
          {[steps.slice(0, 5), steps.slice(5)].map((row, rowIdx) => (
            <div key={rowIdx} className="relative mb-10 last:mb-0">
              <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
              <div className="grid grid-cols-5 gap-4">
                {row.map((step, i) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (rowIdx * 5 + i) * 0.08, duration: 0.5 }}
                    className="relative flex flex-col items-center text-center"
                  >
                    <div className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/25 mb-4">
                      <span className="font-heading font-bold text-white text-sm">{step.number}</span>
                    </div>
                    <h3 className="font-heading font-bold text-secondary-dark text-sm mb-2">{step.title}</h3>
                    <p className="font-body text-gray-500 text-xs leading-relaxed">{step.desc}</p>
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
