import { Button } from './ui/button';
import { MessageCircle, MapPin, Phone, Mail, Instagram } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ContactSection = () => {
  return (
    <section id="kontak" className="section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Hubungi Kami
              </span>
              <h2 className="heading-secondary text-foreground mt-2 mb-4">
                Siap Memesan atau Ada Pertanyaan?
              </h2>
              <p className="text-muted-foreground mb-8">
                Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda dengan ramah dan cepat.
              </p>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-medium text-foreground">+62 812-3456-7890</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">info@gulaarennusantara.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Lokasi</p>
                    <p className="font-medium text-foreground">Jawa Barat, Indonesia</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA Card */}
          <ScrollReveal direction="right" delay={0.1}>
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground flex flex-col justify-center h-full">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-6">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4">
                  Pesan Langsung via WhatsApp
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  Cara paling cepat dan mudah untuk memesan. Kami akan merespons dalam hitungan menit!
                </p>
                <Button
                  variant="hero"
                  size="xl"
                  className="w-full sm:w-auto"
                  asChild
                >
                  <a
                    href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20bertanya%20tentang%20produk%20Gula%20Aren"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat via WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
