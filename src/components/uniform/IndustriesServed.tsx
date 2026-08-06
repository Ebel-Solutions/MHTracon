'use client';

import { motion } from 'framer-motion';
import {
  Building2, UtensilsCrossed, Hotel, Hospital, GraduationCap,
  PlaneTakeoff, ShieldAlert, Factory, HardHat, Landmark,
  Dumbbell, Truck, ShoppingBag, Stethoscope, Users
} from 'lucide-react';

const industries = [
  { icon: Building2, label: 'Corporate Offices' },
  { icon: Hotel, label: 'Hotels' },
  { icon: UtensilsCrossed, label: 'Restaurants' },
  { icon: Hospital, label: 'Hospitals' },
  { icon: Stethoscope, label: 'Clinics' },
  { icon: GraduationCap, label: 'Schools' },
  { icon: GraduationCap, label: 'Universities' },
  { icon: PlaneTakeoff, label: 'Airlines' },
  { icon: ShieldAlert, label: 'Security Companies' },
  { icon: Factory, label: 'Manufacturing' },
  { icon: HardHat, label: 'Construction' },
  { icon: Landmark, label: 'Government Orgs' },
  { icon: Dumbbell, label: 'Sports Clubs' },
  { icon: Truck, label: 'Logistics' },
  { icon: ShoppingBag, label: 'Retail Businesses' },
];

export default function IndustriesServed() {
  return (
    <section className="uniform-industries py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(241,109,43,0.04),transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-primary font-heading font-bold text-lg">//</span>
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">Industries We Serve</span>
          </div>
          <h2 className="font-heading font-bold text-secondary-dark text-3xl lg:text-4xl mb-4">
            Trusted Across Every Sector
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-xl mx-auto">
            We supply premium uniforms to over 15 industries, serving organisations of all sizes across Saudi Arabia.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div className="w-11 h-11 bg-gray-50 group-hover:bg-primary/10 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <Icon className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                </div>
                <span className="font-body text-xs text-center text-gray-600 group-hover:text-secondary-dark font-medium leading-tight transition-colors duration-300">
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
