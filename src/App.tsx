import { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BookingWidget from './components/BookingWidget';
import FacilitiesSection from './components/FacilitiesSection';
import PricingSection from './components/PricingSection';
import LocationSection from './components/LocationSection';
import SocialProofSection from './components/SocialProofSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Intersection Observer for reveal animations
    const revealElements = document.querySelectorAll('[data-reveal]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-delay');
            const timeout = delay ? parseInt(delay) : 0;
            
            setTimeout(() => {
              entry.target.classList.add('reveal-active');
            }, timeout);
            
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-text">
      <Header />
      <main>
        <HeroSection />
        <BookingWidget />
        <FacilitiesSection />
        <PricingSection />
        <LocationSection />
        <SocialProofSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
