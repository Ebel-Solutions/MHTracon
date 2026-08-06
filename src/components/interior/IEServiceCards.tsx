'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'aluminium-works',
    title: 'Aluminium Works',
    description: 'Custom fabrication and installation of aluminium structures, frames, architectural elements, and building components with precision engineering.',
    image: '/images/interior/aluminium-works.png',
    tags: ['Louvre Screens', 'Frames', 'Structural'],
  },
  {
    id: 'aluminium-cladding',
    title: 'Aluminium Cladding',
    description: 'Modern exterior cladding systems designed to improve aesthetics, durability, insulation, and weather resistance for commercial buildings.',
    image: '/images/interior/aluminium-cladding.png',
    tags: ['ACP Panels', 'Weather Resistant', 'Insulation'],
  },
  {
    id: 'structural-glazing',
    title: 'Structural Glazing',
    description: 'High-performance frameless glazing systems for contemporary commercial and high-rise buildings, engineered for maximum transparency.',
    image: '/images/interior/structural-glazing.png',
    tags: ['Spider Fittings', 'Frameless', 'High-Rise'],
  },
  {
    id: 'glass-facades',
    title: 'Glass Facades',
    description: 'Premium full-height glass curtain wall systems that maximise natural light while delivering modern architectural appeal for landmark buildings.',
    image: '/images/interior/glass-facades.png',
    tags: ['Curtain Wall', 'Full-Height', 'Landmark'],
  },
  {
    id: 'concrete-flooring',
    title: 'Structural Work, Concrete & Flooring',
    description: 'Civil and structural construction including concrete works, structural framework, premium flooring solutions, foundations, and finishing works.',
    image: '/images/interior/concrete-flooring.png',
    tags: ['Concrete', 'Flooring', 'Structural'],
  },
  {
    id: 'railing-systems',
    title: 'Railing Systems',
    description: 'Modern glass, stainless steel, and aluminium railing solutions for balconies, staircases, commercial buildings, and luxury interiors.',
    image: '/images/interior/railing-systems.png',
    tags: ['Glass', 'Stainless Steel', 'Aluminium'],
  },
  {
    id: 'office-partitions',
    title: 'Office Partitions',
    description: 'Modular glass office partition systems designed to create flexible, modern, and productive workspaces with optimal light transmission.',
    image: '/images/interior/office-partitions.png',
    tags: ['Modular', 'Glass', 'Acoustic'],
  },
  {
    id: 'doors-windows',
    title: 'Doors & Windows',
    description: 'Custom-designed commercial and residential doors and window systems engineered for durability, energy efficiency, and aesthetics.',
    image: '/images/interior/doors-windows.png',
    tags: ['Aluminium', 'Pivot Doors', 'Energy Efficient'],
  },
  {
    id: 'stainless-steel',
    title: 'Stainless Steel Works',
    description: 'Premium stainless steel fabrication for commercial interiors, kitchens, architectural features, decorative elements, and exterior installations.',
    image: '/images/interior/stainless-steel.png',
    tags: ['Fabrication', 'Decorative', 'Commercial'],
  },
];

function ServiceCard({ svc, index }: { svc: typeof services[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: (index % 3) * 0.08, duration: 0.5 }}
      className="ie-service-card group relative rounded-xl overflow-hidden bg-secondary-dark shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={svc.image}
          alt={svc.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark via-secondary-dark/40 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-heading font-bold text-white text-lg mb-1.5 group-hover:text-primary transition-colors duration-300">
          {svc.title}
        </h3>
        <p className="font-body text-white/60 text-sm leading-relaxed mb-3 line-clamp-2">
          {svc.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {svc.tags.map((tag) => (
            <span key={tag} className="font-body text-[10px] font-semibold text-primary bg-primary/15 border border-primary/25 rounded-full px-2.5 py-0.5 uppercase tracking-wide">
              {tag}
            </span>
          ))}
        </div>
        <Link
          href="/contact-us"
          className="inline-flex items-center gap-1.5 text-white/50 hover:text-primary font-body text-xs font-semibold uppercase tracking-wider transition-colors duration-200"
        >
          Enquire <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function IEServiceCards() {
  return (
    <section id="ie-services" className="ie-service-cards py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-primary font-heading font-bold text-lg">//</span>
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">Our Capabilities</span>
          </div>
          <h2 className="font-heading font-bold text-secondary-dark text-3xl lg:text-4xl mb-4">
            9 Specialist Service Areas
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-2xl mx-auto">
            From structural glazing to premium stainless steel works — every service delivered with engineering precision and architectural excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <ServiceCard key={svc.id} svc={svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
