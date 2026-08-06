import { Phone, Mail, Clock } from 'lucide-react';
import { companyInfo } from '@/data/company';

export default function TopInfoBar() {
  return (
    <div className="top-info-bar bg-secondary text-white hidden lg:block">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2.5">
          <ul className="flex items-center gap-6 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-primary" />
              <span className="font-body">
                Call Us:{' '}
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-primary" />
              <span className="font-body">
                Mail Us:{' '}
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {companyInfo.email}
                </a>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-primary" />
              <span className="font-body">Working Hours: {companyInfo.workingHours}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
