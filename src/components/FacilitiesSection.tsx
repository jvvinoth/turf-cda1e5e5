import { siteContent } from '../lib/siteContent';

const FacilitiesSection = () => {
  const { facilities } = siteContent;

  return (
    <section id="facilities" className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12" data-reveal>
          <p className="text-primary text-sm uppercase tracking-wider mb-3 font-semibold">
            {facilities.overline}
          </p>
          <h2 className="font-heading text-4xl md:text-6xl text-text mb-4 tracking-tight">
            {facilities.headline}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            {facilities.subtext}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {facilities.features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              data-reveal
              data-delay={index * 100}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-2xl text-text mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
