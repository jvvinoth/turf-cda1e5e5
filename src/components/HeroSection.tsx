import { CheckCircle } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const HeroSection = () => {
  const { hero } = siteContent;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background overflow-hidden pt-20">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8" data-reveal>
            {/* Badge */}
            <div className="inline-flex items-center bg-surface border border-primary text-primary px-4 py-1.5 rounded-full text-sm font-medium">
              {hero.badge}
            </div>

            {/* Headline */}
            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl text-text leading-none tracking-tight">
              {hero.headline.line1}
              <br />
              {hero.headline.line2}
              <br />
              <span className="text-gradient">{hero.headline.line3}</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-text-muted max-w-lg leading-relaxed">
              {hero.subtext}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#book"
                onClick={(e) => scrollToSection(e, '#book')}
                className="bg-primary text-background px-8 py-4 rounded-full font-bold uppercase text-sm hover:scale-105 hover:shadow-glow transition-all duration-200 text-center"
              >
                {hero.ctaPrimary}
              </a>
              <a
                href="#pricing"
                onClick={(e) => scrollToSection(e, '#pricing')}
                className="border-2 border-border text-text px-8 py-4 rounded-full font-bold uppercase text-sm hover:border-primary hover:text-primary transition-all duration-200 text-center"
              >
                {hero.ctaSecondary}
              </a>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-3 pt-4">
              <CheckCircle className="text-primary" size={20} />
              <span className="text-sm text-text-muted">{hero.trustBadge}</span>
            </div>
          </div>

          {/* Right Image - Desktop Only */}
          <div className="hidden md:block" data-reveal data-delay="200">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl hero-image-clip">
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10" />
              <img
                src={hero.heroImage}
                alt="Cricket match under floodlights"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Image */}
      <div className="md:hidden px-4 pb-16" data-reveal>
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl">
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10" />
          <img
            src={hero.heroImage}
            alt="Cricket match under floodlights"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
