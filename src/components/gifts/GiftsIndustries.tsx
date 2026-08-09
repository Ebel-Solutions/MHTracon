'use client';

import { motion } from 'framer-motion';
import {
  Users, Presentation, Megaphone, Building2,
  Landmark, GraduationCap, Hospital, Hotel,
  BadgeDollarSign, MonitorSmartphone, Building, Globe
} from 'lucide-react';

const industries = [
  { icon: Users, label: 'Human Resources' },
  { icon: Megaphone, label: 'Marketing Teams' },
  { icon: Presentation, label: 'Event Organizers' },
  { icon: Building2, label: 'Corporate Relations' },
  { icon: Landmark, label: 'Government Organizations' },
  { icon: GraduationCap, label: 'Educational Institutions' },
  { icon: Hotel, label: 'Hospitality Businesses' },
  { icon: Hospital, label: 'Healthcare Organizations' },
  { icon: BadgeDollarSign, label: 'Financial Institutions' },
  { icon: MonitorSmartphone, label: 'Technology Companies' },
  { icon: Building, label: 'Large Enterprises' },
  { icon: Globe, label: 'Multinational Corporations' },
];

export default function GiftsIndustries() {
  return (
    <section className="gifts-industries py-20 lg:py-28 bg-gray-50">
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
              Who We Serve
            </span>
          </div>
          <h2 className="font-heading font-bold text-secondary-dark text-3xl lg:text-4xl mb-4">
            Partnering with Industry Leaders
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-xl mx-auto">
            From HR teams building company culture to marketing departments driving brand visibility, we supply premium corporate gifts across all sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.label}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group flex flex-col items-center gap-3 p-5 rounded-xl bg-white border border-gray-100 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-heading font-semibold text-secondary-dark text-xs text-center leading-snug">
                  {industry.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
