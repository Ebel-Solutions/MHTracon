'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Camera, Fingerprint, ShieldAlert, PhoneIncoming } from 'lucide-react';

const services = [
  {
    id: 'cctv',
    icon: Camera,
    title: 'CCTV & Surveillance',
    subtitle: 'Intelligent Monitoring',
    description:
      'High-definition IP CCTV networks with advanced AI video analytics. From robust PTZ cameras to complex Video Management Systems (VMS), we ensure complete perimeter and interior visibility.',
    image: '/images/security/cctv.png',
    items: ['IP Camera Solutions', 'Wireless CCTV Systems', 'Remote Monitoring & VMS', 'AI Video Analytics (Facial, Motion)', 'Night Vision & Thermal Imaging'],
    tags: ['IP CCTV', 'PTZ', 'VMS', 'Analytics'],
    color: 'from-blue-900/80',
  },
  {
    id: 'access-control',
    icon: Fingerprint,
    title: 'Access Control Systems',
    subtitle: 'Secure Authentication',
    description:
      'Enterprise-grade access control solutions to manage and restrict movement within your facility. We deploy biometric, RFID, and mobile access systems integrated seamlessly with your HR software.',
    image: '/images/security/access-control.png',
    items: ['Biometric & Facial Recognition', 'RFID & Smart Card Systems', 'Time & Attendance Management', 'Visitor Management Portals', 'Elevator & Door Controllers'],
    tags: ['Biometrics', 'RFID', 'Time & Attendance'],
    color: 'from-slate-900/80',
  },
  {
    id: 'intrusion',
    icon: ShieldAlert,
    title: 'Intrusion Detection',
    subtitle: 'Early Threat Response',
    description:
      'Multi-layered alarm systems designed to detect unauthorized entry instantly. Featuring advanced motion sensors, glass-break detectors, and panic buttons linked to central monitoring stations.',
    image: '/images/security/intrusion.png',
    items: ['Burglar Alarm Systems', 'Wireless Motion Sensors', 'Door, Window & Glass Break Sensors', 'Panic Alarm Integration', 'Central Station Monitoring'],
    tags: ['Alarms', 'Sensors', 'Motion'],
    color: 'from-red-900/80',
  },
  {
    id: 'intercom',
    icon: PhoneIncoming,
    title: 'Intercom & Video Door Phones',
    subtitle: 'Visitor Verification',
    description:
      'Modern communication systems for secure visitor screening. Our solutions range from simple audio intercoms to sophisticated multi-tenant video door phone networks for residential and corporate towers.',
    image: '/images/security/intercom.png',
    items: ['Video Door Phone Systems', 'Multi-Tenant IP Intercoms', 'Wireless Audio Intercoms', 'Mobile App Integration', 'Remote Door Release'],
    tags: ['VDP', 'Intercom', 'IP Audio'],
    color: 'from-cyan-900/80',
  },
];

export default function SecurityServiceCards() {
  return (
    <section id="security-services" className="security-service-cards py-20 lg:py-28 bg-white">
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
              Core Capabilities
            </span>
          </div>
          <h2 className="font-heading font-bold text-secondary-dark text-3xl lg:text-4xl mb-4">
            Integrated Security Solutions
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-2xl mx-auto">
            Comprehensive electronic security systems engineered to protect your assets, personnel, and infrastructure.
          </p>
        </motion.div>

        {/* 2x2 Grid for 4 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: (i % 2) * 0.1, duration: 0.5 }}
                className="group relative rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 bg-white flex flex-col"
              >
                {/* Image */}
                <div className="relative h-56 lg:h-64 overflow-hidden flex-shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} via-transparent to-transparent opacity-90`} />
                  {/* Icon badge */}
                  <div className="absolute top-5 left-5 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  {/* Tags */}
                  <div className="absolute bottom-4 left-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="font-body text-white/95 text-[11px] font-medium uppercase tracking-wider bg-black/20 border border-white/20 px-2.5 py-1 rounded backdrop-blur-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="font-body text-primary text-xs uppercase tracking-widest font-bold mb-2">
                    {service.subtitle}
                  </div>
                  <h3 className="font-heading font-bold text-secondary-dark text-2xl mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-gray-500 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Service items */}
                  <ul className="space-y-2 mb-8 flex-grow">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 font-body text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm hover:gap-3 transition-all duration-200 group/link mt-auto pt-4 border-t border-gray-100"
                  >
                    Discuss Your Requirements
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
