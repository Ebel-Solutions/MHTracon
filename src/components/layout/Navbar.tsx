'use client';

import { useState, useRef, useEffect } from 'react';
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();
  const { isScrolled } = useScrollPosition(80);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
                <li
                  key={item.label}
                  ref={item.children ? dropdownRef : undefined}
                  className="relative group"
                >
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className={cn(
                          'flex items-center gap-1 px-5 py-7 font-heading font-medium text-[15px] uppercase tracking-wide transition-colors',
                          'hover:text-primary',
                          dropdownOpen ? 'text-primary' : 'text-secondary'
                        )}
                        aria-expanded={dropdownOpen}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <ChevronDown className="h-3.5 w-3.5" />
                      </button>
                      <ul
                        className={cn(
                          'absolute top-full left-0 bg-white min-w-[220px] shadow-xl border-t-4 border-primary z-50 transition-all duration-200',
                          dropdownOpen
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-2'
                        )}
                        role="menu"
                      >
                        {item.children.map((child) => (
                          <li key={child.label} role="menuitem">
                            <Link
                              href={child.href}
                              className="block px-6 py-3 text-sm font-body text-gray-700 hover:text-primary hover:pl-8 transition-all border-b border-gray-100 last:border-b-0"
                              onClick={() => setDropdownOpen(false)}
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
              className="lg:hidden p-2 text-secondary"
              aria-label="Open mobile menu"
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
