import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section
      className="relative py-20 lg:py-24 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url(/images/background/cta-bg.jpg)' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-secondary/85" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h2 className="text-white font-heading font-bold text-3xl lg:text-4xl mb-2">
              Best Quality Solution
            </h2>
            <h3 className="text-white/80 font-heading font-medium text-xl lg:text-2xl">
              For Your Structural Requirements
            </h3>
          </div>
          <Link
            href="tel:+913324140232"
            className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 rounded-sm font-heading font-semibold text-sm uppercase tracking-wider hover:bg-primary-dark transition-colors group"
          >
            <Phone className="h-5 w-5 group-hover:animate-pulse" />
            Call Us Now
          </Link>
        </div>
      </div>
    </section>
  );
}
