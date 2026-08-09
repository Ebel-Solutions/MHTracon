'use client';

import { motion } from 'framer-motion';

const steps = [
  { number: '01', title: 'Consultation', desc: 'Initial discussion to understand your security concerns, compliance requirements, and operational goals.' },
  { number: '02', title: 'Risk Assessment', desc: 'Comprehensive site survey to identify vulnerabilities, coverage blind spots, and integration opportunities.' },
  { number: '03', title: 'System Design', desc: 'Creation of detailed security architectures, camera placement plans, and access control matrices.' },
  { number: '04', title: 'Equipment Selection', desc: 'Sourcing the most reliable, cost-effective, and compliant hardware from trusted global manufacturers.' },
  { number: '05', title: 'Installation', desc: 'Professional deployment by certified technicians ensuring clean cabling and secure mounting.' },
  { number: '06', title: 'System Integration', desc: 'Seamlessly connecting CCTV, access control, alarms, and fire systems into a unified management platform.' },
  { number: '07', title: 'Commissioning', desc: 'Rigorous testing of analytics, alarm triggers, failovers, and remote access capabilities.' },
  { number: '08', title: 'Client Training', desc: 'Hands-on training for your security operators and administrators on using the new systems effectively.' },
  { number: '09', title: 'Project Handover', desc: 'Delivery of as-built documentation, network topology maps, warranties, and administrative credentials.' },
  { number: '10', title: 'AMC & Support', desc: 'Ongoing preventive maintenance, software updates, and 24/7 technical support to ensure continuous protection.' },
];

export default function SecurityWorkflow() {
  return (
    <section className="security-workflow py-20 lg:py-28 bg-white relative overflow-hidden">
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
              Implementation Process
            </span>
          </div>
          <h2 className="font-heading font-bold text-secondary-dark text-3xl lg:text-4xl mb-4">
            How We Secure Your Facility
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-xl mx-auto">
            A meticulous, end-to-end methodology ensuring your security infrastructure is flawlessly designed, deployed, and maintained.
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
