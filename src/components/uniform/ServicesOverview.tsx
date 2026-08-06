'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const highlights = [
  'Corporate & Executive Wear',
  'Medical & Clinical Uniforms',
  'Aviation & Ground Crew',
  'Hospitality & Hotel Staff',
  'Industrial & Safety Workwear',
  'School & Academic Uniforms',
  'Sportswear & Performance Apparel',
  'Security & Patrol Uniforms',
];

export default function ServicesOverview() {
  return (
    <section className="uniform-overview py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/uniform/overview.png"
                alt="MH Tracon Uniform Collection Showcase"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-primary text-white rounded-xl px-6 py-4 shadow-xl shadow-primary/30">
              <div className="font-heading font-bold text-2xl">10+</div>
              <div className="font-body text-sm text-white/85">Uniform Categories</div>
            </div>
            {/* Decorative corner */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-primary rounded-tl-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-primary font-heading font-bold text-lg">//</span>
              <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
                Our Portfolio
              </span>
            </div>

            <h2 className="font-heading font-bold text-secondary-dark text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6">
              Complete Uniform Solutions for Every Industry
            </h2>

            <p className="font-body text-gray-600 text-lg leading-relaxed mb-8">
              We design and supply high-quality uniforms tailored to the specific needs of businesses,
              institutions, and organizations across a wide range of industries. Our uniforms combine
              durability, comfort, premium craftsmanship, and professional aesthetics to strengthen
              brand identity and enhance workplace cohesion.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="flex items-center gap-2.5"
                >
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="font-body text-secondary-dark text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-sm font-heading font-semibold text-sm hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20"
            >
              Get a Custom Quote
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
