import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'PEB Structure Projects',
  description:
    'View our Pre-Engineered Building structure projects. Webcon Engineers specializes in PEB structures across Kolkata and India.',
};

export default function PebStructurePage() {
  const pebProjects = projects.filter((p) => p.categorySlug === 'peb-structure');

  return (
    <>
      {/* Page Banner */}
      <section
        className="relative py-20 lg:py-28 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/banner/banner-2.jpg)' }}
      >
        <div className="absolute inset-0 bg-secondary/80" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-white font-heading font-bold text-4xl lg:text-5xl mb-4">
            PEB Structure Projects
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/70 font-body text-sm">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-primary">PEB Structure</span>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pebProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.imageSrc}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-xs font-heading font-semibold uppercase tracking-wider px-3 py-1.5 rounded-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h5 className="font-heading font-semibold text-lg text-secondary">
                    {project.name}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
