import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';
import gulaArenBatok from '@/assets/gula-aren-batok.jpg';
import gulaCair from '@/assets/gula-cair.jpg';
import gulaSemut from '@/assets/gula-semut.jpg';
import ScrollReveal from './ScrollReveal';

const products = [
  {
    id: 1,
    name: 'Gula Aren Batok',
    image: gulaArenBatok,
    description: 'Gula aren cetak dalam bentuk batok tradisional. Cocok untuk kopi, teh, dan masakan.',
    benefit: 'Praktis & Tahan Lama',
    whatsappMessage: 'Halo, saya ingin memesan Gula Aren Batok',
  },
  {
    id: 2,
    name: 'Gula Aren Cair',
    image: gulaCair,
    description: 'Sirup gula aren murni dalam botol. Sempurna untuk minuman kopi dan dessert.',
    benefit: 'Mudah Larut & Praktis',
    whatsappMessage: 'Halo, saya ingin memesan Gula Aren Cair',
  },
  {
    id: 3,
    name: 'Gula Semut Aren',
    image: gulaSemut,
    description: 'Gula aren berbentuk butiran halus. Ideal untuk taburan dan baking.',
    benefit: 'Serbaguna & Premium',
    whatsappMessage: 'Halo, saya ingin memesan Gula Semut Aren',
  },
];

const ProductsSection = () => {
  return (
    <section id="produk" className="section-padding">
      <div className="container-max">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Produk Kami
            </span>
            <h2 className="heading-secondary text-foreground mt-2 mb-4">
              Pilihan Gula Aren Terbaik
            </h2>
            <p className="text-muted-foreground">
              Semua produk kami diproduksi secara tradisional dengan bahan baku nira aren pilihan langsung dari petani lokal.
            </p>
          </div>
        </ScrollReveal>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.15}>
              <div className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1 h-full">
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Benefit Badge */}
                  <span className="inline-block bg-accent/10 text-accent text-xs font-medium px-3 py-1 rounded-full mb-3">
                    {product.benefit}
                  </span>

                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>

                  <Button variant="whatsapp" className="w-full" asChild>
                    <a
                      href={`https://wa.me/6281234567890?text=${encodeURIComponent(product.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Order via WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional Info */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Butuh dalam jumlah besar?{' '}
              <a
                href="#kemitraan"
                className="text-accent font-medium hover:underline"
              >
                Hubungi kami untuk harga grosir
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProductsSection;
