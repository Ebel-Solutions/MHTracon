'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'onboarding',
    title: 'Employee Onboarding Kits',
    desc: 'Welcome boxes, branded notebooks, tech accessories, and apparel for new hires.',
    image: '/images/gifts/onboarding.png',
  },
  {
    id: 'events',
    title: 'Event & Conference Gifts',
    desc: 'Delegate gift packs, exhibition giveaways, and premium conference merchandise.',
    image: '/images/gifts/events.png',
  },
  {
    id: 'recognition',
    title: 'Recognition & Milestone Gifts',
    desc: 'Work anniversary rewards, promotion gifts, and personalized achievements.',
    image: '/images/gifts/recognition.png',
  },
  {
    id: 'appreciation',
    title: 'Client Appreciation Gifts',
    desc: 'Luxury executive hampers, premium drinkware, and customized gift boxes.',
    image: '/images/gifts/appreciation.png',
  },
  {
    id: 'seasonal',
    title: 'Seasonal & Festive Gifts',
    desc: 'Curated Ramadan, Eid, Saudi National Day, and New Year corporate collections.',
    image: '/images/gifts/seasonal.png',
  },
  {
    id: 'awards',
    title: 'Awards & Trophies',
    desc: 'Crystal awards, medals, plaques, and premium recognition frames.',
    image: '/images/gifts/awards.png',
  },
  {
    id: 'merchandise',
    title: 'Branded Merchandise',
    desc: 'Everyday promotional products: polos, caps, tote bags, and desk accessories.',
    image: '/images/gifts/merchandise.png',
  },
];

export default function GiftsCategories() {
  return (
    <section id="gift-categories" className="gifts-categories py-20 lg:py-28 bg-white">
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
              Gifting Collections
            </span>
          </div>
          <h2 className="font-heading font-bold text-secondary-dark text-3xl lg:text-4xl mb-4">
            Thoughtful Gifts for Every Occasion
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-2xl mx-auto">
            Explore our curated collections designed to leave a lasting impression on your employees, clients, and partners.
          </p>
        </motion.div>

        {/* Adjusting grid to fit 7 items elegantly (e.g., 3 top, 4 bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
