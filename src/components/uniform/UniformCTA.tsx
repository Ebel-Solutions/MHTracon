'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, CalendarCheck } from 'lucide-react';

const ctaCards = [
  {
    icon: ArrowRight,
    title: 'Request a Quote',
    desc: 'Get a detailed quotation for your uniform requirements within 24 hours.',
    href: '/contact-us',
    label: 'Get Quote Now',
    primary: true,
  },
  {
    icon: Phone,
    title: 'Talk to Sales',
    desc: 'Speak directly with our uniform solutions experts for immediate assistance.',
    href: `tel:+966506030311`,
    label: 'Call Us Now',
    primary: false,
  },
  {
    icon: CalendarCheck,
    title: 'Schedule Consultation',
    desc: 'Book a free design consultation at your convenience — on-site or virtual.',
    href: '/contact-us',
    label: 'Book Consultation',
    primary: false,
  },
];

export default function UniformCTA() {
  return (
    <section className="uniform-cta relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <Image
        src="/images/uniform/cta-bg.png"
        alt="MH Tracon Manufacturing Facility"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark/97 via-secondary-dark/90 to-secondary-dark/75" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(241,109,43,0.12),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-primary font-heading font-bold text-lg">//</span>
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">Get Started Today</span>
          </div>
          <h2 className="font-heading font-bold text-white text-4xl lg:text-5xl xl:text-6xl mb-4">
            Ready to Dress Your Team<br />
            <span className="text-primary">For Success?</span>
          </h2>
          <p className="font-body text-white/65 text-xl max-w-2xl mx-auto">
            Join 500+ organisations across Saudi Arabia that trust MH Tracon for their uniform needs.
            Let&apos;s create something exceptional together.
          </p>
        </motion.div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {ctaCards.map((card, i) => {
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
                  className={`group flex flex-col items-center text-center gap-4 p-7 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                    card.primary
                      ? 'bg-primary border-primary hover:bg-primary-dark hover:border-primary-dark shadow-lg shadow-primary/25'
                      : 'bg-white/5 border-white/15 hover:border-primary/50 hover:bg-white/10'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                    card.primary ? 'bg-white/20' : 'bg-primary/10 group-hover:bg-primary/20'
                  } transition-colors duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-white text-lg mb-1.5">{card.title}</div>
                    <p className="font-body text-white/65 text-sm leading-relaxed mb-4">{card.desc}</p>
                  </div>
                  <span className={`inline-flex items-center gap-2 font-heading font-semibold text-sm px-5 py-2.5 rounded-sm transition-all duration-300 ${
                    card.primary
                      ? 'bg-white text-primary hover:bg-white/90'
                      : 'border border-white/30 text-white hover:border-primary hover:bg-primary'
                  }`}>
                    {card.label} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex items-center justify-center gap-3 mt-12"
        >
          <Mail className="h-4 w-4 text-white/40" />
          <span className="font-body text-white/40 text-sm">
            info@mhtracon.com • +966 506 030 311 • Riyadh, Saudi Arabia
          </span>
        </motion.div>
      </div>
    </section>
  );
}
