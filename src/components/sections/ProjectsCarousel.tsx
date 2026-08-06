'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsCarousel() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  // Reset index when filter changes
  useEffect(() => { setCurrentIndex(0); }, [activeCategory]);

  const visibleCount = 3;
  const maxIndex = Math.max(0, filtered.length - visibleCount);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const visibleProjects = filtered.slice(currentIndex, currentIndex + visibleCount);
  // Pad with items from start if needed
  const displayProjects =
    visibleProjects.length < visibleCount && filtered.length >= visibleCount
      ? [...visibleProjects, ...filtered.slice(0, visibleCount - visibleProjects.length)]
      : visibleProjects;

  return (
    <section className="projects-carousel py-20 lg:py-28 bg-secondary relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'url(/images/shape/shape-4.png)', backgroundRepeat: 'repeat' }}
      />

      <div className="relative z-10 container mx-auto px-4">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
                Our Portfolio
              </span>
            </div>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl text-white leading-tight">
              Projects We&apos;re{' '}
              <span className="text-primary">Proud Of</span>
            </h2>
          </div>

          {/* Category filter tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-4 py-2 rounded-full font-heading font-semibold text-xs uppercase tracking-wider transition-all',
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {displayProjects.map((project, i) => (
              <motion.div
                key={project.id + '-' + i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-secondary-dark shadow-xl"
              >
                {/* Image */}
                <Image
                  src={project.imageSrc}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/30 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-primary text-white text-xs font-heading font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* External link icon on hover */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ExternalLink className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Content at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h4 className="font-heading font-bold text-white text-lg leading-snug mb-3">
                    {project.name}
                  </h4>
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                  >
                    View Project <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom row: navigation + dots + CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-10 gap-4">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  currentIndex === index ? 'bg-primary w-8' : 'bg-white/30 w-2 hover:bg-white/60'
                )}
                aria-label={`Go to group ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Arrow controls */}
            <button
              onClick={prev}
              className="w-10 h-10 border-2 border-white/30 text-white rounded-full flex items-center justify-center hover:border-primary hover:bg-primary transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 border-2 border-white/30 text-white rounded-full flex items-center justify-center hover:border-primary hover:bg-primary transition-all"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* View all */}
            <Link
              href="/project/ongoing"
              className="ml-2 inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-lg font-heading font-semibold text-sm hover:bg-primary-dark transition-colors"
            >
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
