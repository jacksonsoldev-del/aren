import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/50 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max section-padding text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm text-accent-foreground px-4 py-2 rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-card">100% Alami & Tradisional</span>
          </div>

          {/* Heading */}
          <h1 className="heading-primary text-card mb-6 animate-slide-up">
            Gula Aren Asli dari Alam Indonesia
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-card/90 max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Manis alami tanpa campuran, diproduksi secara tradisional dari nira aren pilihan oleh petani lokal Indonesia.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button variant="hero" size="xl" asChild>
              <a
                href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20memesan%20Gula%20Aren"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Pesan Sekarang via WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="xl" className="border-card text-card hover:bg-card hover:text-foreground" asChild>
              <a href="#produk">Lihat Produk</a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2 text-card/80">
              <span className="text-2xl">🌿</span>
              <span className="text-sm">100% Natural</span>
            </div>
            <div className="flex items-center gap-2 text-card/80">
              <span className="text-2xl">👨‍🌾</span>
              <span className="text-sm">Petani Lokal</span>
            </div>
            <div className="flex items-center gap-2 text-card/80">
              <span className="text-2xl">🏡</span>
              <span className="text-sm">Tradisional</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-card/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-card/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
