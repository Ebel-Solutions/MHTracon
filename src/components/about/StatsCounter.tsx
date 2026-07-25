'use client';

import { useState, useEffect, useRef } from 'react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

const stats: Stat[] = [
  { value: 5, suffix: '+', label: 'Years of Experience', icon: '🏆' },
  { value: 12, suffix: '+', label: 'Service Verticals', icon: '⚙️' },
  { value: 200, suffix: '+', label: 'Projects Delivered', icon: '📦' },
  { value: 100, suffix: '+', label: 'Satisfied Clients', icon: '🤝' },
];

function CountUp({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const startTime = Date.now();
          const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress >= 1) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.4 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section
      className="relative py-20"
      style={{
        backgroundImage: 'url(/images/banner/banner-3.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-secondary/85" />

      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(/images/shape/shape-4.png)',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-primary font-heading font-bold text-lg">//</span>
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">
              Our Impact
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-white">
            MHtracon in Numbers
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-primary/20 hover:border-primary/40 transition-all duration-500"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/0 group-hover:bg-primary/5 transition-all duration-500" />

              <div className="text-4xl mb-4">{stat.icon}</div>

              <div className="text-primary font-heading font-bold text-4xl lg:text-5xl xl:text-6xl mb-3 tabular-nums">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>

              <div className="w-10 h-0.5 bg-primary mx-auto mb-3" />

              <div className="text-white/70 font-body text-sm uppercase tracking-wider leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
