import { ServiceFAQ, type FAQItem } from '@/components/shared/services';

const faqs: FAQItem[] = [
  { q: 'What types of projects does MH Tracon handle for MEP?', a: 'We handle all commercial, residential, hospitality, healthcare, industrial, and infrastructure MEP projects — from small office fit-outs to large-scale multi-floor commercial tower developments.' },
  { q: 'What is your typical MEP project timeline?', a: 'Project timelines vary by scope. A medium commercial office fit-out (2,000–5,000 sqm) typically takes 10–16 weeks from design approval to commissioning. Large-scale projects are programme-planned individually.' },
  { q: 'Do you provide MEP engineering design as well as installation?', a: 'Yes. We provide full design and build services — our in-house engineers prepare all MEP drawings, calculations, and specifications, then our installation teams execute to the approved design.' },
  { q: 'What standards do your MEP systems comply with?', a: 'We comply with Saudi Building Code (SBC), NFPA, ASHRAE, IEC, BS/EN, and CIBSE standards, as well as applicable local civil defense and municipality requirements.' },
  { q: 'Do you offer Annual Maintenance Contracts (AMC)?', a: 'Yes. We offer comprehensive AMC packages covering planned preventive maintenance (PPM), corrective maintenance, emergency callouts, and detailed monthly/quarterly reporting.' },
  { q: 'What fire protection systems do you install?', a: 'We install wet-pipe and dry-pipe sprinkler systems, fire hose reels, fire hydrant systems, FM200 and inert gas suppression, fire pump stations, and addressable fire alarm systems — all to NFPA and Saudi Civil Defense standards.' },
  { q: 'What does your testing and commissioning service include?', a: 'Our T&C service includes performance testing of all MEP systems, air and water flow balancing (TAB), BMS integration testing, load testing, thermographic surveys, and the preparation of full commissioning documentation packages.' },
  { q: 'Do you offer emergency MEP maintenance support?', a: 'Yes. Our AMC clients receive 24/7 emergency support with guaranteed response times. We also provide one-off emergency call-out services for non-contracted clients subject to availability.' },
];

export default function MEPFAQ() {
  return (
    <ServiceFAQ
      faqs={faqs}
      sectionLabel="Common Questions"
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about our MEP engineering and maintenance services."
      className="mep-faq"
    />
  );
}
