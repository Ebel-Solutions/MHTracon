import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { companyInfo, phoneNumbers, emailAddresses } from '@/data/company';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Webcon Engineers Pvt. Ltd. Located at 263, Jodhpur Park, Kolkata - 700068, West Bengal, India.',
};

export default function ContactUsPage() {
  return (
    <>
      {/* Page Banner */}
      <section
        className="relative py-20 lg:py-28 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/banner/banner-3.jpg)' }}
      >
        <div className="absolute inset-0 bg-secondary/80" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-white font-heading font-bold text-4xl lg:text-5xl mb-4">
            Contact Us
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/70 font-body text-sm">
            <a href="/" className="hover:text-primary transition-colors">
              Home
            </a>
            <span>/</span>
            <span className="text-primary">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Address */}
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                <MapPin className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h5 className="font-heading font-semibold text-lg text-secondary mb-2">
                Our Address
              </h5>
              <p className="text-body text-sm font-body">{companyInfo.address}</p>
            </div>

            {/* Phone */}
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                <Phone className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h5 className="font-heading font-semibold text-lg text-secondary mb-2">Call Us</h5>
              <div className="text-body text-sm font-body space-y-1">
                {phoneNumbers.map((phone, i) => (
                  <p key={i}>
                    <a href={phone.href} className="hover:text-primary transition-colors">
                      {phone.label}
                    </a>
                  </p>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                <Mail className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h5 className="font-heading font-semibold text-lg text-secondary mb-2">Email Us</h5>
              <div className="text-body text-sm font-body space-y-1">
                {emailAddresses.map((email) => (
                  <p key={email.label}>
                    <a href={email.href} className="hover:text-primary transition-colors">
                      {email.label}
                    </a>
                  </p>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                <Clock className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h5 className="font-heading font-semibold text-lg text-secondary mb-2">
                Working Hours
              </h5>
              <p className="text-body text-sm font-body">{companyInfo.workingHours}</p>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="font-heading font-bold text-2xl text-secondary mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded border border-gray-200 font-body text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    required
                    aria-label="Your Name"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded border border-gray-200 font-body text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    required
                    aria-label="Your Email"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 rounded border border-gray-200 font-body text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  aria-label="Your Phone"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded border border-gray-200 font-body text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  aria-label="Subject"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 rounded border border-gray-200 font-body text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  required
                  aria-label="Your Message"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-8 py-3 rounded-sm font-heading font-semibold text-sm uppercase tracking-wider hover:bg-primary-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden h-[400px] lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.1234567890123!2d88.36!3d22.49!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI5JzI0LjAiTiA4OMKwMjEnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Webcon Engineers Location - 263, Jodhpur Park, Kolkata"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
