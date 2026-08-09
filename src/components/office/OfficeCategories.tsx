'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'supplies',
    title: 'Office Supplies',
    desc: 'Premium stationery, desk organizers, and daily productivity essentials.',
    image: '/images/office/supplies.png',
  },
  {
    id: 'paper',
    title: 'Paper Products',
    desc: 'High-quality printer paper, letterheads, and premium printing solutions.',
    image: '/images/office/paper.png',
  },
  {
    id: 'filing',
    title: 'Filing & Organization',
    desc: 'Suspension files, cabinets, and elegant document management systems.',
    image: '/images/office/filing.png',
  },
  {
    id: 'it',
    title: 'Printer & IT Supplies',
    desc: 'Toners, keyboards, mice, monitors, and reliable IT consumables.',
    image: '/images/office/it.png',
  },
  {
    id: 'essentials',
    title: 'Workplace Essentials',
    desc: 'Hygiene products, sanitizers, and premium pantry consumables.',
    image: '/images/office/essentials.png',
  },
  {
    id: 'drinkware',
    title: 'Corporate Drinkware',
    desc: 'Custom branded coffee mugs, travel flasks, and water bottles.',
    image: '/images/office/drinkware.png',
  },
  {
    id: 'writing',
    title: 'Writing Instruments',
    desc: 'Executive pen sets, markers, and everyday writing essentials.',
    image: '/images/office/writing.png',
  },
  {
    id: 'bags',
    title: 'Bags & Travel',
    desc: 'Corporate backpacks, laptop bags, and executive travel accessories.',
    image: '/images/office/bags.png',
  },
  {
    id: 'eco',
    title: 'Eco-Friendly Products',
    desc: 'Sustainable bamboo desk accessories and recycled stationery options.',
    image: '/images/office/eco.png',
  },
  {
    id: 'apparel',
    title: 'Corporate Apparel',
    desc: 'Branded polos, jackets, and promotional event clothing.',
    image: '/images/office/apparel.png',
  },
];

export default function OfficeCategories() {
  return (
    <section id="office-categories" className="office-categories py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-primary font-heading font-bold text-lg">//</span>
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
              Our Product Range
            </span>
          </div>
          <h2 className="font-heading font-bold text-secondary-dark text-3xl lg:text-4xl mb-4">
            Everything Your Workplace Needs
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-2xl mx-auto">
            From the boardroom to the breakroom, we supply high-quality products that keep your business running smoothly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden bg-white">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading font-bold text-secondary-dark text-lg mb-2 group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                  {cat.desc}
                </p>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-xs uppercase tracking-wider hover:gap-3 transition-all duration-200 mt-auto"
                >
                  Request Quote <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
