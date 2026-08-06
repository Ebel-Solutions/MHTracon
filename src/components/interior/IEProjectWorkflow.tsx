'use client';

import { motion } from 'framer-motion';

const steps = [
  { n: '01', title: 'Consultation', desc: 'Initial discussion of your project vision, requirements, and objectives.' },
  { n: '02', title: 'Site Survey', desc: 'Detailed on-site assessment to understand structural conditions and constraints.' },
  { n: '03', title: 'Requirement Analysis', desc: 'Comprehensive analysis of technical, aesthetic, and budgetary requirements.' },
  { n: '04', title: 'Concept Design', desc: 'Creation of architectural concepts and detailed design proposals for review.' },
  { n: '05', title: 'Material Selection', desc: 'Curated presentation of premium materials, finishes, and system specifications.' },
  { n: '06', title: 'Engineering & Planning', desc: 'Structural calculations, MEP coordination, and detailed project scheduling.' },
  { n: '07', title: 'Fabrication', desc: 'Precision manufacturing of all aluminium, glass, and steel components in our facility.' },
  { n: '08', title: 'Installation', desc: 'Expert site installation by certified teams following strict safety protocols.' },
  { n: '09', title: 'Quality Inspection', desc: 'Comprehensive multi-point quality checks to ensure all work meets specifications.' },
  { n: '10', title: 'Project Handover', desc: 'Final walkthrough, documentation, warranties, and complete project handover.' },
];

export default function IEProjectWorkflow() {
  return (
    <section className="ie-workflow py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-primary font-heading font-bold text-lg">//</span>
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">Our Process</span>
          </div>
          <h2 className="font-heading font-bold text-secondary-dark text-3xl lg:text-4xl mb-4">
            10-Step Project Workflow
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-xl mx-auto">
            A disciplined, transparent execution process — from your first call to project handover.
          </p>
        </motion.div>

        {/* Timeline grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-[38px] left-[calc(10%+1rem)] right-[calc(10%+1rem)] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Number bubble */}
              <div className="w-16 h-16 rounded-full bg-secondary-dark border-2 border-primary/40 group-hover:border-primary flex items-center justify-center mb-4 transition-all duration-300 relative z-10">
                <span className="font-heading font-bold text-primary text-sm">{step.n}</span>
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 group-hover:border-primary/20 group-hover:shadow-md transition-all duration-300 w-full">
                <h3 className="font-heading font-bold text-secondary-dark text-sm mb-1.5">{step.title}</h3>
                <p className="font-body text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
