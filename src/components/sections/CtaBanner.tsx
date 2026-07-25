'use client';

import Link from 'next/link';
import { Phone, Mail, ArrowRight, CheckCircle } from 'lucide-react';

const trustPoints = [
  '5+ Years of Proven Experience',
  'ISO-Certified Quality Standards',
  '200+ Projects Delivered',
  'End-to-End Project Ownership',
];

export default function CtaBanner() {
  return (
    <section
      className="relative py-20 lg:py-28 bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/background/cta-bg.png)' }}
    >
      {/* Layered overlay — left dark, right slightly lighter */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/90 to-secondary/75" />

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'url(/images/shape/shape-4.png)', backgroundRepeat: 'repeat' }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Text & CTAs */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
                Get Started Today
              </span>
            </div>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl text-white leading-tight mb-4">
              Ready to Build Something{' '}
              <span className="text-primary">Extraordinary?</span>
            </h2>
            <p className="text-white/70 font-body text-base leading-relaxed mb-8 max-w-lg">
              Whether you need engineering expertise, smart technology solutions, or business
              support services — MHtracon is your one trusted partner in Saudi Arabia. Let&apos;s
              discuss your next project.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-lg font-heading font-semibold text-sm uppercase tracking-wider hover:bg-primary-dark transition-colors group"
              >
                <Mail className="h-4 w-4" />
                Send Enquiry
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="tel:+966506030311"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-3.5 rounded-lg font-heading font-semibold text-sm uppercase tracking-wider hover:bg-white/20 transition-colors group"
              >
                <Phone className="h-4 w-4 group-hover:animate-pulse" />
                +966 506 030 311
              </Link>
            </div>

            {/* Trust points */}
            <ul className="flex flex-col gap-3">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-white/80 font-body text-sm">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-2xl p-8 lg:p-10">
            <h3 className="font-heading font-bold text-white text-2xl mb-2">
              Request a Free Consultation
            </h3>
            <p className="text-white/60 font-body text-sm mb-8">
              Tell us about your project and our team will get back to you within 24 hours.
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 font-body text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 font-body text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 font-body text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <select
                className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white/70 font-body text-sm focus:outline-none focus:border-primary transition-colors"
                defaultValue=""
              >
                <option value="" disabled>Select Service</option>
                <option value="interior">Interior & Exterior Design</option>
                <option value="mep">MEP Solutions</option>
                <option value="ai">AI & Software Development</option>
                <option value="security">Security Solutions</option>
                <option value="office">Office Essentials</option>
                <option value="gifts">Corporate Gifts & Branding</option>
                <option value="uniforms">Uniform Solutions</option>
                <option value="other">Other</option>
              </select>
              <textarea
                rows={3}
                placeholder="Brief project description..."
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 font-body text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full bg-primary text-white py-3.5 rounded-lg font-heading font-semibold text-sm uppercase tracking-wider hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 group"
              >
                Submit Request
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
