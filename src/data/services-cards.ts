// Services data for MH Tracon
export interface ServiceCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  tag: string;
  color: string;
  link: string;
}

export const servicesData: ServiceCard[] = [
  {
    id: 'interior-exterior',
    icon: 'Palette',
    title: 'Interior & Exterior Design',
    description:
      'Transform spaces with our end-to-end design solutions — from concept and 3D visualization to final execution for commercial, hospitality, and industrial environments.',
    tag: 'Design',
    color: '#f16d2b',
    link: '#',
  },
  {
    id: 'mep',
    icon: 'Zap',
    title: 'MEP Solutions',
    description:
      'Complete Mechanical, Electrical & Plumbing services engineered to the highest standards for commercial, industrial, and institutional projects across Saudi Arabia.',
    tag: 'Engineering',
    color: '#2a3247',
    link: '/services/mep',
  },
  {
    id: 'ai-software',
    icon: 'Brain',
    title: 'AI & Software Development',
    description:
      'Custom AI solutions, enterprise software, and digital transformation services designed to modernize operations and drive measurable business outcomes.',
    tag: 'Technology',
    color: '#f16d2b',
    link: '#',
  },
  {
    id: 'security',
    icon: 'ShieldCheck',
    title: 'Security Solutions',
    description:
      'Integrated security ecosystems — CCTV, access control, fire & safety systems, and alarm management — installed and maintained by certified specialists.',
    tag: 'Safety',
    color: '#2a3247',
    link: '#',
  },
  {
    id: 'office-essentials',
    icon: 'Package',
    title: 'Office Essentials & Supplies',
    description:
      'Comprehensive workplace supply solutions — furniture, consumables, stationery, and IT accessories — sourced, delivered, and managed on your schedule.',
    tag: 'Business',
    color: '#f16d2b',
    link: '#',
  },
  {
    id: 'corporate-gifts',
    icon: 'Gift',
    title: 'Corporate Gifts & Branding',
    description:
      'Curated corporate gifting, branded merchandise, and custom packaging that leave a lasting impression at every touchpoint — events, client visits, and seasonal campaigns.',
    tag: 'Branding',
    color: '#2a3247',
    link: '#',
  },
  {
    id: 'uniforms',
    icon: 'Shirt',
    title: 'Uniform Solutions',
    description:
      'Premium corporate and industrial uniforms tailored to your brand identity and operational requirements — from design and sampling to bulk manufacturing and delivery.',
    tag: 'Apparel',
    color: '#f16d2b',
    link: '#',
  },
];
