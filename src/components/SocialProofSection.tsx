import { Quote } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const SocialProofSection = () => {
  const { socialProof } = siteContent;

  return (
    <section id="reviews" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12" data-reveal>
          <p className="text-primary text-sm uppercase tracking-wider mb-3 font-semibold">
            {socialProof.overline}
          </p>
          <h2 className="font-heading text-4xl md:text-6xl text-text mb-4 tracking-tight">
            {socialProof.headline}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            {socialProof.subtext}
          </p>
        </div>

        {/* Action Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16" data-reveal data-delay="200">
          {socialProof.actionImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-2xl overflow-hidden border border-border hover:scale-105 transition-transform duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src={image}
                alt={`Action shot ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {socialProof.testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="bg-surface rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300"
              data-reveal
              data-delay={index * 100}
            >
              {/* Quote Icon */}
              <Quote className="text-primary/30 mb-4" size={32} />

              {/* Testimonial Text */}
              <p className="text-text-muted leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <div className="text-text font-semibold">{testimonial.author}</div>
                  <div className="text-text-muted text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center" data-reveal data-delay="300">
          <a
            href="#book"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#book')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block bg-primary text-background px-10 py-5 rounded-full font-bold uppercase text-base hover:scale-105 hover:shadow-glow transition-all duration-200"
          >
            {socialProof.ctaFinal}
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
