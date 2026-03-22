import { motion } from 'framer-motion';
import { Leaf, Wallet, Truck, Users, Award, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: 'Eco-Product Manufacturing',
    description: 'Transforming traditional sal leaves into modern, biodegradable plates and packaging solutions.',
    icon: Leaf,
  },
  {
    title: 'Microfinance Support',
    description: 'Providing small loans and financial guidance to rural producers and tribal communities.',
    icon: Wallet,
  },
  {
    title: 'Supply Chain Management',
    description: 'Building a robust network from forest collection to global market distribution.',
    icon: Truck,
  },
  {
    title: 'Community Empowerment',
    description: 'Transforming daily wage workers into independent micro-entrepreneurs and business owners.',
    icon: Users,
  },
  {
    title: 'Quality Certification',
    description: 'Ensuring every product meets international standards for hygiene and environmental safety.',
    icon: Award,
  },
  {
    title: 'Sustainable Growth',
    description: 'Promoting eco-friendly alternatives to plastic while ensuring stable grassroots income.',
    icon: ShieldCheck,
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tighter mb-4">Our Services</h2>
          <p className="text-white/60 max-w-2xl">
            We combine traditional knowledge with modern systems to build a sustainable ecosystem for rural producers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-black hover:bg-white/5 transition-colors group cursor-pointer"
            >
              <service.icon className="w-10 h-10 text-green-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
