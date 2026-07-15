'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { features } from '@/data/features';
import FeatureItem from '@/components/cards/FeatureItem';

export default function FeaturesGrid() {
  return (
    <section className="py-16 lg:py-24 bg-secondary-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Image & Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-lg overflow-hidden mb-6 aspect-[4/3]">
              <Image
                src="/images/resource/chooseus-1.jpg"
                alt="PEB Structural Features"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div>
              <h6 className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">
                PEB Structurals
              </h6>
              <h3 className="text-white font-heading font-bold text-2xl lg:text-3xl">
                Salient Features
              </h3>
            </div>
          </motion.div>

          {/* Right - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <FeatureItem key={feature.id} feature={feature} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
