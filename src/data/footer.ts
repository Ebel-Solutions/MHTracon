import type { FooterTag, GalleryItem } from '@/types';

export const footerQuickLinks: FooterTag[] = [
  { label: 'Home', href: '/' },
  { label: 'About Company', href: '/about-company' },
  { label: 'Our Services', href: '#' },
  { label: 'Ongoing Projects', href: '/project/ongoing' },
  { label: 'Contact Us', href: '/contact-us' },
];

export const footerServices: FooterTag[] = [
  { label: 'Engineering & Construction', href: '/project/civil-construction' },
  { label: 'MEP Solutions', href: '#' },
  { label: 'Security Solutions', href: '#' },
  { label: 'AI & Software Development', href: '#' },
  { label: 'Interior & Exterior Design', href: '#' },
  { label: 'Networking & Infrastructure', href: '#' },
  { label: 'Corporate Gifts & Uniforms', href: '#' },
  { label: 'Heavy Machinery & Automotive', href: '#' },
];

// Keep for backward compatibility — not used in new footer
export const footerTags: FooterTag[] = footerQuickLinks;

export const galleryItems: GalleryItem[] = [
  { imageSrc: '/images/gallery/footer-gallery-4.jpg', link: '/project/peb-structure' },
  { imageSrc: '/images/gallery/footer-gallery-5.jpg', link: '/project/peb-structure' },
  { imageSrc: '/images/gallery/footer-gallery-6.jpg', link: '/project/peb-structure' },
  { imageSrc: '/images/gallery/footer-gallery-7.jpg', link: '/project/civil-construction' },
  { imageSrc: '/images/gallery/footer-gallery-8.jpg', link: '/project/civil-construction' },
  { imageSrc: '/images/gallery/footer-gallery-1.jpg', link: '/project/ongoing' },
  { imageSrc: '/images/gallery/footer-gallery-2.jpg', link: '/project/peb-structure' },
  { imageSrc: '/images/gallery/footer-gallery-3.jpg', link: '/project/peb-structure' },
];
