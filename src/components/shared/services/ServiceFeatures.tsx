'use client';

import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

export interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface ServiceFeaturesProps {
  features: ServiceFeature[];
  /** Label shown in small caps above the title, e.g. "Why MH Tracon" */
  sectionLabel?: string;
  title: string;
  subtitle?: string;
  /**
   * "light" = white background, card-style hover (uniform pattern)
   * "dark"  = secondary-dark background with glass cards (IE pattern)
   */
  variant?: 'light' | 'dark';
  /** Number of columns on large screens. Default 3. */
  cols?: 3 | 5;
  /** Extra class on outer section */
  className?: string;
}

export default function ServiceFeatures({
  features,
  sectionLabel = 'Why MH Tracon',
  title,
  subtitle,
  variant = 'light',
  cols = 3,
  className = '',
}: ServiceFeaturesProps) {
  const isDark = variant === 'dark';
  const colClass = cols === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-3';

  return (
    <section
      className={`service-features py-20 lg:py-28 relative overflow-hidden ${
        isDark ? 'bg-secondary-dark' : 'bg-white'
      } ${className}`}
    >
      {/* Decorative background */}
      {isDark ? (
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
        />
      ) : (
        <>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />
        </>
      )}

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
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
              {sectionLabel}
            </span>
          </div>
          <h2 className={`font-heading font-bold text-3xl lg:text-4xl mb-4 ${isDark ? 'text-white' : 'text-secondary-dark'}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`font-body text-lg ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Feature cards */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${colClass} gap-5 lg:gap-6`}>
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: (i % (cols === 5 ? 5 : 3)) * 0.08, duration: 0.5 }}
                className={`group p-6 rounded-xl border transition-all duration-300 cursor-default ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/30'
                    : 'bg-white border-gray-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ${
                    isDark
                      ? 'bg-primary/15 group-hover:bg-primary/25'
                      : 'bg-primary/10 group-hover:bg-primary group-hover:scale-110'
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 transition-colors duration-300 ${
                      isDark
                        ? 'text-primary'
                        : 'text-primary group-hover:text-white'
                    }`}
                  />
                </div>
                <h3 className={`font-heading font-bold text-lg mb-2 ${isDark ? 'text-white' : 'text-secondary-dark'}`}>
                  {feature.title}
                </h3>
                <p className={`font-body text-sm leading-relaxed ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
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
