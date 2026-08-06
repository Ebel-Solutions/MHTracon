'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function IEHero() {
  return (
    <section className="ie-hero relative h-[340px] sm:h-[420px] lg:h-[55vh] min-h-[320px] max-h-[580px] overflow-hidden bg-secondary-dark">
      <Image
        src="/images/interior/hero-bg.png"
        alt="MH Tracon Interior & Exterior Design — Glass Facades and Architectural Solutions"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark/95 via-secondary-dark/75 to-secondary-dark/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/60 via-transparent to-secondary-dark/25" />
      <div className="absolute left-0 top-0 w-1 h-full bg-primary" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-secondary-dark/70 to-transparent" />

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 lg:gap-14">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.45 }}
                className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-3.5 py-1 mb-4"
              >
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                <span className="text-primary font-heading font-semibold text-[10px] uppercase tracking-widest">
                  Premium Architectural Solutions
                </span>
              </motion.div>

              <h1 className="font-heading font-bold text-white text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] leading-tight">
                Interior &amp; Exterior{' '}
                <span className="text-primary">Design</span>{' '}
                Excellence
              </h1>

              <p className="font-body text-white/65 text-sm leading-relaxed mt-3 lg:hidden">
                Turnkey architectural, fit-out, and façade solutions for commercial &amp; residential projects.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4 lg:min-w-[280px] lg:max-w-[340px]"
            >
              <p className="hidden lg:block font-body text-white/65 text-sm leading-relaxed">
                Comprehensive interior, exterior, architectural, and fit-out solutions
                for commercial, hospitality, and residential developments across Saudi Arabia.
              </p>

              <div className="flex flex-row lg:flex-col gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-sm font-heading font-semibold text-sm hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/25 hover:-translate-y-0.5"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                  Request a Quote
                </Link>
                <a
                  href="#ie-services"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-6 py-3 rounded-sm font-heading font-semibold text-sm hover:border-white hover:bg-white/10 transition-all duration-300"
                >
                  View Services
                  <ChevronDown className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
