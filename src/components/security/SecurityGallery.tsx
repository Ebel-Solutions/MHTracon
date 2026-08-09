import { ServiceGallery, type GalleryImage } from '@/components/shared/services';

const images: GalleryImage[] = [
  { src: '/images/security/gallery-1.png', alt: 'Security Operations Center (SOC)' },
  { src: '/images/security/gallery-2.png', alt: 'Server Room Access Control' },
  { src: '/images/security/cctv.png', alt: 'Corporate CCTV Installation' },
  { src: '/images/security/access-control.png', alt: 'Biometric Access Control' },
  { src: '/images/security/intrusion.png', alt: 'Intrusion Detection System' },
  { src: '/images/security/intercom.png', alt: 'Video Door Phone Intercom' },
];

export default function SecurityGallery() {
  return (
    <ServiceGallery
      images={images}
      sectionLabel="Project Showcase"
      title="Security Solutions Portfolio"
      subtitle="A selection of our integrated security deployments across commercial and industrial sectors."
      bg="gray"
      className="security-gallery"
    />
  );
}
