'use client';

import { motion } from 'framer-motion';

const steps = [
  { number: '01', title: 'Consultation', desc: 'Initial client briefing to understand project scope, building type, and engineering requirements.' },
  { number: '02', title: 'Site Survey', desc: 'Detailed site assessment including measurements, existing infrastructure evaluation, and constraints identification.' },
  { number: '03', title: 'Engineering Assessment', desc: 'Load calculations, system sizing, and feasibility analysis by our senior MEP engineers.' },
  { number: '04', title: 'System Design', desc: 'Detailed MEP design drawings, schematics, and specifications prepared to international standards.' },
  { number: '05', title: 'Material Procurement', desc: 'Specification-matched materials sourced from approved, certified suppliers and manufacturers.' },
  { number: '06', title: 'Installation', desc: 'Skilled installation teams execute work to approved drawings with daily quality monitoring.' },
  { number: '07', title: 'Testing & Commissioning', desc: 'All systems tested, balanced, and commissioned to confirm design performance is achieved.' },
  { number: '08', title: 'Quality Inspection', desc: 'Independent quality inspection and punch list closure before formal client handover.' },
  { number: '09', title: 'Project Handover', desc: 'Formal handover with as-built drawings, O&M manuals, warranties, and training documentation.' },
  { number: '10', title: 'AMC & Support', desc: 'Optional annual maintenance contracts and 24/7 emergency support for long-term facility performance.' },
];

export default function MEPWorkflow() {
  return (
    <section className="mep-workflow py-20 lg:py-28 bg-white relative overflow-hidden">
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
              How We Work
            </span>
          </div>
          <h2 className="font-heading font-bold text-secondary-dark text-3xl lg:text-4xl mb-4">
            10-Step Project Execution
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-xl mx-auto">
            A structured, proven process that delivers quality MEP projects on time and to specification, every time.
          </p>
        </motion.div>

        {/* Desktop: 5+5 grid with connector line */}
        <div className="hidden lg:block">
          {[steps.slice(0, 5), steps.slice(5)].map((row, rowIdx) => (
            <div key={rowIdx} className="relative mb-10 last:mb-0">
              {/* Connector line */}
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
                    {/* Number bubble */}
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
              {/* Left: number + line */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md shadow-primary/20">
                  <span className="font-heading font-bold text-white text-xs">{step.number}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-primary to-primary/10 my-1" />
                )}
              </div>
              {/* Right: content */}
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
