import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Book', href: '#book' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Location', href: '#location' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-background text-xl">
              T
            </div>
            <div className="flex flex-col">
              <span className="text-text font-heading text-xl font-bold leading-none tracking-tight">
                TURF சென்னை
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-text-muted hover:text-primary transition-colors duration-200 font-medium uppercase text-sm tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={(e) => scrollToSection(e, '#book')}
              className="bg-primary text-background px-6 py-2.5 rounded-full font-bold uppercase text-sm hover:scale-105 hover:shadow-glow transition-all duration-200"
            >
              BOOK NOW
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-text p-2 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface border-t border-border">
          <nav className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-text-muted hover:text-primary transition-colors duration-200 font-medium uppercase text-sm tracking-wide py-3 px-4 rounded-lg hover:bg-background"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={(e) => scrollToSection(e, '#book')}
              className="bg-primary text-background px-6 py-3 rounded-full font-bold uppercase text-sm text-center mt-2"
            >
              BOOK NOW
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
