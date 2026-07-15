import type { NavItem } from '@/types';

export const navigationItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Our Services',
    href: '#',
    children: [
      { label: 'Ongoing', href: '/project/ongoing' },
      { label: 'PEB Structure', href: '/project/peb-structure' },
      { label: 'Civil Construction', href: '/project/civil-construction' },
    ],
  },
  {
    label: 'About Company',
    href: '/about-company',
  },
  {
    label: 'Contact Us',
    href: '/contact-us',
  },
];
