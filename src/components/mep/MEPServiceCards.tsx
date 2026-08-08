'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Wind, Zap, Droplets, ShieldAlert, ClipboardCheck, Wrench } from 'lucide-react';

const services = [
  {
    id: 'mechanical',
    icon: Wind,
    title: 'Mechanical Services',
    subtitle: 'HVAC & Climate Control',
    description:
      'Complete mechanical engineering solutions including HVAC system design, ventilation, air conditioning installation, mechanical equipment supply, and preventive maintenance — ensuring occupant comfort, energy efficiency, and system longevity.',
    image: '/images/mep/mechanical.png',
    items: ['HVAC System Design & Installation', 'Ventilation Solutions', 'Air Conditioning Systems', 'Mechanical Equipment Installation', 'Preventive Maintenance & Repairs'],
    tags: ['HVAC', 'AHU', 'Chiller', 'Ductwork'],
    color: 'from-blue-900/80',
  },
  {
    id: 'electrical',
    icon: Zap,
    title: 'Electrical Services',
    subtitle: 'Power & Distribution',
    description:
      'Full-scope electrical engineering including HV/LV installations, main distribution boards, power distribution systems, lighting design, low voltage systems, and scheduled electrical maintenance — built for safety and energy efficiency.',
    image: '/images/mep/electrical.png',
    items: ['HV/LV Electrical Installations', 'Power Distribution Systems', 'Lighting Design & Solutions', 'Low Voltage (LV) Systems', 'Electrical Maintenance & Testing'],
    tags: ['MDB', 'LV', 'Earthing', 'Cable Tray'],
    color: 'from-amber-900/80',
  },
  {
    id: 'plumbing',
    icon: Droplets,
    title: 'Plumbing Services',
    subtitle: 'Water Supply & Drainage',
    description:
      'Comprehensive plumbing solutions including domestic water supply, hot & cold distribution, drainage systems, sanitary installations, booster pump systems, and ongoing pipe maintenance for commercial and residential projects.',
    image: '/images/mep/plumbing.png',
    items: ['Water Supply & Distribution', 'Drainage & Sewer Systems', 'Sanitary Plumbing', 'Pipe Installation & Maintenance', 'Water Pump & Booster Systems'],
    tags: ['uPVC', 'PPR', 'Hot & Cold', 'Pumps'],
    color: 'from-cyan-900/80',
  },
  {
    id: 'fire-protection',
    icon: ShieldAlert,
    title: 'Fire Protection Systems',
    subtitle: 'Life Safety & Compliance',
    description:
      'Specialist fire protection engineering — sprinkler system design, fire fighting systems, fire pump installation, fire alarm integration, and ongoing maintenance — fully compliant with Saudi Civil Defense and NFPA international standards.',
    image: '/images/mep/fire-protection.png',
    items: ['Fire Fighting Systems Design', 'Fire Sprinkler Systems (NFPA)', 'Fire Pump Installation', 'Fire Alarm & Detection Integration', 'Fire Protection Maintenance'],
    tags: ['NFPA', 'Civil Defense', 'FM200', 'Sprinkler'],
    color: 'from-red-900/80',
  },
  {
    id: 'testing',
    icon: ClipboardCheck,
    title: 'Testing & Commissioning',
    subtitle: 'Quality Before Handover',
    description:
      'Rigorous testing and commissioning services verifying that all MEP systems perform to design specifications — including performance testing, load testing, system balancing, and compliance verification before formal project handover.',
    image: '/images/mep/testing.png',
    items: ['System Performance Testing', 'Load & Stress Testing', 'HVAC Balancing & Air Testing', 'Commissioning Documentation', 'Compliance & Regulatory Testing'],
    tags: ['TAB', 'BMS', 'Commissioning', 'CIBSE'],
    color: 'from-emerald-900/80',
  },
  {
    id: 'maintenance',
    icon: Wrench,
    title: 'Operation & Maintenance',
    subtitle: 'Long-Term Facility Support',
    description:
      'Comprehensive facility maintenance services including planned preventive maintenance (PPM), corrective maintenance, annual maintenance contracts (AMC), and 24/7 emergency support — extending asset lifecycles and minimising operational downtime.',
    image: '/images/mep/maintenance.png',
    items: ['Planned Preventive Maintenance (PPM)', 'Corrective Maintenance', 'Annual Maintenance Contracts (AMC)', 'Facility Support Services', '24/7 Emergency Response'],
    tags: ['PPM', 'AMC', 'CAFM', 'FM'],
    color: 'from-violet-900/80',
  },
];

export default function MEPServiceCards() {
  return (
    <section id="mep-services" className="mep-service-cards py-20 lg:py-28 bg-white">
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
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
              Our Capabilities
            </span>
          </div>
          <h2 className="font-heading font-bold text-secondary-dark text-3xl lg:text-4xl mb-4">
            Integrated MEP Services
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-2xl mx-auto">
            Six engineering disciplines. One trusted partner. Complete project lifecycle support from design to long-term maintenance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                className="group relative rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 bg-white"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} to-transparent`} />
                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  {/* Tags */}
                  <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span key={tag} className="font-body text-white/90 text-[10px] uppercase tracking-wider bg-white/15 border border-white/20 px-2 py-0.5 rounded-sm backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="font-body text-primary text-xs uppercase tracking-widest font-semibold mb-1">
                    {service.subtitle}
                  </div>
                  <h3 className="font-heading font-bold text-secondary-dark text-xl mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-gray-500 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Service items */}
                  <ul className="space-y-1.5 mb-5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 font-body text-sm text-gray-600">
                        <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm hover:gap-3 transition-all duration-200 group/link"
                  >
                    Enquire Now
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
