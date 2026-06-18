import { Check, TrendingUp } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const PricingSection = () => {
  const { pricing } = siteContent;

  return (
    <section id="pricing" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12" data-reveal>
          <p className="text-primary text-sm uppercase tracking-wider mb-3 font-semibold">
            {pricing.overline}
          </p>
          <h2 className="font-heading text-4xl md:text-6xl text-text mb-4 tracking-tight">
            {pricing.headline}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            {pricing.subtext}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {pricing.plans.map((plan, index) => (
            <div
              key={plan.sport}
              className={`relative bg-surface rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-[1.02] ${
                plan.popular
                  ? 'border-primary shadow-glow'
                  : 'border-border hover:border-primary/50'
              }`}
              data-reveal
              data-delay={index * 100}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-background px-4 py-1 rounded-full text-xs font-bold uppercase flex items-center gap-1">
                    <TrendingUp size={12} />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Icon & Sport Name */}
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">{plan.icon}</div>
                <h3 className="font-heading text-2xl text-text tracking-tight">
                  {plan.sport}
                </h3>
              </div>

              {/* Rates */}
              <div className="space-y-4 mb-6 pb-6 border-b border-border">
                {plan.rates.map((rate) => (
                  <div key={rate.time} className="flex justify-between items-baseline">
                    <span className="text-text-muted text-sm">{rate.time}</span>
                    <div className="text-right">
                      <span className="text-primary font-bold text-xl">{rate.price}</span>
                      <span className="text-text-muted text-xs ml-1">{rate.unit}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-text-muted text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#book"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#book')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`mt-6 w-full block text-center px-6 py-3 rounded-full font-bold uppercase text-sm transition-all duration-200 ${
                  plan.popular
                    ? 'bg-primary text-background hover:scale-105 hover:shadow-glow'
                    : 'bg-background border-2 border-border text-text hover:border-primary hover:text-primary'
                }`}
              >
                Book {plan.sport}
              </a>
            </div>
          ))}
        </div>

        {/* Group Package Banner */}
        <div
          className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 md:p-10 border border-primary/30 text-center"
          data-reveal
          data-delay="300"
        >
          <h3 className="font-heading text-3xl md:text-4xl text-text mb-3 tracking-tight">
            {pricing.groupPackage.title}
          </h3>
          <p className="text-lg text-text-muted mb-6 max-w-2xl mx-auto">
            {pricing.groupPackage.description}
          </p>
          <a
            href={`https://wa.me/${siteContent.whatsappFloat.number.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi! I want to know more about group packages.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-background px-8 py-4 rounded-full font-bold uppercase text-sm hover:scale-105 hover:shadow-glow transition-all duration-200"
          >
            {pricing.groupPackage.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
