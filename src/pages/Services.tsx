import { motion } from 'framer-motion';
import { Leaf, Wallet, Truck, Users, Award, ShieldCheck } from 'lucide-react';
import React from 'react';

const services = [
  {
    title: 'Eco-Product Manufacturing',
    icon: Leaf,
    description: 'Transforming traditional sal leaves into modern, biodegradable plates and packaging solutions.',
    features: ['Sal Leaf Plates', 'Biodegradable Bowls', 'Custom Eco-Packaging', 'Quality Assurance']
  },
  {
    title: 'Microfinance Support',
    icon: Wallet,
    description: 'Providing small loans and financial guidance to rural producers and tribal communities.',
    features: ['Startup Loans', 'Machine Financing', 'Business Training', 'Financial Literacy']
  },
  {
    title: 'Supply Chain Management',
    icon: Truck,
    description: 'Building a robust network from forest collection to global market distribution.',
    features: ['Forest-to-Market', 'Logistics Support', 'Fair Value Pricing', 'Scalable Ecosystem']
  },
  {
    title: 'Community Empowerment',
    icon: Users,
    description: 'Transforming daily wage workers into independent micro-entrepreneurs and business owners.',
    features: ['Skill Development', 'Dignified Livelihoods', 'Tribal Support', 'Grassroots Growth']
  },
  {
    title: 'Quality Certification',
    icon: Award,
    description: 'Ensuring every product meets international standards for hygiene and environmental safety.',
    features: ['Hygiene Standards', 'Eco-Certification', 'Batch Testing', 'Premium Quality']
  },
  {
    title: 'Sustainable Growth',
    icon: ShieldCheck,
    description: 'Promoting eco-friendly alternatives to plastic while ensuring stable grassroots income.',
    features: ['Plastic-Free Future', 'Stable Income', 'Resource Management', 'Long-term Impact']
  }
];

export default function Services() {
  return (
    <div className="pt-16 bg-white transition-colors min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-bold tracking-tighter mb-6"
          >
            Our <span className="text-green-600">Impact</span>
          </motion.h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            We combine traditional knowledge with modern systems to build a sustainable ecosystem for rural producers.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-10 border border-black/5 hover:border-green-600 transition-all group bg-white"
              >
                <div className="w-14 h-14 bg-green-600/10 flex items-center justify-center rounded-xl mb-8 group-hover:bg-green-600 transition-colors">
                  <service.icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">{service.title}</h3>
                <p className="text-black/60 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-black/80">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold tracking-tighter mb-8 text-black">Ready to make an impact?</h2>
          <p className="text-black/60 max-w-2xl mx-auto mb-12 text-lg">
            Join our movement toward sustainability and rural empowerment. Whether you are a producer, distributor, or customer, you can be part of the HGE story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-10 py-4 font-bold hover:bg-green-600 hover:text-white transition-all">
              Become a Partner
            </button>
            <button className="border border-black/10 text-black px-10 py-4 font-bold hover:bg-black hover:text-white transition-all">
              View Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
