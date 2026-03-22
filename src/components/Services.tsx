import { motion } from 'framer-motion';
import { Cpu, Code, Cloud, Shield, BarChart3 } from 'lucide-react';

const services = [
  {
    title: 'AI Solutions',
    description: 'Custom machine learning models and generative AI integration for business automation.',
    icon: Cpu,
  },
  {
    title: 'Software Development',
    description: 'High-performance web and mobile applications built with modern frameworks.',
    icon: Code,
  },
  {
    title: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure and automated deployment pipelines.',
    icon: Cloud,
  },
  {
    title: 'Cybersecurity',
    description: 'Enterprise-grade security audits and threat protection systems.',
    icon: Shield,
  },
  {
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with advanced visualization.',
    icon: BarChart3,
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tighter mb-4">Our Services</h2>
          <p className="text-white/60 max-w-2xl">
            Comprehensive technology solutions designed to scale with your business needs.
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
              <service.icon className="w-10 h-10 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
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
