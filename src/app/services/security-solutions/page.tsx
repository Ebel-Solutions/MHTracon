import type { Metadata } from 'next';
import SecurityHero from '@/components/security/SecurityHero';
import SecurityStatsBar from '@/components/security/SecurityStatsBar';
import SecurityServiceCards from '@/components/security/SecurityServiceCards';
import SecurityWhyChooseUs from '@/components/security/SecurityWhyChooseUs';
import SecurityIndustries from '@/components/security/SecurityIndustries';
import SecurityWorkflow from '@/components/security/SecurityWorkflow';
import SecurityGallery from '@/components/security/SecurityGallery';
import SecurityTestimonials from '@/components/security/SecurityTestimonials';
import SecurityFAQ from '@/components/security/SecurityFAQ';
import SecurityCTA from '@/components/security/SecurityCTA';

export const metadata: Metadata = {
  title: 'Security Solutions | MH Tracon — CCTV, Access Control & Alarms in Saudi Arabia',
  description:
    'MH Tracon delivers enterprise-grade electronic security solutions including AI CCTV, biometric access control, intrusion detection, and intercoms across Saudi Arabia.',
  keywords: [
    'security solutions saudi arabia',
    'CCTV installation riyadh',
    'access control systems',
    'biometric security saudi arabia',
    'burglar alarm systems riyadh',
    'video management systems VMS',
    'AI video analytics',
    'security AMC',
    'integrated security systems',
    'commercial security installation',
    'video door phones riyadh',
    'electronic security company',
  ],
  openGraph: {
    title: 'Security Solutions | MH Tracon',
    description: 'Integrated electronic security systems protecting your people, assets, and infrastructure in Saudi Arabia.',
    url: 'https://mhtracon.com/services/security-solutions',
    siteName: 'MH Tracon',
    type: 'website',
  },
};

export default function SecurityPage() {
  return (
    <main className="security-page">
      <SecurityHero />
      <SecurityStatsBar />
      <SecurityServiceCards />
      <SecurityWhyChooseUs />
      <SecurityIndustries />
      <SecurityWorkflow />
      <SecurityGallery />
      <SecurityTestimonials />
      <SecurityFAQ />
      <SecurityCTA />
    </main>
  );
}
