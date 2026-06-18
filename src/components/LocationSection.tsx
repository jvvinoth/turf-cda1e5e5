import { MapPin, Navigation } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const LocationSection = () => {
  const { location } = siteContent;

  return (
    <section id="location" className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12" data-reveal>
          <p className="text-primary text-sm uppercase tracking-wider mb-3 font-semibold">
            {location.overline}
          </p>
          <h2 className="font-heading text-4xl md:text-6xl text-text mb-4 tracking-tight">
            {location.headline}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            {location.subtext}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Map */}
          <div className="order-2 md:order-1" data-reveal data-delay="200">
            <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden border border-border shadow-xl">
              <iframe
                src={location.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Turf Chennai Location"
                className="absolute inset-0"
              />
            </div>
          </div>

          {/* Address & Info */}
          <div className="order-1 md:order-2 space-y-8" data-reveal>
            {/* Address Card */}
            <div className="bg-background rounded-2xl p-8 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-text mb-2 tracking-tight">
                    Our Address
                  </h3>
                  <address className="not-italic text-text-muted leading-relaxed">
                    {location.address.line1}
                    <br />
                    {location.address.line2}
                    <br />
                    {location.address.line3}
                  </address>
                </div>
              </div>

              {/* Get Directions Button */}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${location.address.line1}, ${location.address.line2}, ${location.address.line3}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-primary text-background px-6 py-3 rounded-full font-bold uppercase text-sm hover:scale-105 hover:shadow-glow transition-all duration-200"
              >
                <Navigation size={18} />
                {location.ctaDirections}
              </a>
            </div>

            {/* Landmarks */}
            <div className="bg-background rounded-2xl p-8 border border-border">
              <h3 className="font-heading text-2xl text-text mb-4 tracking-tight">
                Nearby Landmarks
              </h3>
              <ul className="space-y-3">
                {location.landmarks.map((landmark) => (
                  <li key={landmark} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-text-muted">{landmark}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/30">
              <h3 className="font-heading text-2xl text-text mb-4 tracking-tight">
                Quick Contact
              </h3>
              <div className="space-y-3">
                <a
                  href={`https://wa.me/${siteContent.footer.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-text-muted hover:text-primary transition-colors"
                >
                  📱 {siteContent.footer.contact.whatsapp}
                </a>
                <a
                  href={`mailto:${siteContent.footer.contact.email}`}
                  className="block text-text-muted hover:text-primary transition-colors"
                >
                  ✉️ {siteContent.footer.contact.email}
                </a>
                <p className="text-text-muted">
                  🕐 {siteContent.footer.contact.hours}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
