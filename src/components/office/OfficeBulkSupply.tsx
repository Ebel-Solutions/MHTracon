'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const programs = [
  'Annual Procurement Contracts',
  'Corporate Supply Agreements',
  'Employee Welcome Kits',
  'Office Setup Packages',
  'Event Merchandise',
  'Customized Office Solutions',
  'Recurring Supply Programs',
];

export default function OfficeBulkSupply() {
  return (
    <section className="office-bulk-supply py-20 lg:py-28 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative h-[450px] lg:h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/office/gallery-2.png"
                alt="Bulk Supply Warehouse"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                  <p className="font-heading font-bold text-white text-xl mb-2">Dedicated B2B Support</p>
                  <p className="font-body text-white/80 text-sm">Our enterprise team is ready to scale your procurement seamlessly.</p>
                </div>
              </div>
            </div>
            {/* Decorative dot grid */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[radial-gradient(#d97706_2px,transparent_2px)] [background-size:16px_16px] opacity-20 -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary font-heading font-bold text-lg">//</span>
              <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
                Enterprise Partnerships
              </span>
            </div>
            <h2 className="font-heading font-bold text-secondary-dark text-3xl lg:text-4xl mb-6 leading-tight">
              Bulk Supply & Corporate Programs
            </h2>
            <p className="font-body text-gray-500 text-lg mb-8 leading-relaxed">
              We specialize in fulfilling large-scale procurement demands for corporations, government bodies, and educational institutions. Secure long-term supply stability with our enterprise programs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 mb-10">
              {programs.map((program, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-body text-gray-700 font-medium">{program}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-secondary-dark hover:bg-primary text-white font-heading font-semibold text-sm px-8 py-4 rounded-sm transition-all duration-300 shadow-lg shadow-black/10 hover:shadow-primary/25"
            >
              Discuss Corporate Contract <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
