import { ServiceGallery, type GalleryImage } from '@/components/shared/services';

const images: GalleryImage[] = [
  { src: '/images/office/gallery-1.png', alt: 'Corporate Employee Welcome Kit' },
  { src: '/images/office/gallery-2.png', alt: 'MH Tracon Bulk Supply Warehouse' },
  { src: '/images/office/supplies.png', alt: 'Premium Office Stationery' },
  { src: '/images/office/it.png', alt: 'IT Consumables & Accessories' },
  { src: '/images/office/drinkware.png', alt: 'Branded Corporate Drinkware' },
  { src: '/images/office/eco.png', alt: 'Eco-Friendly Office Products' },
];

export default function OfficeGallery() {
  return (
    <ServiceGallery
      images={images}
      sectionLabel="Product Showcase"
      title="Our Premium Range"
      subtitle="A glimpse into the high-quality office essentials and branded merchandise we supply."
      bg="gray"
      className="office-gallery"
    />
  );
}
