import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Award,
  Eye,
  Target,
  ShieldCheck,
  Lightbulb,
  Users,
  Clock,
  Layers,
  Handshake,
  TrendingUp,
  Wrench,
  Globe2,
  BadgeCheck,
} from 'lucide-react';
import { companyInfo } from '@/data/company';
import StatsCounter from '@/components/about/StatsCounter';

export const metadata: Metadata = {
  title: 'About Company',
  description:
    'Learn about MH Tracon - A leading multi-solutions engineering company in Saudi Arabia.',
};

const whyChooseUs = [
  {
    icon: Layers,
    title: 'One-Stop Multi-Solutions Partner',
    desc: 'From engineering and MEP to AI, security, uniforms, and corporate gifts — we cover everything your business needs under one roof.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality & Compliance First',
    desc: 'Every solution we deliver meets the highest quality standards and local regulatory requirements, ensuring safety and long-term reliability.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation-Driven Approach',
    desc: 'We continuously adopt modern technologies, AI tools, and industry best practices to future-proof your operations and stay ahead of the curve.',
  },
  {
    icon: Users,
    title: 'Multidisciplinary Expert Team',
    desc: 'Our diverse team of certified engineers, designers, IT specialists, and procurement experts brings deep domain knowledge to every project.',
  },
  {
    icon: Clock,
    title: 'On-Time, Every Time',
    desc: 'We plan rigorously and execute efficiently to deliver projects on schedule, respecting your time and operational priorities.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnerships',
    desc: "We build lasting relationships based on trust, transparency, and consistent performance — not just one-time transactions.",
  },
  {
    icon: Wrench,
    title: 'End-to-End Execution',
    desc: "From consultation and design to supply, installation, and after-sales support — we manage the full project lifecycle so you don't have to.",
  },
  {
    icon: Globe2,
    title: 'Serving Diverse Industries',
    desc: 'Commercial, industrial, government, healthcare, education, hospitality, and enterprise clients across Saudi Arabia trust MHtracon.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable & Cost-Effective',
    desc: 'Our solutions scale with your business and are priced competitively, ensuring maximum value without compromising on quality.',
  },
];

const certifications = [
  {
    title: 'ISO 9001:2015',
    body: 'Quality Management System',
    issuer: 'International Organization for Standardization',
    year: '2023',
  },
  {
    title: 'ISO 45001:2018',
    body: 'Occupational Health & Safety',
    issuer: 'International Organization for Standardization',
    year: '2023',
  },
  {
    title: 'CR Registration No:',
    body: '7050639942',
    issuer: 'Ministry of Commerce, KSA',
    year: '2020',
  },
  {
    title: 'ZATCA Certified',
    body: 'Tax Compliance & E-Invoicing',
    issuer: 'Zakat, Tax & Customs Authority',
    year: '2022',
  },
];

export default function AboutCompanyPage() {
  return (
    <>
      {/* ── Page Banner ────────────────────────────────────────── */}
      <section
        className="relative py-20 lg:py-28 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/banner/banner-2.png)' }}
      >
        <div className="absolute inset-0 bg-secondary/80" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-white font-heading font-bold text-4xl lg:text-5xl mb-4">
            About Company
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/70 font-body text-sm">
            <a href="/" className="hover:text-primary transition-colors">
              Home
            </a>
            <span>/</span>
            <span className="text-primary">About Company</span>
          </div>
        </div>
      </section>

      {/* ── Company Profile ─────────────────────────────────────── */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* Decorative background accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 hidden lg:block" />
        <div className="absolute top-0 left-0 w-12 h-full bg-primary hidden lg:block" style={{ clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0 100%)' }} />

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image Column */}
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                <Image
                  src="/images/resource/about-3.png"
                  alt="About MH Tracon"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
              </div>
              {/* Floating experience badge */}
              <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-primary rounded-2xl p-6 shadow-xl flex items-center gap-4">
                <Award className="h-12 w-12 text-white flex-shrink-0" />
                <div>
                  <div className="text-white font-heading font-bold text-4xl leading-none">
                    {companyInfo.yearsOfExperience}+
                  </div>
                  <div className="text-white/80 font-heading font-medium text-sm mt-1">
                    Years of<br />Experience
                  </div>
                </div>
              </div>
              {/* Decorative dots */}
              <div
                className="absolute -top-6 -left-6 w-24 h-24 opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(circle, #2a3247 1px, transparent 1px)',
                  backgroundSize: '8px 8px',
                }}
              />
            </div>

            {/* Content Column */}
            <div className="lg:pl-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-0.5 bg-primary" />
                <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
                  Our Story
                </span>
              </div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-secondary mb-6">
                MH Tracon — Your Trusted<br />
                Multi-Solutions Partner
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed font-body mb-4">
                <span className="text-secondary font-semibold">MHtracon</span> is a leading multi-solutions company based in Riyadh, Saudi Arabia, delivering integrated engineering, technology, infrastructure, and business solutions to organizations across diverse industries. We combine technical expertise, innovative thinking, and customer-focused services to help businesses build, secure, and transform their operations with confidence.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed font-body mb-8">
                Our comprehensive portfolio spans Engineering &amp; Construction, Interior &amp; Exterior Design, MEP Services, Security Solutions, Fire &amp; Safety Systems, Networking &amp; Infrastructure, AI &amp; Software Development, Corporate Gifts, Office Essentials, Industrial Uniforms, Heavy Machinery, and Automotive Solutions — all delivered under one roof.
              </p>

              {/* Quick service pills */}
              <div className="flex flex-wrap gap-2">
                {['MEP', 'Engineering', 'Security', 'AI & Software', 'Uniforms', 'Interior Design'].map((s) => (
                  <span
                    key={s}
                    className="px-4 py-1.5 bg-primary/10 text-primary font-heading font-medium text-xs rounded-full border border-primary/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ─────────────────────────────────────── */}
      <section
        className="relative py-20 lg:py-28 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/banner/banner-5.png)' }}
      >
        <div className="absolute inset-0 bg-secondary/90" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url(/images/shape/shape-4.png)',
            backgroundRepeat: 'repeat',
          }}
        />

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-primary" />
              <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
                Our Direction
              </span>
              <span className="w-6 h-0.5 bg-primary" />
            </div>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-white">
              Vision &amp; Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision */}
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-2xl" />
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <Eye className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-white mb-4">Our Vision</h3>
              <p className="text-white/70 text-sm leading-relaxed font-body">
                To become one of the most trusted and preferred multi-solutions companies in Saudi Arabia and the Middle East by delivering integrated engineering, digital transformation, infrastructure, and business solutions that drive innovation, create lasting value, and contribute to the region&apos;s sustainable development.
              </p>
            </div>

            {/* Mission */}
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-2xl" />
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <Target className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-white mb-4">Our Mission</h3>
              <p className="text-white/70 text-sm leading-relaxed font-body">
                Our mission is to deliver innovative, reliable, and high-quality engineering, technology, infrastructure, and business solutions that empower organizations to achieve sustainable growth. We are committed to building long-term partnerships through integrity, professionalism, technical expertise, and exceptional customer service while consistently exceeding client expectations in every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
                Our Strengths
              </span>
              <span className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-secondary mb-4">
              Why Choose MHtracon?
            </h2>
            <p className="text-gray-500 font-body text-sm max-w-2xl mx-auto leading-relaxed">
              We are more than a service provider — we are a strategic partner committed to delivering integrated, scalable, and high-quality solutions that drive real business outcomes across Saudi Arabia.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-primary transition-colors duration-300" />

                  {/* Index number watermark */}
                  <div className="absolute top-4 right-4 text-7xl font-heading font-bold text-gray-50 group-hover:text-primary/5 transition-colors leading-none select-none">
                    {String(idx + 1).padStart(2, '0')}
                  </div>

                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                    <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h5 className="font-heading font-semibold text-lg text-secondary mb-3">
                    {item.title}
                  </h5>
                  <p className="text-gray-500 text-sm font-body leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Animated Stats ───────────────────────────────────────── */}
      <StatsCounter />

      {/* ── Certifications ───────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        {/* Background geometric shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary/10 rounded-full" />
          <div className="absolute top-20 left-20 w-16 h-16 border-2 border-primary/10 rounded-full" />
          <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-primary/10 rounded-full" />
          <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-primary/10 rounded-full" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
                Trust &amp; Credibility
              </span>
              <span className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-secondary mb-4">
              Our Certifications
            </h2>
            <p className="text-gray-500 font-body text-sm max-w-xl mx-auto leading-relaxed">
              MHtracon holds recognized certifications and registrations that validate our commitment to quality, safety, and professional standards.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="group relative bg-white border-2 border-gray-100 rounded-2xl p-7 text-center hover:border-primary hover:shadow-xl transition-all duration-300"
              >
                {/* Badge icon area */}
                <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <BadgeCheck className="h-10 w-10 text-primary group-hover:text-white transition-colors duration-300" />
                </div>

                <div className="text-xs font-heading font-semibold text-primary uppercase tracking-widest mb-1">
                  {cert.year}
                </div>
                <h4 className="font-heading font-bold text-xl text-secondary mb-2">
                  {cert.title}
                </h4>
                <p className="text-gray-600 font-body text-sm font-medium mb-3">
                  {cert.body}
                </p>
                <div className="w-10 h-0.5 bg-primary mx-auto mb-3" />
                <p className="text-gray-400 font-body text-xs leading-snug">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>

          {/* Placeholder note */}
          <p className="text-center text-gray-400 font-body text-xs mt-8">
            * More certifications and accreditations will be added as obtained.
          </p>
        </div>
      </section>
    </>
  );
}
