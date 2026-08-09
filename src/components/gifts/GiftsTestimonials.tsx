import { ServiceTestimonials, type Testimonial } from '@/components/shared/services';

const testimonials: Testimonial[] = [
  {
    quote: 'MH Tracon handled our entire employee onboarding kit project. The quality of the notebooks, flasks, and the custom magnetic boxes was incredible. Our new hires absolutely love them!',
    name: 'Maha Al-Dossari',
    title: 'Head of Human Resources',
    company: 'TechVision Saudi',
    rating: 5,
  },
  {
    quote: 'We needed 2,000 premium delegate bags with full corporate branding for our annual summit in under three weeks. MH Tracon delivered flawlessly, ahead of schedule, with exceptional print quality.',
    name: 'Khalid Abdullah',
    title: 'Events Director',
    company: 'Global Industry Forums',
    rating: 5,
  },
  {
    quote: 'Their VIP Ramadan hampers were the best we have ever sent out. The attention to detail in the packaging and the premium quality of the dates and crystalware perfectly represented our brand.',
    name: 'Yasmin Tariq',
    title: 'Corporate Relations',
    company: 'Capital Investment Bank',
    rating: 5,
  },
];

export default function GiftsTestimonials() {
  return (
    <ServiceTestimonials
      testimonials={testimonials}
      sectionLabel="Client Stories"
      title="Trusted by Top Brands"
      className="gifts-testimonials"
    />
  );
}
