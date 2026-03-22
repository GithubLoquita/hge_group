import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sumitra Devi',
    role: 'Rural Producer, Jharkhand',
    quote: 'HGE Salpata has given me a stable income and the dignity to support my family. Their microfinance support was a life-changer.',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Eco-Distributor, Delhi',
    quote: 'The quality of HGE Salpata plates is unmatched. Our customers love the sustainability story behind every product.',
  },
  {
    name: 'Anjali Soren',
    role: 'Community Leader, Tribal Block',
    quote: 'HGE is not just a company; it is a movement. They have empowered our village by turning forest resources into a thriving business.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tighter mb-16 text-center text-black">Voices of Impact</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 bg-white border border-black/5 shadow-sm relative"
            >
              <Quote className="w-10 h-10 text-green-600/20 absolute top-6 right-6" />
              <p className="text-lg italic text-black/80 mb-8 relative z-10">
                "{t.quote}"
              </p>
              <div>
                <h4 className="font-bold text-black">{t.name}</h4>
                <p className="text-sm text-black/40">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

