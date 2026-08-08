import { ServiceHero } from '@/components/shared/services';

export default function UniformHero() {
  return (
    <ServiceHero
      badge="Premium Uniform Solutions"
      titleStart="Uniforms That"
      titleHighlight="Define"
      titleEnd="Your Brand"
      mobileSubtitle="Premium custom-crafted uniforms for every industry — corporate, medical, aviation &amp; more."
      desktopDescription="From corporate offices to healthcare facilities and aviation teams — custom-crafted uniforms that strengthen brand identity and elevate professional presentation."
      imageSrc="/images/uniform/hero-bg.png"
      imageAlt="MH Tracon Uniform Services — Corporate, Medical, Aviation and Industrial Uniforms"
      imageClassName="object-cover object-[center_top]"
      primaryCTA={{ label: 'Request a Quote', href: '/contact-us' }}
      secondaryCTA={{ label: 'Explore', href: '#uniform-categories' }}
      className="uniform-hero"
    />
  );
}
