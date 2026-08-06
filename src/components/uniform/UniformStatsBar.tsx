'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const stats = [
  { value: 500, suffix: '+', label: 'Corporate Clients Served' },
  { value: 10, suffix: '+', label: 'Years of Excellence' },
  { value: 50000, suffix: '+', label: 'Uniforms Delivered' },
  { value: 15, suffix: ' Days', label: 'Avg. Turnaround Time' },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function UniformStatsBar() {
  return (
    <section className="uniform-stats-bar bg-primary py-10 lg:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center lg:px-8"
            >
              <div className="font-heading font-bold text-white text-3xl lg:text-4xl mb-1">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-body text-white/75 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
