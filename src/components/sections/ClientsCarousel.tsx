'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { clientLogos } from '@/data/clients';

export default function ClientsCarousel() {
  // Duplicate the logos for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-primary font-heading font-bold text-lg">//</span>
            <h6 className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">
              Clientele
            </h6>
            <span className="text-primary font-heading font-bold text-lg">\\</span>
          </div>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-secondary">
            Few Of Our Esteemed Clientele
          </h2>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="overflow-hidden">
        <motion.div
          className="flex items-center gap-8"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex-shrink-0 w-[160px] h-[80px] flex items-center justify-center bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
            >
              <Image
                src={logo.imageSrc}
                alt={logo.alt}
                width={140}
                height={60}
                className="max-h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
