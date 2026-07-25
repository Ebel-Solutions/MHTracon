import { MapPin, Phone, Mail } from 'lucide-react';
import { phoneNumbers, emailAddresses, address } from '@/data/company';

export default function ContactInfoBar() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Address */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group text-center">
            <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
              <MapPin className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
            </div>
            <h6 className="font-heading font-semibold text-secondary text-sm mb-2">Our Location</h6>
            <div className="text-body text-sm font-body leading-relaxed">
              {address.map((addr) => (
                <a
                  key={addr.href}
                  href={addr.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {addr.label}
                </a>
              ))}
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group text-center">
            <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
              <Phone className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
            </div>
            <h6 className="font-heading font-semibold text-secondary text-sm mb-2">Call Us</h6>
            <div className="text-body text-sm font-body leading-relaxed space-y-1">
              {phoneNumbers.map((phone) => (
                <p key={phone.href}>
                  <a href={phone.href} className="hover:text-primary transition-colors">
                    {phone.label}
                  </a>
                </p>
              ))}
            </div>
          </div>

          {/* Email */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group text-center">
            <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
              <Mail className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
            </div>
            <h6 className="font-heading font-semibold text-secondary text-sm mb-2">Email Us</h6>
            <div className="text-body text-sm font-body leading-relaxed space-y-1">
              {emailAddresses.map((email) => (
                <p key={email.label}>
                  <a href={email.href} className="hover:text-primary transition-colors">
                    {email.label}
                  </a>
                </p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
