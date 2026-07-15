import { MapPin, Phone, Mail } from 'lucide-react';
import { phoneNumbers, emailAddresses } from '@/data/company';

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
            <p className="text-body text-sm font-body leading-relaxed">
              263, Jodhpur Park,
              <br />
              Kolkata - 700068, W.B., India
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group text-center">
            <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
              <Phone className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
            </div>
            <div className="text-body text-sm font-body leading-relaxed">
              <p>
                {phoneNumbers.slice(0, 2).map((phone, i) => (
                  <span key={phone.href + i}>
                    <a href={phone.href} className="hover:text-primary transition-colors">
                      {phone.label}
                    </a>
                    {i < 1 && ' / '}
                  </span>
                ))}
              </p>
              <p>
                {phoneNumbers.slice(2).map((phone, i) => (
                  <span key={phone.href + i}>
                    <a href={phone.href} className="hover:text-primary transition-colors">
                      {phone.label}
                    </a>
                    {i < phoneNumbers.slice(2).length - 1 && ' / '}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group text-center">
            <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
              <Mail className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
            </div>
            <div className="text-body text-sm font-body leading-relaxed">
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
