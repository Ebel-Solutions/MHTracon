import { ServiceTestimonials, type Testimonial } from '@/components/shared/services';

const testimonials: Testimonial[] = [
  {
    quote: 'MH Tracon completely revolutionized our procurement. Instead of dealing with five different vendors for IT, stationery, and pantry supplies, we now rely entirely on their Annual Supply Contract. Fast, reliable, and cost-effective.',
    name: 'Fahad Al-Otaibi',
    title: 'Procurement Manager',
    company: 'Visionary Tech Solutions',
    rating: 5,
  },
  {
    quote: 'Their corporate welcome kits and branded apparel were a massive hit with our new hires. The print quality on the drinkware and notebooks is exceptional. A highly professional partner.',
    name: 'Noura Al-Saud',
    title: 'HR Director',
    company: 'Global Finance Group',
    rating: 5,
  },
  {
    quote: 'We operate multiple retail branches and keeping them stocked with daily essentials used to be a nightmare. MH Tracons automated inventory management and prompt deliveries have solved that completely.',
    name: 'Ahmed Yassin',
    title: 'Operations Head',
    company: 'Prime Retail Chain',
    rating: 5,
  },
];

export default function OfficeTestimonials() {
  return (
    <ServiceTestimonials
      testimonials={testimonials}
      sectionLabel="Client Stories"
      title="Trusted by Procurement Leaders"
      className="office-testimonials"
    />
  );
}
