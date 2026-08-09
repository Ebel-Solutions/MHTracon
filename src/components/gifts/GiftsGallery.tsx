import { ServiceGallery, type GalleryImage } from '@/components/shared/services';

const images: GalleryImage[] = [
  { src: '/images/gifts/onboarding.png', alt: 'Employee Welcome Kit' },
  { src: '/images/gifts/appreciation.png', alt: 'Luxury Executive Hamper' },
  { src: '/images/gifts/events.png', alt: 'Conference Merchandise' },
  { src: '/images/gifts/merchandise.png', alt: 'Corporate Apparel' },
  { src: '/images/gifts/awards.png', alt: 'Crystal Awards and Trophies' },
  { src: '/images/gifts/seasonal.png', alt: 'Festive Ramadan Gift Collection' },
];

export default function GiftsGallery() {
  return (
    <ServiceGallery
      images={images}
      sectionLabel="Product Showcase"
      title="A Glimpse of Excellence"
      subtitle="Explore our recent corporate gifting projects, custom merchandise, and premium branding."
      bg="gray"
      className="gifts-gallery"
    />
  );
}
