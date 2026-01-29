import { Check, Leaf, Flame, Droplets, Heart, Users } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const features = [
  {
    icon: Check,
    title: '100% Gula Aren Murni',
    description: 'Tanpa campuran gula pasir atau bahan lainnya.',
  },
  {
    icon: Leaf,
    title: 'Tanpa Bahan Kimia',
    description: 'Bebas pengawet, pewarna, dan pemanis buatan.',
  },
  {
    icon: Flame,
    title: 'Dimasak Tradisional',
    description: 'Proses pemasakan dengan api kayu bakar alami.',
  },
  {
    icon: Droplets,
    title: 'Aroma & Rasa Khas',
    description: 'Manis karamel alami dengan aroma yang kuat.',
  },
  {
    icon: Heart,
    title: 'Lebih Sehat',
    description: 'Indeks glikemik rendah, kaya mineral alami.',
  },
  {
    icon: Users,
    title: 'Langsung dari Petani',
    description: 'Mendukung kesejahteraan petani lokal Indonesia.',
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-max">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-golden font-medium text-sm uppercase tracking-wider">
              Keunggulan Kami
            </span>
            <h2 className="heading-secondary mt-2 mb-4">
              Mengapa Memilih Gula Aren Kami?
            </h2>
            <p className="text-primary-foreground/80">
              Kami berkomitmen menghadirkan gula aren berkualitas tinggi dengan proses produksi yang menjaga keaslian dan tradisi.
            </p>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 hover:bg-primary-foreground/10 transition-colors h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-golden/20 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-primary-foreground/70 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
