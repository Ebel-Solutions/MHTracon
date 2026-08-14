'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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

function MobileMenuContent({ open, onClose }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const pathname = usePathname();

  // Lock body scroll when menu is open — iOS-safe technique
  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  const toggleExpand = (label: string) => {
    setExpandedItem(prev => prev === label ? null : label);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'facebook': return <FacebookIcon className="h-4 w-4" />;
      case 'twitter': return <TwitterIcon className="h-4 w-4" />;
      case 'linkedin': return <LinkedinIcon className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          zIndex: 99998,
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 300ms ease',
        }}
      />

      {/* Slide-in Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '320px',
          maxWidth: '88vw',
          height: '100dvh' as string,
          backgroundColor: 'var(--color-secondary-dark)',
          zIndex: 99999,
          overflowY: 'auto',
          overscrollBehavior: 'contain',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 300ms ease-in-out',
          WebkitOverflowScrolling: 'touch',
        } as React.CSSProperties}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{ touchAction: 'manipulation' }}
          className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center bg-primary text-white rounded-full active:scale-95 transition-all"
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
              width={200}
              height={65}
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="py-2">
          <ul>
            {navigationItems.map((item) => (
              <li key={item.label} className="border-b border-white/10">
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleExpand(item.label)}
                      style={{ touchAction: 'manipulation' }}
                      className="w-full flex items-center justify-between px-6 py-4 text-white text-sm font-heading uppercase tracking-wider hover:text-primary active:text-primary transition-colors"
                      aria-expanded={expandedItem === item.label}
                    >
                      {item.label}
                      {expandedItem === item.label
                        ? <ChevronUp className="h-4 w-4 flex-shrink-0" />
                        : <ChevronDown className="h-4 w-4 flex-shrink-0" />
                      }
                    </button>
                    <ul
                      className={cn(
                        'overflow-hidden transition-all duration-300',
                        expandedItem === item.label ? 'max-h-[28rem]' : 'max-h-0'
                      )}
                      style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
                    >
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            onClick={onClose}
                            style={{ touchAction: 'manipulation' }}
                            className={cn(
                              'block pl-10 pr-6 py-3.5 text-white/80 text-sm font-body hover:text-primary active:text-primary transition-colors',
                              pathname === child.href && 'text-primary font-semibold'
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
                    style={{ touchAction: 'manipulation' }}
                    className={cn(
                      'block px-6 py-4 text-white text-sm font-heading uppercase tracking-wider',
                      'hover:text-primary active:text-primary transition-colors',
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
          <h4 className="text-white font-heading font-semibold text-base mb-3">Contact Info</h4>
          <ul className="space-y-2 text-white/70 text-sm font-body">
            <li className="leading-relaxed">{companyInfo.address}</li>
            <li>
              <a
                href={`tel:${companyInfo.phone}`}
                style={{ touchAction: 'manipulation' }}
                className="hover:text-primary active:text-primary transition-colors"
              >
                {companyInfo.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${companyInfo.email}`}
                style={{ touchAction: 'manipulation' }}
                className="hover:text-primary active:text-primary transition-colors break-all"
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
                  style={{ touchAction: 'manipulation' }}
                  className="w-10 h-10 flex items-center justify-center bg-white/10 text-white rounded hover:bg-primary active:bg-primary-dark transition-colors"
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

// Portal wrapper — mounts menu directly on document.body to escape all
// parent stacking contexts (header z-index, transforms, will-change, etc.)
export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <MobileMenuContent open={open} onClose={onClose} />,
    document.body
  );
}
