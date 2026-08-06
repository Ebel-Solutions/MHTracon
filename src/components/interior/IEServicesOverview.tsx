'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Glass & Aluminium Facades',
  'Structural Glazing Systems',
  'Office Partitions & Fit-Outs',
  'Railing & Balustrade Systems',
  'Stainless Steel Fabrication',
  'Concrete & Flooring Works',
  'Custom Doors & Windows',
  'Turnkey Project Delivery',
];

export default function IEServicesOverview() {
  return (
    <section className="ie-overview py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/interior/overview.png"
                alt="Premium Interior Fit-Out — MH Tracon"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-white rounded-xl px-6 py-4 shadow-xl">
              <div className="font-heading font-bold text-2xl">9+</div>
              <div className="font-body text-xs text-white/80">Service Specialisations</div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-primary font-heading font-bold text-lg">//</span>
              <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">What We Do</span>
            </div>
            <h2 className="font-heading font-bold text-secondary-dark text-3xl lg:text-4xl mb-5 leading-tight">
              Complete Architectural &amp; Fit-Out Solutions,{' '}
              <span className="text-primary">Precisely Delivered</span>
            </h2>
            <p className="font-body text-gray-600 text-base leading-relaxed mb-8">
              MH Tracon delivers comprehensive interior, exterior, architectural, and fit-out
              solutions for commercial, residential, hospitality, and industrial developments.
              Our experienced team combines structural engineering with architectural precision
              to create functional, durable, and visually striking spaces — from concept to handover.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((h) => (
                <div key={h} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="font-body text-gray-700 text-sm">{h}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-sm font-heading font-semibold text-sm hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 hover:-translate-y-0.5"
            >
              Get a Custom Quote
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
