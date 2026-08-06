'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
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
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="uniform-testimonials py-20 lg:py-28 bg-secondary-dark relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'url(/images/shape/shape-4.png)', backgroundRepeat: 'repeat' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-primary font-heading font-bold text-lg">//</span>
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">Client Stories</span>
          </div>
          <h2 className="font-heading font-bold text-white text-3xl lg:text-4xl">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12 text-center"
            >
              <Quote className="h-10 w-10 text-primary/60 mx-auto mb-6" />

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="font-body text-white/80 text-lg leading-relaxed italic mb-8">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>

              <div>
                <div className="font-heading font-bold text-white text-base">{testimonials[current].name}</div>
                <div className="font-body text-primary text-sm">{testimonials[current].title}</div>
                <div className="font-body text-white/50 text-sm">{testimonials[current].company}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-primary hover:text-primary transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-primary hover:text-primary transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
