import { ServiceTestimonials, type Testimonial } from '@/components/shared/services';

const testimonials: Testimonial[] = [
  {
    quote: 'MH Tracon transformed our 8-floor office tower with a stunning structural glazing facade. The engineering precision and material quality exceeded our expectations. The project was delivered on schedule with zero punch list items.',
    name: 'Eng. Khalid Al-Rasheed',
    title: 'Project Director',
    company: 'Al-Rasheed Development Group',
    rating: 5,
  },
  {
    quote: 'We contracted MH Tracon for the complete interior fit-out of our 5-star hotel lobby, including glass railings, aluminium cladding, and stainless steel features. The result is breathtaking — our guests consistently comment on the quality and design.',
    name: 'Mohammed Al-Saud',
    title: 'General Manager',
    company: 'Riyadh Grand Hotel & Suites',
    rating: 5,
  },
  {
    quote: 'The office partition system and aluminium works MH Tracon delivered for our corporate headquarters were executed with exceptional craftsmanship. Their team was professional, prompt, and highly responsive throughout the project.',
    name: 'Sara Al-Mansouri',
    title: 'Facilities Director',
    company: 'Gulf Commercial Properties',
    rating: 5,
  },
];

export default function IETestimonials() {
  return (
    <ServiceTestimonials
      testimonials={testimonials}
      sectionLabel="Client Stories"
      title="What Our Clients Say"
      className="ie-testimonials"
    />
  );
}
