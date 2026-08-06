'use client';

import { motion } from 'framer-motion';
import {
  Building, TrendingUp, HomeIcon, Hotel, ShoppingBag, LayoutGrid,
  Briefcase, Layers, Store, BookOpen, Heart, Factory,
} from 'lucide-react';

const clients = [
  { icon: Building, label: 'Commercial Developers' },
  { icon: HomeIcon, label: 'Property Owners' },
  { icon: TrendingUp, label: 'Real Estate Developers' },
  { icon: LayoutGrid, label: 'Architects' },
  { icon: Briefcase, label: 'Interior Designers' },
  { icon: Layers, label: 'General Contractors' },
  { icon: Factory, label: 'Fit-Out Companies' },
  { icon: Building, label: 'Corporate Offices' },
  { icon: Hotel, label: 'Hospitality Businesses' },
  { icon: Store, label: 'Retail Spaces' },
  { icon: ShoppingBag, label: 'Shopping Malls' },
  { icon: HomeIcon, label: 'Residential Projects' },
  { icon: Building, label: 'Mixed-Use Developments' },
  { icon: BookOpen, label: 'Educational Institutions' },
  { icon: Heart, label: 'Healthcare Facilities' },
];

export default function IEClientsServed() {
  return (
    <section className="ie-clients-served py-20 lg:py-28 bg-white">
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
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">Who We Serve</span>
          </div>
          <h2 className="font-heading font-bold text-secondary-dark text-3xl lg:text-4xl mb-4">
            Industries &amp; Clients
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-xl mx-auto">
            Trusted by developers, designers, and institutions across Saudi Arabia.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {clients.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                className="group flex flex-col items-center text-center gap-3 p-5 rounded-xl border border-gray-100 hover:border-primary/30 hover:bg-primary/[0.03] hover:shadow-md transition-all duration-300"
              >
                <div className="w-11 h-11 bg-gray-100 group-hover:bg-primary/10 rounded-xl flex items-center justify-center transition-colors duration-300">
                  <Icon className="h-5 w-5 text-gray-500 group-hover:text-primary transition-colors duration-300" />
                </div>
                <span className="font-body text-gray-700 text-xs font-medium leading-tight">{c.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
