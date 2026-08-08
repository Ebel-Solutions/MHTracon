import { ServiceTestimonials, type Testimonial } from '@/components/shared/services';

const testimonials: Testimonial[] = [
  {
    quote: 'MH Tracon delivered 400 uniforms for our hotel staff with exceptional precision. The quality, fit, and embroidery were exactly as we envisioned. Our team looks more professional than ever.',
    name: 'Ahmed Al-Rashidi',
    title: 'Operations Manager',
    company: 'Al Faisaliah Hotel Group',
    rating: 5,
  },
  {
    quote: 'We contracted MH Tracon for our clinic uniforms — 200 sets of scrubs and lab coats. The turnaround was 12 days and the quality was outstanding. Their team was responsive throughout the process.',
    name: 'Dr. Sara Al-Mansouri',
    title: 'Medical Director',
    company: 'Riyadh Medical Centre',
    rating: 5,
  },
  {
    quote: 'From design consultation to final delivery, the process was seamless. Our corporate team now wears branded blazers that perfectly represent our company identity. Highly recommended.',
    name: 'Khalid bin Saleh',
    title: 'HR Director',
    company: 'Al Ghurair Industries',
    rating: 5,
  },
];

export default function TestimonialsSlider() {
  return (
    <ServiceTestimonials
      testimonials={testimonials}
      sectionLabel="Client Stories"
      title="What Our Clients Say"
      className="uniform-testimonials"
    />
  );
}
