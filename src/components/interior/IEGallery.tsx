import { ServiceGallery, type GalleryImage } from '@/components/shared/services';

const images: GalleryImage[] = [
  { src: '/images/interior/gallery-1.png', alt: 'Premium Corporate Office Fit-Out' },
  { src: '/images/interior/aluminium-cladding.png', alt: 'Aluminium Cladding Installation' },
  { src: '/images/interior/structural-glazing.png', alt: 'Structural Glazing System' },
  { src: '/images/interior/gallery-2.png', alt: 'Illuminated Glass Facade' },
  { src: '/images/interior/railing-systems.png', alt: 'Premium Glass Railing' },
  { src: '/images/interior/stainless-steel.png', alt: 'Stainless Steel Fabrication' },
];

export default function IEGallery() {
  return (
    <ServiceGallery
      images={images}
      sectionLabel="Project Showcase"
      title="Our Work Speaks for Itself"
      subtitle="A curated showcase of completed architectural and fit-out projects across Saudi Arabia."
      bg="white"
      className="ie-gallery"
    />
  );
}
