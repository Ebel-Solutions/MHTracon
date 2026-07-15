// Navigation types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Banner slide types
export interface BannerSlide {
  id: number;
  subtitle: string;
  title: string;
  buttonText: string;
  buttonLink: string;
  bgImage: string;
}

// Service section types
export interface ServiceData {
  id: string;
  subtitle: string;
  titleHighlighted: string;
  titleRest: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  backgroundImage: string;
  colorScheme: 'orange' | 'yellow';
}

// Project types
export interface Project {
  id: number;
  name: string;
  category: string;
  categorySlug: string;
  imageSrc: string;
  link: string;
}

// Feature types
export interface Feature {
  id: number;
  title: string;
}

// Client logo types
export interface ClientLogo {
  id: number;
  imageSrc: string;
  alt: string;
}

// Contact info types
export interface ContactInfoItem {
  id: number;
  icon: string;
  lines: string[];
  links?: { text: string; href: string }[];
}

// Footer types
export interface FooterTag {
  label: string;
  href: string;
}

export interface GalleryItem {
  imageSrc: string;
  link: string;
}

// Company info types
export interface CompanyInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
  workingHours: string;
  yearsOfExperience: number;
  aboutText: string;
  vision: string;
  mission: string;
  disclaimer: string;
}
