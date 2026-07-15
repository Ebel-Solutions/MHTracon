'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow">
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-primary text-white text-xs font-heading font-semibold uppercase tracking-wider px-3 py-1.5 rounded-sm">
            {project.category}
          </span>
        </div>

        {/* Image */}
        <Image
          src={project.imageSrc}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/80 transition-colors duration-300 flex items-end">
          <div className="w-full p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider mb-1 block">
              {project.category}
            </span>
            <h5 className="text-white font-heading font-semibold text-lg">
              <Link href={project.link} className="hover:text-primary transition-colors">
                {project.name}
              </Link>
            </h5>
          </div>

          {/* Zoom Button */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors"
              aria-label={`View ${project.name}`}
            >
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
