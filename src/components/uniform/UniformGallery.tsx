'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  { src: '/images/uniform/hero-bg.png', alt: 'Uniform Manufacturing Atelier', className: 'row-span-2' },
  { src: '/images/uniform/gallery-flatlay.png', alt: 'Uniform Collection Flat Lay', className: '' },
  { src: '/images/uniform/gallery-embroidery.png', alt: 'Premium Embroidery Detail', className: '' },
  { src: '/images/uniform/aviation.png', alt: 'Aviation Uniforms', className: '' },
  { src: '/images/uniform/healthcare.png', alt: 'Healthcare Uniforms', className: '' },
  { src: '/images/uniform/hospitality.png', alt: 'Hospitality Uniforms', className: '' },
];

export default function UniformGallery() {
  return (
    <section className="uniform-gallery py-20 lg:py-28 bg-gray-50">
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
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">Our Work</span>
          </div>
          <h2 className="font-heading font-bold text-secondary-dark text-3xl lg:text-4xl mb-4">
            Premium Uniform Gallery
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-xl mx-auto">
            A showcase of our craftsmanship — from tailoring detail to complete uniform collections.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ${
                i === 0 ? 'row-span-2' : ''
              } ${i === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}
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
