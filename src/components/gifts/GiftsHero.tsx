import { ServiceHero } from '@/components/shared/services';

export default function GiftsHero() {
  return (
    <ServiceHero
      badge="Corporate Gifting & Merchandise"
      titleStart="Premium"
      titleHighlight="Corporate Gifts"
      titleEnd="& Branding"
      mobileSubtitle="Customized corporate gifting and employee engagement solutions."
      desktopDescription="Elevate your corporate relationships and employee engagement with thoughtfully curated, beautifully branded gifts. From executive hampers and luxury merchandise to custom onboarding kits, we deliver end-to-end premium gifting solutions."
      imageSrc="/images/gifts/hero-bg.png"
      imageAlt="Premium Corporate Gifting and Branded Merchandise by MH Tracon"
      imageClassName="object-cover object-center"
      primaryCTA={{ label: 'Request Catalogue', href: '/contact-us' }}
      secondaryCTA={{ label: 'View Collections', href: '#gift-categories' }}
      className="gifts-hero"
    />
  );
}
