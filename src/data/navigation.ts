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
      { label: 'Uniform Services', href: '/services/uniform-services' },
      { label: 'Interior & Exterior Design', href: '/services/interior-exterior' },
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
