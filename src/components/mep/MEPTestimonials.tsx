import { ServiceTestimonials, type Testimonial } from '@/components/shared/services';

const testimonials: Testimonial[] = [
  {
    quote: 'MH Tracon delivered the complete MEP package for our 12-floor commercial tower on time and within budget. Their engineering team was responsive, professional, and demonstrated exceptional technical knowledge throughout the project.',
    name: 'Eng. Faisal Al-Otaibi',
    title: 'Project Director',
    company: 'Al-Otaibi Real Estate Development',
    rating: 5,
  },
  {
    quote: 'We awarded MH Tracon our hospital HVAC and medical gas systems project. The precision and attention to healthcare-specific MEP requirements was outstanding. Zero defects at commissioning — an exceptional result.',
    name: 'Dr. Khalid Al-Hamdan',
    title: 'Medical Facilities Director',
    company: 'Riyadh Specialist Medical Centre',
    rating: 5,
  },
  {
    quote: 'MH Tracon has been our MEP AMC partner for 3 years. Their preventive maintenance team is always on schedule, their reporting is thorough, and their emergency response has been exemplary every time we have needed them.',
    name: 'Mohammed Al-Rasheed',
    title: 'Facilities Manager',
    company: 'Gulf Commercial Properties',
    rating: 5,
  },
];

export default function MEPTestimonials() {
  return (
    <ServiceTestimonials
      testimonials={testimonials}
      sectionLabel="Client Stories"
      title="What Our Clients Say"
      className="mep-testimonials"
    />
  );
}
