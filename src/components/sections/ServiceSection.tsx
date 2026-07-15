'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { ServiceData } from '@/types';
import { cn } from '@/lib/utils';

interface ServiceSectionProps {
  service: ServiceData;
}

export default function ServiceSection({ service }: ServiceSectionProps) {
  const isOrange = service.colorScheme === 'orange';

  return (
    <section
      className="relative py-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${service.backgroundImage})` }}
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-8">
          <h6
            className={cn(
              'font-heading font-semibold text-sm uppercase tracking-wider mb-2',
              isOrange ? 'text-primary-dark' : 'text-accent'
            )}
          >
            {service.subtitle}
          </h6>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl">
            <span className="text-secondary">{service.titleHighlighted}</span>{' '}
            <span className={isOrange ? 'text-primary' : 'text-accent'}>
              {service.titleRest}
            </span>
          </h2>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Image */}
          <div className="relative w-full max-w-4xl mx-auto mb-6 rounded-lg overflow-hidden shadow-xl">
            <Image
              src={service.imageSrc}
              alt={service.imageAlt}
              width={900}
              height={400}
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
            />
          </div>

          {/* Description */}
          <p className="text-body text-base leading-relaxed font-body max-w-[90%] mx-auto">
            {service.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
