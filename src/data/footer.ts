import type { FooterTag, GalleryItem } from '@/types';

export const footerQuickLinks: FooterTag[] = [
  { label: 'Home', href: '/' },
  { label: 'About Company', href: '/about-company' },
  { label: 'Our Services', href: '#' },
  { label: 'Contact Us', href: '/contact-us' },
];

export const footerServices: FooterTag[] = [
  { label: 'MEP Solutions', href: '/services/mep' },
  { label: 'Security Solutions', href: '/services/security-solutions' },
  { label: 'AI & Software Development', href: '#' },
  { label: 'Interior & Exterior Design', href: '/services/interior-exterior' },
  { label: 'Networking & Infrastructure', href: '#' },
  { label: 'Corporate Gifts & Uniforms', href: '/services/corporate-gifts' },
  { label: 'Heavy Machinery & Automotive', href: '#' },
];

// Keep for backward compatibility — not used in new footer
export const footerTags: FooterTag[] = footerQuickLinks;

export const galleryItems: GalleryItem[] = [
  { imageSrc: '/images/gallery/footer-gallery-4.jpg', link: '#' },
  { imageSrc: '/images/gallery/footer-gallery-5.jpg', link: '#' },
  { imageSrc: '/images/gallery/footer-gallery-6.jpg', link: '#' },
  { imageSrc: '/images/gallery/footer-gallery-7.jpg', link: '#' },
  { imageSrc: '/images/gallery/footer-gallery-8.jpg', link: '#' },
  { imageSrc: '/images/gallery/footer-gallery-1.jpg', link: '#' },
  { imageSrc: '/images/gallery/footer-gallery-2.jpg', link: '#' },
  { imageSrc: '/images/gallery/footer-gallery-3.jpg', link: '#' },
];
