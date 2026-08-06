'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'industrial',
    title: 'Industrial Uniforms',
    description: 'Heavy-duty workwear engineered for safety, durability, and performance in manufacturing, logistics, and construction environments.',
    image: '/images/uniform/industrial.png',
    tags: ['Hi-Vis Safety', 'Coveralls', 'FR Clothing'],
    className: 'lg:col-span-2',
  },
  {
    id: 'corporate',
    title: 'Corporate Uniforms',
    description: 'Elegant branded uniforms for corporate offices, executive teams, reception staff, and customer-facing professionals.',
    image: '/images/uniform/corporate.png',
    tags: ['Blazers', 'Business Shirts', 'Executive Wear'],
    className: '',
  },
  {
    id: 'hospitality',
    title: 'Hospitality Uniforms',
    description: 'Premium uniforms for hotels, restaurants, cafés, catering companies, and housekeeping teams.',
    image: '/images/uniform/hospitality.png',
    tags: ['Hotel Staff', 'Restaurant', 'Concierge'],
    className: '',
  },
  {
    id: 'healthcare',
    title: 'Healthcare Uniforms',
    description: 'Clinical-grade medical uniforms including doctor coats, scrubs, nurse uniforms, and hospital staff apparel designed for hygiene and comfort.',
    image: '/images/uniform/healthcare.png',
    tags: ['Lab Coats', 'Scrubs', 'Nurse Uniforms'],
    className: '',
  },
  {
    id: 'aviation',
    title: 'Aviation Uniforms',
    description: 'Professional uniforms for pilots, cabin crew, ground staff, and airport personnel meeting modern airline appearance standards.',
    image: '/images/uniform/aviation.png',
    tags: ['Pilots', 'Cabin Crew', 'Ground Staff'],
    className: '',
  },
  {
    id: 'school',
    title: 'School Uniforms',
    description: 'Durable and comfortable uniforms for schools, colleges, universities, and educational institutions.',
    image: '/images/uniform/school.png',
    tags: ['Schools', 'Colleges', 'Universities'],
    className: '',
  },
  {
    id: 'security',
    title: 'Security Uniforms',
    description: 'Professional uniforms for security guards, patrol officers, and supervisors — projecting authority while ensuring comfort.',
    image: '/images/uniform/security.png',
    tags: ['Guards', 'Patrol Officers', 'Supervisors'],
    className: '',
  },
  {
    id: 'sportswear',
    title: 'Sportswear',
    description: 'Performance apparel for sports teams, academies, corporate events, and promotional activities.',
    image: '/images/uniform/sportswear.png',
    tags: ['Sports Teams', 'Events', 'Academies'],
    className: '',
  },
  {
    id: 'polo',
    title: 'T-Shirts & Polo Shirts',
    description: 'Premium branded apparel for corporate events, promotional campaigns, and everyday staff uniforms.',
    image: '/images/uniform/polo.png',
    tags: ['Polo Shirts', 'Corporate Events', 'Branding'],
    className: '',
  },
  {
    id: 'coveralls',
    title: 'Coveralls',
    description: 'Protective garments for industrial, engineering, maintenance, workshop, oil & gas, and technical professionals.',
    image: '/images/uniform/coveralls.png',
    tags: ['Oil & Gas', 'Engineering', 'Maintenance'],
    className: '',
  },
];

function CategoryCard({ category, index }: { category: typeof categories[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: (index % 3) * 0.1, duration: 0.55 }}
      className={`group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-secondary-dark ${category.className}`}
    >
      {/* Image */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <Image
          src={category.image}
          alt={category.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark via-secondary-dark/40 to-transparent" />

        {/* Tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {category.tags.map(tag => (
            <span key={tag} className="bg-white/15 backdrop-blur-sm text-white text-xs font-body px-2.5 py-1 rounded-full border border-white/20">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading font-bold text-white text-xl mb-2 group-hover:text-primary transition-colors duration-300">
          {category.title}
        </h3>
        <p className="font-body text-white/65 text-sm leading-relaxed mb-5">
          {category.description}
        </p>
        <Link
          href="/contact-us"
          className="inline-flex items-center gap-1.5 text-primary font-heading font-semibold text-sm hover:gap-3 transition-all duration-300"
        >
          Get Quote <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Hover accent border */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}

export default function UniformCategories() {
  return (
    <section id="uniform-categories" className="uniform-categories py-20 lg:py-28 bg-secondary relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'url(/images/shape/shape-4.png)', backgroundRepeat: 'repeat' }}
      />

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-primary font-heading font-bold text-lg">//</span>
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">What We Offer</span>
          </div>
          <h2 className="font-heading font-bold text-white text-3xl lg:text-4xl xl:text-5xl mb-4">
            Our Uniform Categories
          </h2>
          <p className="font-body text-white/60 text-lg max-w-2xl mx-auto">
            From industrial workwear to premium hospitality attire — we manufacture uniforms for every industry and every role.
          </p>
        </motion.div>

        {/* First card full-width on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="sm:col-span-2 lg:col-span-2">
            <CategoryCard category={categories[0]} index={0} />
          </div>
          <div>
            <CategoryCard category={categories[1]} index={1} />
          </div>
        </div>

        {/* Remaining cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.slice(2).map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
