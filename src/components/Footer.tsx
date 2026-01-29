import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    produk: [
      { label: 'Gula Aren Batok', href: '#produk' },
      { label: 'Gula Aren Cair', href: '#produk' },
      { label: 'Gula Semut Aren', href: '#produk' },
    ],
    perusahaan: [
      { label: 'Tentang Kami', href: '#tentang' },
      { label: 'Proses Produksi', href: '#proses' },
      { label: 'Testimoni', href: '#testimoni' },
    ],
    layanan: [
      { label: 'Jadi Reseller', href: '#kemitraan' },
      { label: 'Pesanan Grosir', href: '#kemitraan' },
      { label: 'Hubungi Kami', href: '#kontak' },
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container-max section-padding !pb-8">
        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-xl font-bold mb-4">
              Gula Aren Nusantara
            </h3>
            <p className="text-background/70 text-sm mb-4">
              Menghadirkan manisnya alam Indonesia ke rumah Anda. 100% alami, tradisional, dan berkualitas.
            </p>
          </div>

          {/* Produk */}
          <div>
            <h4 className="font-semibold mb-4">Produk</h4>
            <ul className="space-y-2">
              {links.produk.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 text-sm hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-2">
              {links.perusahaan.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 text-sm hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2">
              {links.layanan.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 text-sm hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} Gula Aren Nusantara. Semua hak dilindungi.
            </p>
            <p className="text-background/60 text-sm flex items-center gap-1">
              Dibuat dengan <Heart className="w-4 h-4 text-destructive fill-destructive" /> di Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
