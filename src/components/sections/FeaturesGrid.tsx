'use client';

import { motion } from 'framer-motion';
import {
  Layers,
  BadgeCheck,
  ShieldCheck,
  Lightbulb,
  Clock,
  Users,
  Headphones,
  Globe2,
} from 'lucide-react';
import { featuresData } from '@/data/features-cards';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers,
  BadgeCheck,
  ShieldCheck,
  Lightbulb,
  Clock,
  Users,
  HeadphonesIcon: Headphones,
  Globe2,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeaturesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1 h-full bg-primary hidden lg:block" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left sticky header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-28"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
                Our Advantages
              </span>
            </div>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl text-secondary mb-5 leading-tight">
              Why Industry Leaders{' '}
              <span className="text-primary">Choose MHtracon</span>
            </h2>
            <p className="text-gray-500 font-body text-base leading-relaxed mb-8">
              We don&apos;t just deliver services — we build lasting value through technical
              excellence, innovation, and genuine partnership.
            </p>

            {/* Quick stat pills */}
            <div className="flex flex-wrap gap-3">
              {['5+ Years', '12+ Verticals', '100+ Clients', '200+ Projects'].map((stat) => (
                <div
                  key={stat}
                  className="bg-secondary/5 border border-secondary/10 rounded-full px-4 py-2 font-heading font-semibold text-secondary text-sm"
                >
                  {stat}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right features grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {featuresData.map((feature) => {
              const Icon = iconMap[feature.icon] ?? ShieldCheck;
              return (
                <motion.div
                  key={feature.id}
                  variants={itemVariants}
                  className="group flex gap-5 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="font-heading font-bold text-secondary text-base mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-500 font-body text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
