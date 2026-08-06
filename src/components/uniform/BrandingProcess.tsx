'use client';

import { motion } from 'framer-motion';
import {
  MessageSquare, Palette, Layers, FlaskConical,
  Factory, ShieldCheck, Package
} from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Consultation',
    desc: 'We understand your requirements, industry standards, and branding guidelines.',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Design',
    desc: 'Our design team creates custom uniform concepts tailored to your brand identity.',
  },
  {
    number: '03',
    icon: Layers,
    title: 'Fabric Selection',
    desc: 'Choose from our premium fabric catalogue — cotton, polyester, blends, and specialty materials.',
  },
  {
    number: '04',
    icon: FlaskConical,
    title: 'Sampling',
    desc: 'A physical sample is produced for your review and approval before bulk production.',
  },
  {
    number: '05',
    icon: Factory,
    title: 'Manufacturing',
    desc: 'Full-scale production in our facility with strict process controls and timelines.',
  },
  {
    number: '06',
    icon: ShieldCheck,
    title: 'Quality Inspection',
    desc: 'Multi-stage quality checks ensure every uniform meets our premium standards.',
  },
  {
    number: '07',
    icon: Package,
    title: 'Delivery',
    desc: 'Professionally packaged and delivered on time, anywhere across Saudi Arabia.',
  },
];

export default function BrandingProcess() {
  return (
    <section className="uniform-process py-20 lg:py-28 bg-secondary-dark relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'url(/images/shape/shape-4.png)', backgroundRepeat: 'repeat' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(241,109,43,0.08),transparent_60%)]" />

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
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">How It Works</span>
          </div>
          <h2 className="font-heading font-bold text-white text-3xl lg:text-4xl mb-4">
            Our 7-Step Uniform Program
          </h2>
          <p className="font-body text-white/60 text-lg max-w-xl mx-auto">
            A seamless, end-to-end process from your first enquiry to final delivery.
          </p>
        </motion.div>

        {/* Steps — horizontal scroll on mobile, grid on desktop */}
        <div className="overflow-x-auto pb-4 lg:overflow-x-visible">
          <div className="flex lg:grid lg:grid-cols-7 gap-0 min-w-max lg:min-w-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative flex flex-col items-center text-center px-4 lg:px-2 min-w-[160px] lg:min-w-0"
                >
                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className="absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] lg:left-[calc(50%+2.5rem)] lg:w-[calc(100%-5rem)] h-px bg-white/10" />
                  )}

                  {/* Icon circle */}
                  <div className="relative w-16 h-16 bg-secondary rounded-full border-2 border-white/10 flex items-center justify-center mb-4 z-10 group hover:border-primary hover:bg-primary/10 transition-all duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-[9px] font-heading font-bold">{step.number}</span>
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-white text-sm mb-1.5">{step.title}</h3>
                  <p className="font-body text-white/50 text-xs leading-relaxed max-w-[130px]">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
