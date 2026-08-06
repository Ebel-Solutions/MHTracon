'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navigationItems } from '@/data/navigation';
import { companyInfo, socialLinks } from '@/data/company';

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

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleExpand = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  const getSocialIcon = (iconName: string) => {
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
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'mobile-menu-backdrop fixed inset-0 bg-black/60 z-[998] transition-opacity duration-300 lg:hidden',
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        className={cn(
          'mobile-menu-panel fixed top-0 right-0 w-[320px] max-w-[85vw] h-full bg-secondary-dark z-[999] transition-transform duration-300 overflow-y-auto lg:hidden',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
          aria-label="Close mobile menu"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Logo */}
        <div className="p-6 pb-4 border-b border-white/10">
          <Link href="/" onClick={onClose}>
            <Image
              src="/images/logos/logo-1.png"
              alt="MHtracon"
              width={240}
              height={75}
              className="h-16 w-auto"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="py-4">
          <ul>
            {navigationItems.map((item) => (
              <li key={item.label} className="border-b border-white/10">
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleExpand(item.label)}
                      className={cn(
                        'w-full flex items-center justify-between px-6 py-3.5 text-white text-sm font-heading uppercase tracking-wider',
                        'hover:text-primary transition-colors'
                      )}
                      aria-expanded={expandedItem === item.label}
                    >
                      {item.label}
                      {expandedItem === item.label ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                    <ul
                      className={cn(
                        'overflow-hidden transition-all duration-300 bg-black/20',
                        expandedItem === item.label ? 'max-h-60' : 'max-h-0'
                      )}
                    >
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            onClick={onClose}
                            className={cn(
                              'block pl-10 pr-6 py-3 text-white/80 text-sm font-body hover:text-primary transition-colors',
                              pathname === child.href && 'text-primary'
                            )}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      'block px-6 py-3.5 text-white text-sm font-heading uppercase tracking-wider',
                      'hover:text-primary transition-colors',
                      pathname === item.href && 'text-primary'
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Info */}
        <div className="px-6 py-4 border-t border-white/10">
          <h4 className="text-white font-heading font-semibold text-lg mb-3">Contact Info</h4>
          <ul className="space-y-2 text-white/70 text-sm font-body">
            <li>{companyInfo.address}</li>
            <li>
              <a href={`tel:${companyInfo.phone}`} className="hover:text-primary transition-colors">
                {companyInfo.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${companyInfo.email}`}
                className="hover:text-primary transition-colors"
              >
                {companyInfo.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="px-6 py-4 border-t border-white/10">
          <ul className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <li key={link.icon}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-white/10 text-white rounded hover:bg-primary hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  {getSocialIcon(link.icon)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
