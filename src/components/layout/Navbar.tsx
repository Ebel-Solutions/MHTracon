'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navigationItems } from '@/data/navigation';
import { useScrollPosition } from '@/hooks/use-scroll-position';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { isScrolled } = useScrollPosition(80);

  return (
    <>
      <nav
        className={cn(
          'navbar w-full z-50 transition-all duration-300 bg-white',
          isScrolled ? 'fixed top-0 left-0 shadow-lg' : 'relative'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 lg:py-0">
            <Link href="/" className="flex-shrink-0 flex items-center h-full" aria-label="MHtracon Home">
              <Image
                src="/images/logos/logo-1.png"
                alt="MHtracon Pvt. Ltd."
                width={100}
                height={20}
                className="h-10 lg:h-10 w-auto scale-100 lg:scale-[1.3] origin-left"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-0">
              {navigationItems.map((item) => (
                <li key={item.label} className="relative group">
                  {item.children ? (
                    <>
                      {/* Hover trigger button — chevron rotates on hover */}
                      <button
                        className={cn(
                          'flex items-center gap-1 px-5 py-7 font-heading font-medium text-[15px] uppercase tracking-wide transition-colors',
                          'hover:text-primary group-hover:text-primary',
                          pathname.startsWith('/services') ? 'text-primary' : 'text-secondary'
                        )}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                      </button>

                      {/* Dropdown — pure CSS hover via parent group */}
                      <ul
                        className="absolute top-full left-0 bg-white min-w-[240px] shadow-xl border-t-4 border-primary z-50 transition-all duration-200 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
                        role="menu"
                      >
                        {item.children.map((child) => (
                          <li key={child.label} role="menuitem">
                            <Link
                              href={child.href}
                              className={cn(
                                'block px-6 py-3 text-sm font-body hover:text-primary hover:pl-8 transition-all border-b border-gray-100 last:border-b-0',
                                pathname === child.href ? 'text-primary font-semibold' : 'text-gray-700'
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
                      className={cn(
                        'block px-5 py-7 font-heading font-medium text-[15px] uppercase tracking-wide transition-colors',
                        'hover:text-primary',
                        pathname === item.href ? 'text-primary' : 'text-secondary'
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex items-center justify-center w-11 h-11 text-secondary hover:text-primary hover:bg-gray-100 rounded-md transition-colors touch-manipulation relative z-50"
              aria-label="Open mobile menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
