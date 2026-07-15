import type { Metadata } from 'next';
import Image from 'next/image';
import { Award, CheckCircle, Target, Eye } from 'lucide-react';
import { companyInfo } from '@/data/company';

export const metadata: Metadata = {
  title: 'About Company',
  description:
    'Learn about Webcon Engineers Pvt. Ltd. - 25+ years of experience in Pre-Engineered Buildings and Civil Construction in Kolkata.',
};

export default function AboutCompanyPage() {
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

      {/* Company Profile */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <Image
                src="/images/resource/about-3.jpg"
                alt="About Webcon Engineers"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-primary font-heading font-bold text-lg">//</span>
                <h6 className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">
                  About Our Company
                </h6>
              </div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-secondary mb-6">
                Webcon Engineers Pvt. Ltd.
              </h2>

              {/* Years Badge */}
              <div className="bg-secondary rounded-lg p-5 mb-6 inline-flex items-center gap-4">
                <Award className="h-10 w-10 text-primary" />
                <div>
                  <h2 className="text-white font-heading font-bold text-3xl leading-none">
                    {companyInfo.yearsOfExperience}+
                  </h2>
                  <h5 className="text-white/80 font-heading font-medium text-sm mt-1">
                    Years Of Experience
                  </h5>
                </div>
              </div>

              <p className="text-body text-sm leading-relaxed font-body text-justify mb-4">
                <strong>Webcon</strong> started the company in 1997 with a vision to provide unique
                structures of steel which are very different from conventional building as easily
                portable and build faster. At the same time providing high quality construction, we
                are proud to deliver projects that include innovation and strengthen infrastructure
                in different demographics.
              </p>
              <p className="text-body text-sm leading-relaxed font-body text-justify">
                We are well-equipped with all the superior manufacturing and designing facilities
                that help us in carrying out an efficient production of our range effectively. We
                truly comply with all the ISI specifications while designing and manufacturing all
                our structures which ensure all-out safety and are quite economical as well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-8 w-8 text-primary" />
                <h3 className="font-heading font-bold text-2xl text-secondary">Our Vision</h3>
              </div>
              <p className="text-body text-sm leading-relaxed font-body text-justify">
                {companyInfo.vision}
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-8 w-8 text-primary" />
                <h3 className="font-heading font-bold text-2xl text-secondary">Our Mission</h3>
              </div>
              <p className="text-body text-sm leading-relaxed font-body text-justify">
                {companyInfo.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-secondary mb-10">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Quality Construction', desc: 'ISI specification compliant designs ensuring all-out safety and durability.' },
              { title: 'Experienced Team', desc: '25+ years of expertise delivering projects across different demographics.' },
              { title: 'One-Stop Solution', desc: 'Complete structural solutions from design to erection under one roof.' },
              { title: 'Timely Delivery', desc: 'Fastest delivery and speedy erection of pre-engineered buildings.' },
              { title: 'Cost Effective', desc: 'Competitively priced solutions without compromising on quality.' },
              { title: 'Innovation', desc: 'Unique steel structures that are portable, fast to build, and weather-proof.' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow border-t-4 border-transparent hover:border-primary"
              >
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-4" />
                <h5 className="font-heading font-semibold text-lg text-secondary mb-2">
                  {item.title}
                </h5>
                <p className="text-body text-sm font-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
