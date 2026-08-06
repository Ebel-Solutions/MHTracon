'use client';

import { motion } from 'framer-motion';
import {
  Building2, Users, Award, Layers, Cpu, Gem, ShieldCheck, Clock, Leaf, Globe,
} from 'lucide-react';

const features = [
  { icon: Building2, title: 'Turnkey Project Delivery', desc: 'Single-source responsibility from design to handover, eliminating coordination gaps.' },
  { icon: Users, title: 'Experienced Engineers & Designers', desc: 'Our team brings decades of combined expertise in architecture, fabrication, and fit-out.' },
  { icon: Gem, title: 'Premium Materials', desc: 'We source only grade-A aluminium, tempered glass, and certified stainless steel materials.' },
  { icon: Layers, title: 'Customised Solutions', desc: 'Every project receives bespoke design tailored to your specific requirements and brand identity.' },
  { icon: Cpu, title: 'Modern Construction Techniques', desc: 'We employ the latest engineering methods, BIM planning, and precision fabrication technology.' },
  { icon: Award, title: 'Precision Workmanship', desc: 'Millimetre-accurate installation and finishing standards across every trade we deliver.' },
  { icon: ShieldCheck, title: 'Quality Assurance', desc: 'Rigorous multi-stage quality inspections at fabrication, installation, and final handover.' },
  { icon: Clock, title: 'Timely Project Completion', desc: 'Disciplined project management ensuring on-schedule delivery without compromising quality.' },
  { icon: Leaf, title: 'Sustainable Design Approach', desc: 'Energy-efficient glazing, responsible material selection, and sustainable construction practices.' },
  { icon: Globe, title: 'International Standards', desc: 'Fully compliant with international construction, safety, and material quality standards.' },
];

export default function IEWhyChooseUs() {
  return (
    <section className="ie-why-choose-us py-20 lg:py-28 bg-secondary-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

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
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">Why MH Tracon</span>
          </div>
          <h2 className="font-heading font-bold text-white text-3xl lg:text-4xl mb-4">
            10 Reasons Clients Trust Us
          </h2>
          <p className="font-body text-white/60 text-lg max-w-xl mx-auto">
            Engineering excellence meets architectural vision in everything we build.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.05, duration: 0.45 }}
                className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-primary/15 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/25 transition-colors duration-300">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-white text-sm mb-1.5">{f.title}</h3>
                <p className="font-body text-white/50 text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
