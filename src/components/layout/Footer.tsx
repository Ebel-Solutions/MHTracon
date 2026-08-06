import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { companyInfo, socialLinks, phoneNumbers, emailAddresses } from '@/data/company';
import { footerQuickLinks, footerServices } from '@/data/footer';
import ContactInfoBar from '@/components/sections/ContactInfoBar';

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
    </svg>
  );
}

function getSocialIcon(iconName: string) {
  switch (iconName) {
    case 'facebook': return <FacebookIcon className="h-4 w-4" />;
    case 'twitter': return <TwitterIcon className="h-4 w-4" />;
    case 'linkedin': return <LinkedinIcon className="h-4 w-4" />;
    default: return null;
  }
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h5 className="font-heading font-semibold text-white text-base mb-6 relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-primary">
      {children}
    </h5>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer relative bg-secondary-dark text-white overflow-visible">
      {/* ── Contact Info Card — straddles section/footer boundary */}
      <ContactInfoBar />

      {/* ── Main footer body ──────────────────────────────── */}
      <div
        className="relative pt-50 md:pt-24 pb-16"
        style={{
          backgroundImage: 'url(/images/shape/shape-4.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
        }}
      >
        {/* Subtle dark overlay on pattern */}
        <div className="absolute inset-0 bg-secondary/60" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

            {/* ── Col 1: Brand ──────────────────────────── */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-5">
                <Image
                  src="/images/logos/logo-1.png"
                  alt="MHtracon"
                  width={200}
                  height={65}
                  className="h-14 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-white/65 text-sm font-body leading-relaxed mb-6">
                MHtracon is a Riyadh-based multi-solutions company delivering integrated engineering, MEP, security, AI, and business solutions across Saudi Arabia.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-3 mb-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.icon}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-primary transition-colors"
                    aria-label={link.label}
                  >
                    {getSocialIcon(link.icon)}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Col 2: Quick Links ────────────────────── */}
            <div>
              <FooterHeading>Quick Links</FooterHeading>
              <ul className="space-y-2.5">
                {footerQuickLinks.map((tag) => (
                  <li key={tag.label}>
                    <Link
                      href={tag.href}
                      className="text-white/65 text-sm font-body hover:text-primary hover:pl-2 transition-all inline-flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 text-primary flex-shrink-0 transition-transform group-hover:translate-x-1" />
                      {tag.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 3: Our Services ───────────────────── */}
            <div>
              <FooterHeading>Our Services</FooterHeading>
              <ul className="space-y-2.5">
                {footerServices.map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="text-white/65 text-sm font-body hover:text-primary hover:pl-2 transition-all inline-flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 text-primary flex-shrink-0 transition-transform group-hover:translate-x-1" />
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 4: Contact Info ───────────────────── */}
            <div>
              <FooterHeading>Contact Info</FooterHeading>
              <ul className="space-y-5">
                {/* Address */}
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 flex-shrink-0 bg-primary/20 rounded-lg flex items-center justify-center mt-0.5">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-white/65 text-sm font-body leading-relaxed">
                    {companyInfo.address}
                  </p>
                </li>

                {/* Phone */}
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 flex-shrink-0 bg-primary/20 rounded-lg flex items-center justify-center mt-0.5">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    {phoneNumbers.map((p) => (
                      <a
                        key={p.href}
                        href={p.href}
                        className="block text-white/65 text-sm font-body hover:text-primary transition-colors"
                      >
                        {p.label}
                      </a>
                    ))}
                  </div>
                </li>

                {/* Email */}
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 flex-shrink-0 bg-primary/20 rounded-lg flex items-center justify-center mt-0.5">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    {emailAddresses.map((e) => (
                      <a
                        key={e.href}
                        href={e.href}
                        className="block text-white/65 text-sm font-body hover:text-primary transition-colors"
                      >
                        {e.label}
                      </a>
                    ))}
                  </div>
                </li>

                {/* Working hours */}
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 flex-shrink-0 bg-primary/20 rounded-lg flex items-center justify-center mt-0.5">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-white/65 text-sm font-body leading-relaxed">
                    {companyInfo.workingHours}
                  </p>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ── Footer Bottom ─────────────────────────────────── */}
      <div className="border-t border-white/10 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between py-5 gap-3">
            <p className="text-white/50 text-sm font-body">
              Copyright &copy; {new Date().getFullYear()}{' '}
              <a
                href="https://mhtracon.com"
                className="text-primary hover:text-white transition-colors"
              >
                MH Tracon
              </a>
              . All Rights Reserved.
            </p>
            <p className="text-white/50 text-sm font-body">
              {companyInfo.disclaimer.length > 80
                ? companyInfo.disclaimer.slice(0, 80) + '…'
                : companyInfo.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
