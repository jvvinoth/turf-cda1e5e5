import { Instagram, Facebook, MessageCircle, MapPin, Mail, Clock } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const Footer = () => {
  const { footer } = siteContent;

  const iconMap = {
    Instagram,
    Facebook,
    MessageCircle,
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center font-bold text-background text-2xl">
                T
              </div>
              <span className="text-text font-heading text-2xl font-bold tracking-tight">
                TURF சென்னை
              </span>
            </div>
            <p className="text-text-muted text-lg mb-4 max-w-md leading-relaxed">
              {footer.tagline}
            </p>
            <p className="text-text-muted mb-6 max-w-md">
              {footer.description}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {footer.social.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all duration-200"
                    aria-label={social.platform}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-text font-heading text-lg font-bold mb-4 tracking-tight uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-text-muted hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-text font-heading text-lg font-bold mb-4 tracking-tight uppercase">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${footer.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-text-muted hover:text-primary transition-colors duration-200"
                >
                  <MessageCircle size={18} className="flex-shrink-0 mt-0.5" />
                  <span>{footer.contact.whatsapp}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${footer.contact.email}`}
                  className="flex items-start gap-2 text-text-muted hover:text-primary transition-colors duration-200"
                >
                  <Mail size={18} className="flex-shrink-0 mt-0.5" />
                  <span>{footer.contact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-text-muted">
                <Clock size={18} className="flex-shrink-0 mt-0.5" />
                <span>{footer.contact.hours}</span>
              </li>
              <li>
                <a
                  href="#location"
                  onClick={(e) => scrollToSection(e, '#location')}
                  className="flex items-start gap-2 text-text-muted hover:text-primary transition-colors duration-200"
                >
                  <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                  <span>View on Map</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-text-muted text-sm">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
