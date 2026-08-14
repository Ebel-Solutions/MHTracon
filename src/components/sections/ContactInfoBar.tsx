import { MapPin, Phone, Mail } from 'lucide-react';
import { phoneNumbers, emailAddresses, address } from '@/data/company';

export default function ContactInfoBar() {
  return (
    <div className="cib-root absolute top-26 md:top-0 left-0 right-0 -translate-y-1/2 z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20 bg-primary rounded-lg shadow-2xl overflow-hidden">

          {/* Address */}
          <div className="flex items-center gap-5 px-8 py-7 group hover:bg-primary-dark transition-colors duration-300">
            <div className="flex-shrink-0 w-14 h-14 bg-white/20 rounded flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h6 className="font-heading font-semibold text-white/70 text-xs uppercase tracking-wider mb-1">
                Our Location
              </h6>
              <div className="text-white text-sm font-body leading-relaxed">
                {address.map((addr) => (
                  <a
                    key={addr.href}
                    href={addr.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white/80 transition-colors block"
                  >
                    {addr.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-5 px-8 py-7 group hover:bg-primary-dark transition-colors duration-300">
            <div className="flex-shrink-0 w-14 h-14 bg-white/20 rounded flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div>
              <h6 className="font-heading font-semibold text-white/70 text-xs uppercase tracking-wider mb-1">
                Call Us
              </h6>
              <div className="text-white text-sm font-body leading-relaxed space-y-0.5">
                {phoneNumbers.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className="hover:text-white/80 transition-colors block"
                  >
                    {phone.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-5 px-8 py-7 group hover:bg-primary-dark transition-colors duration-300">
            <div className="flex-shrink-0 w-14 h-14 bg-white/20 rounded flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <div>
              <h6 className="font-heading font-semibold text-white/70 text-xs uppercase tracking-wider mb-1">
                Email Us
              </h6>
              <div className="text-white text-sm font-body leading-relaxed space-y-0.5">
                {emailAddresses.map((email) => (
                  <a
                    key={email.label}
                    href={email.href}
                    className="hover:text-white/80 transition-colors block"
                  >
                    {email.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}




