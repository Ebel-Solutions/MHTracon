import { ServiceTestimonials, type Testimonial } from '@/components/shared/services';

const testimonials: Testimonial[] = [
  {
    quote: 'MH Tracon upgraded our entire corporate headquarters with a seamless IP CCTV and biometric access control system. The AI analytics have significantly improved our perimeter security, and the installation was flawless.',
    name: 'Tariq Al-Faisal',
    title: 'Chief Security Officer',
    company: 'Al-Faisal Financial Group',
    rating: 5,
  },
  {
    quote: 'We required a highly reliable intrusion detection and surveillance system for our new logistics hub. MH Tracon delivered a robust solution that integrates perfectly with our central monitoring station. Outstanding technical expertise.',
    name: 'Sarah Al-Mansouri',
    title: 'Operations Director',
    company: 'Gulf Logistics Hub',
    rating: 5,
  },
  {
    quote: 'The video intercom and smart access systems installed in our luxury residential towers have elevated the living experience for our tenants. Their AMC team is always responsive and highly professional.',
    name: 'Omar Hassan',
    title: 'Property Manager',
    company: 'Oasis Residential Developments',
    rating: 5,
  },
];

export default function SecurityTestimonials() {
  return (
    <ServiceTestimonials
      testimonials={testimonials}
      sectionLabel="Client Stories"
      title="What Our Clients Say"
      className="security-testimonials"
    />
  );
}
