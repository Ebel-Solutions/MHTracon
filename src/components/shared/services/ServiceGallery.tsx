'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface ServiceGalleryProps {
  images: GalleryImage[];
  sectionLabel?: string;
  title?: string;
  subtitle?: string;
  /** "white" | "gray" background. Default "white" */
  bg?: 'white' | 'gray';
  /** Extra class on outer section */
  className?: string;
}

export default function ServiceGallery({
  images,
  sectionLabel = 'Our Work',
  title = 'Project Gallery',
  subtitle,
  bg = 'white',
  className = '',
}: ServiceGalleryProps) {
  return (
    <section className={`service-gallery py-20 lg:py-28 ${bg === 'gray' ? 'bg-gray-50' : 'bg-white'} ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-primary font-heading font-bold text-lg">//</span>
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
              {sectionLabel}
            </span>
          </div>
          <h2 className="font-heading font-bold text-secondary-dark text-3xl lg:text-4xl mb-4">{title}</h2>
          {subtitle && (
            <p className="font-body text-gray-500 text-lg max-w-xl mx-auto">{subtitle}</p>
          )}
        </motion.div>

        {/* Masonry-style grid — first image spans 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src + i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className={`group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ${
                i === 0 ? 'sm:row-span-2 aspect-video sm:aspect-[3/4]' : 'aspect-video'
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                <span className="font-body text-white text-sm font-medium">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
