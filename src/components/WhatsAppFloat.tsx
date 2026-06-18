import { MessageCircle } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const WhatsAppFloat = () => {
  const { whatsappFloat } = siteContent;

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappFloat.number.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappFloat.message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-200 group"
      aria-label={whatsappFloat.label}
    >
      <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
      
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
    </button>
  );
};

export default WhatsAppFloat;
