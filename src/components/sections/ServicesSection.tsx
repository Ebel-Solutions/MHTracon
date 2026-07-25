'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Palette,
  Zap,
  Brain,
  ShieldCheck,
  Package,
  Gift,
  Shirt,
  ArrowRight,
} from 'lucide-react';
import { servicesData } from '@/data/services-cards';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Palette,
  Zap,
  Brain,
  ShieldCheck,
  Package,
  Gift,
  Shirt,
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
};

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
              What We Offer
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-secondary mb-4 leading-tight">
            Integrated Solutions for{' '}
            <span className="text-primary">Every Business Need</span>
          </h2>
          <p className="text-gray-500 font-body text-base leading-relaxed max-w-2xl">
            MHtracon delivers a comprehensive portfolio of engineering, technology, and business
            services — all under one trusted partner, built for modern enterprises in Saudi Arabia.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {servicesData.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Palette;
            return (
              <motion.div
                key={service.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Top accent bar on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-primary transition-colors duration-300" />

                {/* Tag */}
                <span className="inline-block text-xs font-heading font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-5 self-start">
                  {service.tag}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-secondary/5 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="h-7 w-7 text-secondary group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-secondary text-lg mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-gray-500 font-body text-sm leading-relaxed flex-1 mb-6">
                  {service.description}
                </p>

                {/* CTA */}
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm group/link"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}

          {/* View All card */}
          <motion.div
            custom={servicesData.length}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative bg-secondary rounded-2xl p-7 flex flex-col items-start justify-between overflow-hidden"
            style={{
              backgroundImage: 'url(/images/shape/shape-4.png)',
              backgroundRepeat: 'repeat',
              backgroundSize: 'auto',
            }}
          >
            <div className="absolute inset-0 bg-secondary/90 rounded-2xl" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="text-primary font-heading font-bold text-5xl leading-none mb-4 opacity-30">
                12+
              </div>
              <h3 className="text-white font-heading font-bold text-xl mb-3 leading-snug">
                Solutions for Every Industry
              </h3>
              <p className="text-white/60 font-body text-sm leading-relaxed flex-1 mb-6">
                Explore our full portfolio spanning engineering, technology, design, and business services.
              </p>
              <Link
                href="/about-company"
                className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-heading font-semibold text-sm hover:bg-primary-dark transition-colors group/btn"
              >
                View All Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
