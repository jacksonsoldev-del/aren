import process1 from '@/assets/process-1.jpg';
import process2 from '@/assets/process-2.jpg';
import process3 from '@/assets/process-3.jpg';
import process4 from '@/assets/process-4.jpg';

const steps = [
  {
    number: '01',
    title: 'Penyadapan Nira',
    description: 'Petani memanjat pohon aren di pagi buta untuk menyadap nira segar dari mayang aren.',
    image: process1,
  },
  {
    number: '02',
    title: 'Perebusan Tradisional',
    description: 'Nira dimasak dalam wajan besar dengan api kayu bakar selama berjam-jam.',
    image: process2,
  },
  {
    number: '03',
    title: 'Pengadukan Manual',
    description: 'Gula diaduk terus-menerus hingga mengental sempurna dengan konsistensi yang pas.',
    image: process3,
  },
  {
    number: '04',
    title: 'Pencetakan Alami',
    description: 'Gula panas dituang ke cetakan batok kelapa atau dikeringkan menjadi gula semut.',
    image: process4,
  },
];

const ProcessSection = () => {
  return (
    <section id="proses" className="section-padding bg-secondary">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Proses Produksi
          </span>
          <h2 className="heading-secondary text-foreground mt-2 mb-4">
            Dari Pohon Aren ke Rumah Anda
          </h2>
          <p className="text-muted-foreground">
            Setiap tahap produksi dilakukan dengan tangan oleh petani berpengalaman, menjaga tradisi dan kualitas yang telah diwariskan turun-temurun.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-golden font-serif text-3xl font-bold">
                  {step.number}
                </span>
                <h3 className="font-serif text-lg font-semibold text-card mt-1 mb-2">
                  {step.title}
                </h3>
                <p className="text-card/80 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
