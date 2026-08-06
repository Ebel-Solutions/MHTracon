'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

const stats = [
  { value: 350, suffix: '+', label: 'Projects Completed' },
  { value: 12, suffix: '+', label: 'Years of Expertise' },
  { value: 9, suffix: '', label: 'Service Specialisations' },
  { value: 100, suffix: '%', label: 'Turnkey Delivery' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 80, damping: 18 });
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, mv, value]);

  useEffect(() => {
    return spring.on('change', (v) => {
      if (ref.current) ref.current.textContent = Math.round(v) + suffix;
    });
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function IEStatsBar() {
  return (
    <section className="ie-stats-bar bg-primary py-8 lg:py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center px-4 py-2 lg:py-0"
            >
              <span className="font-heading font-bold text-white text-3xl lg:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <span className="font-body text-white/75 text-xs lg:text-sm mt-1">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
