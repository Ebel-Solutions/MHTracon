'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  { src: '/images/interior/gallery-1.png', alt: 'Premium Corporate Office Fit-Out', span: 'row-span-2' },
  { src: '/images/interior/aluminium-cladding.png', alt: 'Aluminium Cladding Installation', span: '' },
  { src: '/images/interior/structural-glazing.png', alt: 'Structural Glazing System', span: '' },
  { src: '/images/interior/gallery-2.png', alt: 'Illuminated Glass Facade', span: '' },
  { src: '/images/interior/railing-systems.png', alt: 'Premium Glass Railing', span: '' },
  { src: '/images/interior/stainless-steel.png', alt: 'Stainless Steel Fabrication', span: '' },
];

export default function IEGallery() {
  return (
    <section className="ie-gallery py-20 lg:py-28 bg-white">
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
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">Project Showcase</span>
          </div>
          <h2 className="font-heading font-bold text-secondary-dark text-3xl lg:text-4xl mb-4">
            Our Work Speaks for Itself
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-xl mx-auto">
            A curated showcase of completed architectural and fit-out projects across Saudi Arabia.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ${i === 0 ? 'row-span-2' : ''} ${i === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}
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
