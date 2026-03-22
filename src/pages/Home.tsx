import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChoose from '../components/WhyChoose';
import Testimonials from '../components/Testimonials';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const products = [
  {
    title: 'Sal Leaf Plates',
    category: 'Eco-Dining',
    image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=1000&auto=format&fit=crop',
    description: 'Traditional round plates handcrafted from premium sal leaves. 100% natural and biodegradable.'
  },
  {
    title: 'Sal Leaf Dona (Bowl)',
    category: 'Eco-Packaging',
    image: 'https://images.unsplash.com/photo-1591871937573-74dbba515c4c?q=80&w=1000&auto=format&fit=crop',
    description: 'Sturdy, heat-resistant bowls made from sustainably sourced forest leaves.'
  },
  {
    title: 'Custom Eco-Sets',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1467453274507-643d38a0ca27?q=80&w=1000&auto=format&fit=crop',
    description: 'Complete eco-friendly dining sets for weddings, festivals, and corporate events.'
  }
];

export default function Home() {
  return (
    <div className="bg-white transition-colors">
      <Hero />
      
      <Services />

      {/* Featured Products */}
      <section className="py-24 bg-white transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter mb-4 text-black">Eco-Friendly Products</h2>
              <p className="text-black/60 max-w-xl">
                Explore our range of sustainable products crafted by rural and tribal communities.
              </p>
            </div>
            <button className="hidden md:flex items-center text-sm font-bold text-green-600 hover:text-green-700 transition-colors">
              View All Products <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black mb-6">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
                <span className="text-xs font-bold text-green-600 uppercase tracking-widest mb-2 block">
                  {product.category}
                </span>
                <h3 className="text-2xl font-bold mb-3 text-black group-hover:text-green-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-black/60 text-sm leading-relaxed">
                  {product.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhyChoose />

      <Testimonials />

      {/* CTA Banner */}
      <section className="py-24 bg-green-600 text-white overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(45deg, #fff 25%, transparent 25%, transparent 50%, #fff 50%, #fff 75%, transparent 75%, transparent)', backgroundSize: '100px 100px' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter mb-8">
            Join the Movement for <br /> Rural Empowerment
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Support sustainable livelihoods and eco-friendly products. Together, we can build a better future for our forests and communities.
          </p>
          <button className="bg-white text-green-600 px-10 py-5 text-sm font-bold rounded-none hover:bg-black hover:text-white transition-all">
            Become a Partner
          </button>
        </div>
      </section>
    </div>
  );
}

