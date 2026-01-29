import { Star, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    id: 1,
    name: 'Ibu Sari',
    role: 'Ibu Rumah Tangga',
    location: 'Jakarta',
    content: 'Gula arennya harum banget dan rasanya beda sama yang biasa saya beli di pasar. Anak-anak suka banget buat es cendol!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Pak Budi',
    role: 'Pemilik Coffee Shop',
    location: 'Bandung',
    content: 'Sudah setahun pakai gula aren ini untuk menu kopi di cafe saya. Pelanggan banyak yang tanya pakai gula apa karena rasanya spesial.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Mbak Dewi',
    role: 'Reseller Makanan',
    location: 'Surabaya',
    content: 'Kualitasnya konsisten dan pengiriman selalu tepat waktu. Pelanggan saya puas, otomatis repeat order terus!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Chef Ahmad',
    role: 'Chef Pastry',
    location: 'Yogyakarta',
    content: 'Untuk baking dan dessert, gula semut aren ini memberikan rasa karamel alami yang tidak bisa digantikan gula biasa.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimoni" className="section-padding">
      <div className="container-max">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Testimoni
            </span>
            <h2 className="heading-secondary text-foreground mt-2 mb-4">
              Apa Kata Pelanggan Kami?
            </h2>
            <p className="text-muted-foreground">
              Kepuasan pelanggan adalah prioritas utama kami. Berikut pengalaman mereka dengan produk kami.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 0.1}>
              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-shadow h-full">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-accent/30 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-golden text-golden" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/90 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
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

export default TestimonialsSection;
