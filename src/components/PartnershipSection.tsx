import { Button } from './ui/button';
import { Handshake, Package, TrendingUp, MessageCircle } from 'lucide-react';

const benefits = [
  {
    icon: Package,
    title: 'Harga Grosir Spesial',
    description: 'Dapatkan harga khusus untuk pembelian dalam jumlah besar.',
  },
  {
    icon: TrendingUp,
    title: 'Pasokan Konsisten',
    description: 'Kami menjamin ketersediaan stok sepanjang tahun.',
  },
  {
    icon: Handshake,
    title: 'Kerjasama Jangka Panjang',
    description: 'Bangun bisnis bersama dengan dukungan penuh dari kami.',
  },
];

const PartnershipSection = () => {
  return (
    <section id="kemitraan" className="section-padding bg-accent text-accent-foreground">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-accent-foreground/70 font-medium text-sm uppercase tracking-wider">
              Kemitraan
            </span>
            <h2 className="heading-secondary mt-2 mb-4">
              Mau Jadi Reseller atau Distributor?
            </h2>
            <p className="text-accent-foreground/80 mb-6">
              Kami membuka kesempatan kerjasama untuk reseller, distributor, coffee shop, restoran, dan bisnis kuliner lainnya. Dapatkan keuntungan menarik dengan menjadi mitra kami.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-foreground/10 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-accent-foreground/70">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="hero"
              size="lg"
              className="bg-card text-foreground hover:bg-card/90"
              asChild
            >
              <a
                href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20untuk%20menjadi%20mitra%20reseller/distributor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Hubungi Kami untuk Kerja Sama
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-accent-foreground/10 rounded-2xl p-6 text-center">
              <p className="font-serif text-4xl font-bold mb-2">50+</p>
              <p className="text-sm text-accent-foreground/70">Mitra Reseller</p>
            </div>
            <div className="bg-accent-foreground/10 rounded-2xl p-6 text-center">
              <p className="font-serif text-4xl font-bold mb-2">1000+</p>
              <p className="text-sm text-accent-foreground/70">Kg/Bulan</p>
            </div>
            <div className="bg-accent-foreground/10 rounded-2xl p-6 text-center">
              <p className="font-serif text-4xl font-bold mb-2">15+</p>
              <p className="text-sm text-accent-foreground/70">Kota di Indonesia</p>
            </div>
            <div className="bg-accent-foreground/10 rounded-2xl p-6 text-center">
              <p className="font-serif text-4xl font-bold mb-2">5⭐</p>
              <p className="text-sm text-accent-foreground/70">Rating Kepuasan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
