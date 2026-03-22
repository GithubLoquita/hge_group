import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white transition-colors">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-green-600 uppercase bg-green-50 mb-6">
              Sustainability • Dignity • Empowerment
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-black leading-[0.9] mb-8">
              Transforming Nature into <span className="text-green-600">Sustainable Livelihoods</span>
            </h1>
            <p className="text-xl text-black/60 mb-10 leading-relaxed max-w-2xl">
              HGE Salpata Company transforms traditional forest resources into modern eco-friendly products. 
              We are building a scalable ecosystem where rural producers and global customers connect through innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products"
                className="bg-black text-white px-8 py-4 text-sm font-semibold rounded-none hover:bg-black/90 transition-all flex items-center justify-center group"
              >
                View Eco-Products
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services"
                className="border border-black/10 text-black px-8 py-4 text-sm font-semibold rounded-none hover:bg-black/5 transition-all flex items-center justify-center"
              >
                Our Impact
              </Link>
              <Link 
                to="/support"
                className="bg-green-600 text-white px-8 py-4 text-sm font-semibold rounded-none hover:bg-green-700 transition-all flex items-center justify-center"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="hidden lg:block absolute top-1/2 right-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2"
      />
    </section>
  );
}
