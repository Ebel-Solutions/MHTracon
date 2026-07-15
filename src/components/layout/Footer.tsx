import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { companyInfo, socialLinks } from '@/data/company';
import { footerTags, galleryItems } from '@/data/footer';

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
    case 'facebook':
      return <FacebookIcon className="h-4 w-4" />;
    case 'twitter':
      return <TwitterIcon className="h-4 w-4" />;
    case 'linkedin':
      return <LinkedinIcon className="h-4 w-4" />;
    default:
      return null;
  }
}

export default function Footer() {
  return (
    <footer className="bg-secondary-dark text-white">
      {/* Footer Top */}
      <div
        className="relative py-16"
        style={{
          backgroundImage: 'url(/images/shape/shape-4.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Logo & Disclaimer */}
            <div>
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/images/logos/logo-1.png"
                  alt="MHtracon"
                  width={240}
                  height={75}
                  className="h-16 w-auto"
                />
              </Link>
              <p className="text-white/70 text-sm font-body leading-relaxed text-justify mb-6">
                <strong>Disclaimer:</strong> Before making any decision or taking any action, you
                should consult a <strong>Webcon&apos;s</strong> professional.{' '}
                <strong>Webcon Engineers Pvt. Ltd.</strong> is not responsible for any errors or
                omissions, or for the results obtained from the use of this information.
              </p>
              <ul className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <li key={link.icon}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-primary transition-colors"
                      aria-label={link.label}
                    >
                      {getSocialIcon(link.icon)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Tags */}
            <div>
              <h5 className="font-heading font-semibold text-lg mb-6 relative">
                Useful Tags
                <span className="block w-8 h-0.5 bg-primary mt-3" />
              </h5>
              <ul className="space-y-3">
                {footerTags.map((tag) => (
                  <li key={tag.label}>
                    <Link
                      href={tag.href}
                      className="text-white/70 text-sm font-body hover:text-primary hover:pl-2 transition-all inline-flex items-center gap-2"
                    >
                      <ArrowRight className="h-3 w-3 text-primary" />
                      {tag.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Work Gallery */}
            <div>
              <h5 className="font-heading font-semibold text-lg mb-6 relative">
                Work Gallery
                <span className="block w-8 h-0.5 bg-primary mt-3" />
              </h5>
              <div className="grid grid-cols-4 gap-2">
                {galleryItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className="relative group overflow-hidden rounded-sm aspect-square"
                  >
                    <Image
                      src={item.imageSrc}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="80px"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-colors flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 bg-secondary-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between py-5 gap-3">
            <p className="text-white/60 text-sm font-body">
              Copyright © {new Date().getFullYear()}{' '}
              <a
                href="https://webconengineers.com"
                className="text-primary hover:text-white transition-colors"
              >
                webconengineers.com
              </a>
              . All Rights Reserved.
            </p>
            <p className="text-white/60 text-sm font-body">
              Powered By:{' '}
              <a
                href="https://www.trgsoftwareindia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-white transition-colors"
              >
                TRG Software Consultancy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
