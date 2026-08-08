import { ServiceGallery, type GalleryImage } from '@/components/shared/services';

const images: GalleryImage[] = [
  { src: '/images/mep/gallery-1.png', alt: 'Commercial Building MEP Installation' },
  { src: '/images/mep/gallery-2.png', alt: 'Building Management System Control Room' },
  { src: '/images/mep/mechanical.png', alt: 'HVAC Mechanical Room' },
  { src: '/images/mep/electrical.png', alt: 'Main Electrical Distribution Panel' },
  { src: '/images/mep/fire-protection.png', alt: 'Fire Protection Sprinkler System' },
  { src: '/images/mep/testing.png', alt: 'System Testing & Commissioning' },
];

export default function MEPGallery() {
  return (
    <ServiceGallery
      images={images}
      sectionLabel="Project Showcase"
      title="Our MEP Projects"
      subtitle="A curated portfolio of completed MEP installations — commercial, hospitality, healthcare, and industrial."
      bg="gray"
      className="mep-gallery"
    />
  );
}
