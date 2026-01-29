import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20bertanya%20tentang%20Gula%20Aren"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] px-5 py-3 rounded-full shadow-strong hover:scale-105 transition-transform duration-300 group"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline font-medium">Chat WhatsApp</span>
      
      {/* Pulse Animation */}
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-golden rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-golden rounded-full" />
    </a>
  );
};

export default FloatingWhatsApp;
