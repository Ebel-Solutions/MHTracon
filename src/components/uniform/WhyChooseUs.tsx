'use client';

import { motion } from 'framer-motion';
import {
  Gem, Settings, Scissors, Package, Truck, ShieldCheck,
  BadgeDollarSign, Award, Layers
} from 'lucide-react';

const features = [
  { icon: Gem, title: 'Premium Fabrics', desc: 'We source only top-grade, industry-certified textiles that offer superior comfort, durability, and appearance.' },
  { icon: Settings, title: 'Custom Manufacturing', desc: 'Every order is manufactured to your exact specifications — fabric, cut, color, and finish.' },
  { icon: Scissors, title: 'Expert Tailoring', desc: 'Precision tailoring by experienced craftsmen ensuring a perfect fit for every employee.' },
  { icon: Package, title: 'Bulk Production', desc: 'State-of-the-art production facilities capable of handling large-volume orders efficiently.' },
  { icon: Truck, title: 'Fast Delivery', desc: 'Streamlined logistics ensuring timely delivery with real-time order tracking.' },
  { icon: ShieldCheck, title: 'Quality Assurance', desc: 'Rigorous multi-stage quality inspections ensuring every uniform meets our premium standards.' },
  { icon: BadgeDollarSign, title: 'Competitive Pricing', desc: 'Enterprise-grade quality at competitive market rates with flexible pricing for bulk orders.' },
  { icon: Award, title: 'Industry Expertise', desc: 'Over a decade of experience serving clients across 15+ industries across Saudi Arabia.' },
  { icon: Layers, title: 'End-to-End Solutions', desc: 'From consultation and design to manufacturing, branding, and delivery — all under one roof.' },
];

export default function WhyChooseUs() {
  return (
    <section className="uniform-why-choose py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-primary font-heading font-bold text-lg">//</span>
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">Why MH Tracon</span>
          </div>
          <h2 className="font-heading font-bold text-secondary-dark text-3xl lg:text-4xl mb-4">
            The MH Tracon Advantage
          </h2>
          <p className="font-body text-gray-500 text-lg">
            Nine reasons why leading organisations across Saudi Arabia choose us as their uniform partner.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                className="group p-6 rounded-xl border border-gray-100 bg-white hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-400 cursor-default"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-bold text-secondary-dark text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
