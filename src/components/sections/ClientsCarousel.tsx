'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { clientLogos } from '@/data/clients';

export default function ClientsCarousel() {
  // Triple the list so the reset loop is invisible
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  const scrollRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);

  /* ── Auto-scroll via rAF ─────────────────────────── */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let frame: number;

    const tick = () => {
      if (!isPaused.current && !isDragging.current && el) {
        el.scrollLeft += 0.8;
        // Seamless reset: when we've scrolled past the first "copy"
        const oneThird = el.scrollWidth / 3;
        if (el.scrollLeft >= oneThird * 2) {
          el.scrollLeft -= oneThird;
        }
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  /* ── Mouse drag handlers ─────────────────────────── */
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    isPaused.current = true;
    dragStartX.current = e.clientX;
    scrollStartX.current = scrollRef.current?.scrollLeft ?? 0;
    e.preventDefault();
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    scrollRef.current.scrollLeft = scrollStartX.current - (e.clientX - dragStartX.current);
  };

  const onMouseUp = () => {
    isDragging.current = false;
    isPaused.current = false;
  };

  /* ── Touch drag handlers ─────────────────────────── */
  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    isPaused.current = true;
    dragStartX.current = e.touches[0].clientX;
    scrollStartX.current = scrollRef.current?.scrollLeft ?? 0;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    scrollRef.current.scrollLeft =
      scrollStartX.current - (e.touches[0].clientX - dragStartX.current);
  };

  const onTouchEnd = () => {
    isDragging.current = false;
    isPaused.current = false;
  };

  return (
    <section className="clients-carousel pt-16 pb-50 lg:py-25 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-primary font-heading font-bold text-lg">//</span>
            <h6 className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">
              Clientele
            </h6>
            <span className="text-primary font-heading font-bold text-lg">\\</span>
          </div>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-secondary">
            Few Of Our Esteemed Clientele
          </h2>
        </div>
      </div>

      {/* Scrollable carousel strip */}
      <div
        ref={scrollRef}
        className="overflow-x-auto cursor-grab active:cursor-grabbing select-none scrollbar-hide"
        onMouseEnter={() => { isPaused.current = true; }}
        onMouseLeave={() => { isPaused.current = false; isDragging.current = false; }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="flex gap-5 px-6 py-2" style={{ width: 'max-content' }}>
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex-shrink-0 w-[180px] h-[90px] flex items-center justify-center bg-white rounded-lg shadow-sm p-1 hover:shadow-md transition-shadow"
            >
              <Image
                src={logo.imageSrc}
                alt={logo.alt}
                width={260}
                height={130}
                className="max-h-24 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
