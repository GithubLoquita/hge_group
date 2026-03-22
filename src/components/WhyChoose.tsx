import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const features = [
  {
    title: 'Sustainability First',
    description: '100% biodegradable products that protect our environment.',
  },
  {
    title: 'Rural Empowerment',
    description: 'Creating stable livelihoods for tribal and rural communities.',
  },
  {
    title: 'Premium Quality',
    description: 'Traditional craftsmanship meets modern quality standards.',
  },
  {
    title: 'Innovative Ecosystem',
    description: 'Connecting forest resources to global markets through technology.',
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter mb-8 text-black">
              Why Choose <br /> <span className="text-green-600">HGE Salpata</span>
            </h2>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-black">{feature.title}</h3>
                    <p className="text-black/60">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-black p-12 flex items-center justify-center overflow-hidden">
              <motion.div
                animate={{ 
                  rotate: 360,
                  borderRadius: ["20%", "40%", "20%"]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-full h-full border-2 border-white/20 flex items-center justify-center"
              >
                <div className="text-white text-9xl font-bold opacity-10">HGE</div>
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-white text-4xl font-bold tracking-widest uppercase">Sustainability</div>
              </div>
            </div>
            {/* Grid Overlay */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-600/10 z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
