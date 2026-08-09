'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface CTACard {
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
  label: string;
  /** If true, renders in primary orange style */
  primary?: boolean;
}

export interface ServiceCTAProps {
  cards: CTACard[];
  sectionLabel?: string;
  /** Headline before the highlighted word */
  headlineStart: string;
  /** Word rendered in primary orange */
  headlineHighlight: string;
  subtext: string;
  backgroundImage: string;
  /** Extra class on outer section */
  className?: string;
}

export default function ServiceCTA({
  cards,
  sectionLabel = 'Get Started Today',
  headlineStart,
  headlineHighlight,
  subtext,
  backgroundImage,
  className = '',
}: ServiceCTAProps) {
  return (
    <section className={`service-cta relative py-24 lg:py-32 overflow-hidden ${className}`}>
      {/* Background */}
      <Image
        src={backgroundImage}
        alt="MH Tracon Service Background"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark/97 via-secondary-dark/90 to-secondary-dark/75" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(241,109,43,0.12),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-primary font-heading font-bold text-lg">//</span>
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
              {sectionLabel}
            </span>
          </div>
          <h2 className="font-heading font-bold text-white text-4xl lg:text-5xl xl:text-6xl mb-4">
            {headlineStart}{' '}
            <span className="text-primary">{headlineHighlight}</span>
          </h2>
          <p className="font-body text-white/65 text-xl max-w-2xl mx-auto">{subtext}</p>
        </motion.div>

        {/* CTA Cards */}
        <div className={`grid grid-cols-1 gap-5 max-w-4xl mx-auto ${cards.length === 3 ? 'sm:grid-cols-3' : cards.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-4'}`}>
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link
                  href={card.href}
                  className={`group flex flex-col items-center text-center gap-4 p-7 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${card.primary
                    ? 'bg-primary border-primary hover:bg-primary-dark shadow-lg shadow-primary/25'
                    : 'bg-white/5 border-white/15 hover:border-primary/50 hover:bg-white/10'
                    }`}
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-300 ${card.primary ? 'bg-white/20' : 'bg-primary/10 group-hover:bg-primary/20'
                      }`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-white text-lg mb-1.5">{card.title}</div>
                    <p className="font-body text-white/65 text-sm leading-relaxed mb-4">{card.desc}</p>
                  </div>
                  <span
                    className={`inline-flex items-center gap-2 font-heading font-semibold text-sm px-5 py-2.5 rounded-sm transition-all duration-300 ${card.primary
                      ? 'bg-white text-primary hover:bg-white/90'
                      : 'border border-white/30 text-white hover:border-primary hover:bg-primary'
                      }`}
                  >
                    {card.label} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
