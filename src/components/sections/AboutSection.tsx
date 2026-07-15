'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Award, CheckCircle } from 'lucide-react';
import { companyInfo } from '@/data/company';

export default function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {/* Left Column - Company Profile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Section Title */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-primary font-heading font-bold text-lg">//</span>
                <h6 className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">
                  About Our
                </h6>
              </div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-secondary">
                Company Profile
              </h2>
            </div>

            {/* Years Badge */}
            <div className="bg-secondary rounded-lg p-6 mb-6 inline-flex items-center gap-4">
              <div className="text-primary">
                <Award className="h-10 w-10" />
              </div>
              <div>
                <h2 className="text-white font-heading font-bold text-4xl leading-none">
                  {companyInfo.yearsOfExperience}
                </h2>
                <h5 className="text-white/80 font-heading font-medium text-sm mt-1">
                  Years Of Experience
                </h5>
              </div>
            </div>

            {/* Description */}
            <p className="text-body text-sm leading-relaxed font-body text-justify mb-6">
              <strong>Webcon</strong> {companyInfo.aboutText.replace('Webcon ', '')}
            </p>

            {/* Know More Button */}
            <Link
              href="/about-company"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-sm font-heading font-medium text-sm uppercase tracking-wider hover:bg-primary-dark transition-colors group"
            >
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              Know More
            </Link>
          </motion.div>

          {/* Center Column - Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full h-[400px] lg:h-full rounded-lg overflow-hidden">
              <Image
                src="/images/resource/about-3.jpg"
                alt="Webcon Engineers Construction"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </motion.div>

          {/* Right Column - Vision & Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Vision Card */}
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <h5 className="font-heading font-semibold text-lg text-secondary">Our Vision</h5>
              </div>
              <p className="text-body text-sm leading-relaxed font-body text-justify pl-9">
                {companyInfo.vision}
              </p>
              <Link
                href="/about-company"
                className="inline-flex items-center gap-2 text-primary text-sm font-heading font-medium mt-4 pl-9 hover:gap-3 transition-all"
              >
                <ArrowRight className="h-3.5 w-3.5" />
                Read More
              </Link>
            </div>

            {/* Mission Card */}
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <h5 className="font-heading font-semibold text-lg text-secondary">Our Mission</h5>
              </div>
              <p className="text-body text-sm leading-relaxed font-body text-justify pl-9">
                {companyInfo.mission}
              </p>
              <Link
                href="/about-company"
                className="inline-flex items-center gap-2 text-primary text-sm font-heading font-medium mt-4 pl-9 hover:gap-3 transition-all"
              >
                <ArrowRight className="h-3.5 w-3.5" />
                Read More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
