'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/cards/ProjectCard';
import { cn } from '@/lib/utils';

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, projects.length - visibleCount);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-primary font-heading font-bold text-lg">//</span>
              <h6 className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">
                Latest Projects
              </h6>
            </div>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-secondary">
              Pre Engineering Building & Civil Projects
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            <button
              onClick={prev}
              className="w-10 h-10 border-2 border-primary text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              aria-label="Previous projects"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 border-2 border-primary text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              aria-label="Next projects"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={containerRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="flex gap-6"
            animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{ width: `${(projects.length / visibleCount) * 100}%` }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                style={{ width: `${100 / projects.length}%` }}
                className="flex-shrink-0 px-1"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'w-2.5 h-2.5 rounded-full transition-all duration-300',
              currentIndex === index ? 'bg-primary w-6' : 'bg-gray-300 hover:bg-gray-400'
            )}
            aria-label={`Go to project group ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
