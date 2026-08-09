import { ServiceFAQ, type FAQItem } from '@/components/shared/services';

const faqs: FAQItem[] = [
  { q: 'Which CCTV system is best for my business?', a: 'The ideal system depends on your specific needs, layout, and lighting conditions. We conduct a free site survey to recommend the right mix of IP cameras, PTZ units, and AI analytics for optimal coverage.' },
  { q: 'Can I monitor the cameras remotely?', a: 'Yes. All our modern CCTV and VMS solutions include secure, encrypted mobile and desktop applications, allowing you to view live feeds and playback footage from anywhere in the world.' },
  { q: 'Are biometric access control systems secure?', a: 'Absolutely. We use enterprise-grade biometric readers (fingerprint, facial recognition, and iris scanners) featuring anti-spoofing technology and secure encrypted data transmission.' },
  { q: 'Can access control integrate with my existing infrastructure?', a: 'Yes. Our systems are designed using open protocols (like ONVIF and Wiegand) allowing seamless integration with your existing CCTV, fire alarms, and HR attendance software.' },
  { q: 'What is included in an Annual Maintenance Contract (AMC)?', a: 'Our AMCs cover regular preventive maintenance visits, camera cleaning, software/firmware updates, priority emergency response, and detailed health check reports for your entire security network.' },
  { q: 'How often should security systems be serviced?', a: 'For commercial environments, we recommend quarterly preventive maintenance to ensure cameras are clean, recording drives are healthy, and access control databases are synchronized.' },
  { q: 'Do you support large enterprise projects?', a: 'Yes. We have extensive experience designing and deploying highly scalable security architectures for multi-site corporate networks, industrial facilities, and large institutional campuses.' },
  { q: 'What happens if a camera or sensor fails?', a: 'Our systems can be configured to send instant health alerts. With an active AMC, our 24/7 technical team will immediately diagnose the issue remotely and dispatch engineers to resolve it.' },
];

export default function SecurityFAQ() {
  return (
    <ServiceFAQ
      faqs={faqs}
      sectionLabel="Common Questions"
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about our electronic security systems and services."
      className="security-faq"
    />
  );
}
