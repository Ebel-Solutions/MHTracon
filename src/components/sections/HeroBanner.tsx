'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { bannerSlides } from '@/data/banner-slides';
import { cn } from '@/lib/utils';

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentSlide(index);
    },
    []
  );

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  }, []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = bannerSlides[currentSlide];

  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 0.96
    },
    center: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 1.08,
    },
  };

  return (
    <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] xl:h-[750px] overflow-hidden bg-secondary-dark">
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <Image
            src={slide.bgImage}
            alt={slide.title}
            fill
            className="object-cover"
            priority={currentSlide === 0}
            sizes="100vw"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="max-w-2xl"
              >
                <h6 className="text-primary font-heading font-semibold text-sm sm:text-base uppercase tracking-widest mb-3 sm:mb-4">
                  {slide.subtitle}
                </h6>
                <h1 className="text-white font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4 sm:mb-5">
                  {slide.title}
                </h1>
                {slide.description && (
                  <p className="text-white/85 font-body text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl">
                    {slide.description}
                  </p>
                )}
                <Link
                  href={slide.buttonLink}
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-sm font-heading font-medium text-sm uppercase tracking-wider hover:bg-primary-dark transition-colors group"
                >
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  {slide.buttonText}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-primary text-white flex items-center justify-center rounded-full transition-colors backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-primary text-white flex items-center justify-center rounded-full transition-colors backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              'w-3 h-3 rounded-full transition-all duration-300',
              currentSlide === index ? 'bg-primary w-8' : 'bg-white/50 hover:bg-white/80'
            )}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index ? 'true' : 'false'}
          />
        ))}
      </div>
    </section>
  );
}
