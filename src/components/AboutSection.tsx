import { Leaf, Heart, Users } from 'lucide-react';
import gulaArenBatok from '@/assets/gula-aren-batok.jpg';

const AboutSection = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Alami & Murni',
      description: 'Tanpa bahan kimia, pengawet, atau pemanis buatan. Hanya kebaikan alam.',
    },
    {
      icon: Heart,
      title: 'Tradisi Turun Temurun',
      description: 'Diproduksi dengan metode tradisional yang diwariskan dari generasi ke generasi.',
    },
    {
      icon: Users,
      title: 'Mendukung Petani Lokal',
      description: 'Setiap pembelian membantu kesejahteraan petani aren di pedesaan Indonesia.',
    },
  ];

  return (
    <section id="tentang" className="section-padding bg-secondary">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-strong">
              <img
                src={gulaArenBatok}
                alt="Gula Aren Batok Tradisional"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Tentang Kami
            </span>
            <h2 className="heading-secondary text-foreground mt-2 mb-6">
              Warisan Manis dari Alam Indonesia
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Di lereng pegunungan hijau Indonesia, petani kami dengan penuh dedikasi 
                memanjat pohon aren setiap pagi untuk mengumpulkan nira segar. Tradisi 
                yang telah berlangsung selama ratusan tahun ini kami jaga dengan penuh 
                kehormatan.
              </p>
              <p>
                Setiap tetes nira dimasak dengan api kayu bakar tradisional, diaduk 
                dengan sabar hingga menghasilkan gula aren dengan rasa dan aroma khas 
                yang tidak bisa ditiru oleh proses industri modern.
              </p>
              <p className="font-medium text-foreground">
                Tidak ada gula pasir. Tidak ada bahan pengawet. Hanya kemurnian alam 
                dalam setiap butir gula aren kami.
              </p>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              {values.map((value, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-3">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
