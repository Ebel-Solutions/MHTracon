import { ServiceGallery, type GalleryImage } from '@/components/shared/services';

const images: GalleryImage[] = [
  { src: '/images/uniform/hero-bg.png', alt: 'Uniform Manufacturing Atelier' },
  { src: '/images/uniform/gallery-flatlay.png', alt: 'Uniform Collection Flat Lay' },
  { src: '/images/uniform/gallery-embroidery.png', alt: 'Premium Embroidery Detail' },
  { src: '/images/uniform/aviation.png', alt: 'Aviation Uniforms' },
  { src: '/images/uniform/healthcare.png', alt: 'Healthcare Uniforms' },
  { src: '/images/uniform/hospitality.png', alt: 'Hospitality Uniforms' },
];

export default function UniformGallery() {
  return (
    <ServiceGallery
      images={images}
      sectionLabel="Our Work"
      title="Premium Uniform Gallery"
      subtitle="A showcase of our craftsmanship — from tailoring detail to complete uniform collections."
      bg="gray"
      className="uniform-gallery"
    />
  );
}
