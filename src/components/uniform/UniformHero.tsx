'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function UniformHero() {
  return (
    <section className="uniform-hero relative h-[340px] sm:h-[400px] lg:h-[55vh] min-h-[320px] max-h-[560px] overflow-hidden bg-secondary-dark">
      {/* Background Image — crops from top-center so workshop stays visible */}
      <Image
        src="/images/uniform/hero-bg.png"
        alt="MH Tracon Uniform Services — Corporate, Medical, Aviation and Industrial Uniforms"
        fill
        className="object-cover object-[center_top]"
        priority
        quality={90}
      />

      {/* Gradient overlays — left side heavier to ensure text legibility over the studio photo */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark/90 via-secondary-dark/60 to-secondary-dark/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/40 via-transparent to-secondary-dark/30" />

      {/* Left accent line */}
      <div className="absolute left-0 top-0 w-1 h-full bg-primary" />

      {/* Bottom fade into stats bar */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-secondary-dark/80 to-transparent" />

      {/* Content — vertically centred, horizontal split on lg */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 lg:gap-14">

            {/* Left: badge + headline */}
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
                  Premium Uniform Solutions
                </span>
              </motion.div>

              <h1 className="font-heading font-bold text-white text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] leading-tight">
                Uniforms That{' '}
                <span className="text-primary">Define</span>{' '}
                Your Brand
              </h1>

              {/* Subtitle visible on mobile only (below h1, above CTAs) */}
              <p className="font-body text-white/65 text-sm leading-relaxed mt-3 lg:hidden">
                Premium custom-crafted uniforms for every industry — corporate, medical, aviation &amp; more.
              </p>
            </motion.div>

            {/* Right: description + CTAs */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4 lg:min-w-[280px] lg:max-w-[340px]"
            >
              <p className="hidden lg:block font-body text-white/65 text-sm leading-relaxed">
                From corporate offices to healthcare facilities and aviation teams —
                custom-crafted uniforms that strengthen brand identity and elevate
                professional presentation.
              </p>

              <div className="flex flex-row lg:flex-col gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-sm font-heading font-semibold text-sm hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                  Request a Quote
                </Link>
                <a
                  href="#uniform-categories"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-6 py-3 rounded-sm font-heading font-semibold text-sm hover:border-white hover:bg-white/10 transition-all duration-300"
                >
                  Explore
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
