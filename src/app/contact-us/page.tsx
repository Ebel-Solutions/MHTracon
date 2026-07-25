import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { companyInfo, phoneNumbers, emailAddresses, socialLinks } from '@/data/company';
import CtaBanner from '@/components/sections/CtaBanner';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with MH Tracon. Located in AL Jandriya, Riyadh 13611, Saudi Arabia. Call us at +966 506030311 or email info@mhtracon.com.',
};

/* ── Inline SVG social icons (lucide removed brand icons) ── */
function FacebookIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
    </svg>
  );
}
function SocialIcon({ name }: { name: string }) {
  if (name === 'facebook') return <FacebookIcon />;
  if (name === 'twitter') return <TwitterIcon />;
  if (name === 'linkedin') return <LinkedinIcon />;
  return null;
}

/* ── Contact items data ────────────────────────────────── */
const contactItems = [
  {
    icon: MapPin,
    label: 'Our Location',
    lines: [companyInfo.address],
    hrefs: ['https://maps.app.goo.gl/gQjS2x1d1KjX1Y2Z9'],
  },
  {
    icon: Phone,
    label: 'Call Us',
    lines: phoneNumbers.map((p) => p.label),
    hrefs: phoneNumbers.map((p) => p.href),
  },
  {
    icon: Mail,
    label: 'Email Us',
    lines: emailAddresses.map((e) => e.label),
    hrefs: emailAddresses.map((e) => e.href),
  },
  {
    icon: Clock,
    label: 'Working Hours',
    lines: [companyInfo.workingHours],
    hrefs: [] as string[],
  },
];

/* ── Page ──────────────────────────────────────────────── */
export default function ContactUsPage() {
  return (
    <>
      {/* Page Banner */}
      <section
        className="relative py-20 lg:py-28 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/banner/banner-8.png)' }}
      >
        <div className="absolute inset-0 bg-secondary/80" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-white font-heading font-bold text-4xl lg:text-5xl mb-4">
            Contact Us
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/70 font-body text-sm">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span>/</span>
            <span className="text-primary">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Contact Panel + Map */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl border border-gray-100">

            {/* Left: Contact Details */}
            <div
              className="relative bg-secondary p-10 lg:p-14 flex flex-col justify-between"
              style={{
                backgroundImage: 'url(/images/shape/shape-4.png)',
                backgroundRepeat: 'repeat',
                backgroundSize: 'auto',
              }}
            >
              <div className="absolute inset-0 bg-secondary/90 pointer-events-none" />
              <div className="relative z-10">
                {/* Header */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-6 h-0.5 bg-primary" />
                    <span className="text-primary font-heading font-semibold text-xs uppercase tracking-widest">
                      Contact Information
                    </span>
                  </div>
                  <h2 className="font-heading font-bold text-white text-2xl lg:text-3xl leading-snug">
                    We&apos;d Love to Hear<br />from You
                  </h2>
                  <p className="text-white/55 font-body text-sm mt-3 leading-relaxed">
                    Fill in the form or reach out directly. Our team responds within 24 hours.
                  </p>
                </div>

                {/* Contact items */}
                <ul className="space-y-7 mb-10">
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.label} className="flex items-start gap-4">
                        <div className="w-11 h-11 flex-shrink-0 bg-primary/20 border border-primary/30 rounded-xl flex items-center justify-center mt-0.5">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-white/50 font-heading font-semibold text-xs uppercase tracking-wider mb-1">
                            {item.label}
                          </p>
                          {item.hrefs.length > 0
                            ? item.lines.map((line, i) => (
                              <a
                                key={i}
                                href={item.hrefs[i] ?? '#'}
                                className="block text-white font-body text-sm hover:text-primary transition-colors leading-relaxed"
                              >
                                {line}
                              </a>
                            ))
                            : item.lines.map((line, i) => (
                              <p key={i} className="text-white font-body text-sm leading-relaxed">
                                {line}
                              </p>
                            ))}
                        </div>
                      </li>
                    );
                  })}
                </ul>

                {/* Divider */}
                <div className="w-full h-px bg-white/10 mb-8" />

                {/* Social links */}
                <div>
                  <p className="text-white/50 font-heading font-semibold text-xs uppercase tracking-wider mb-4">
                    Follow Us
                  </p>
                  <div className="flex items-center gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.icon}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all"
                      >
                        <SocialIcon name={link.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Google Map */}
            <div className="relative min-h-[480px] lg:min-h-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.6!2d46.7220!3d24.7254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sAl%20Jandriyah%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', minHeight: '480px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MH Tracon — AL Jandriya, Riyadh 13611, Saudi Arabia"
              />
            </div>

          </div>
        </div>
      </section>

      {/* CTA Banner with enquiry form */}
      <CtaBanner />
    </>
  );
}
