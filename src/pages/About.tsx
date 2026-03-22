import { motion } from 'framer-motion';
import React from 'react';

export default function About() {
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
            About <span className="text-green-600">HGE Salpata</span>
          </motion.h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            HGE Salpata Company is more than just a business — it is a movement rooted in sustainability, dignity, and rural empowerment.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold tracking-tighter mb-8 text-black">Our Mission</h2>
              <p className="text-black/60 text-lg leading-relaxed mb-6">
                To create a sustainable business model that empowers rural and tribal communities, promotes eco-friendly alternatives to plastic, and builds a strong supply chain from forest to market.
              </p>
              <div className="space-y-4">
                {[
                  'Empower rural and tribal communities',
                  'Promote eco-friendly alternatives to plastic',
                  'Generate stable income at the grassroots level',
                  'Build a strong supply chain from forest to market'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                    <span className="text-black/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video bg-gray-100 rounded-3xl border border-black/5 overflow-hidden"
            >
              <img 
                src="https://picsum.photos/seed/forest/800/600" 
                alt="Sal Forest" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                alt="Sandip Hembram - Founder of HGE Salpata" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="text-2xl font-bold">Sandip Hembram</h3>
                <p className="text-white/70">Founder & Visionary</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold tracking-tighter mb-8 text-black">Founder’s Story</h2>
              <div className="prose prose-lg text-black/70">
                <p className="mb-6">
                  The story of HGE begins not in a corporate office, but in a small rural village, where opportunities were limited but dreams were not.
                </p>
                <p className="mb-6">
                  The founder, <strong>Sandip Hembram</strong>, grew up witnessing the daily struggles of his community — hardworking people depending on forests for survival, yet never getting fair value for their work.
                </p>
                <div className="bg-white p-6 border-l-4 border-green-600 mb-6 italic shadow-sm">
                  "Why can’t we build something of our own?"
                </div>
                <p className="mb-6">
                  Despite completing higher education in science and technology, life was not easy. Watching educated youth remain jobless while rural families struggled for basic income created a deep question that led to the birth of HGE.
                </p>
                <p className="mb-6">
                  Sandip saw something others ignored: the abundance of sal leaves in forests, the traditional skill of making leaf plates, and the lack of proper market connection.
                </p>
                <p>
                  With almost zero capital, the journey started by talking to local villagers, building trust, and starting small-scale production. Today, HGE is a platform where villagers are partners and small producers are business owners.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold tracking-tighter mb-16 text-center text-black">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Sustainability', description: 'Rooted in environmental responsibility and eco-friendly products.' },
              { title: 'Dignity', description: 'Transforming daily wage workers into independent micro-entrepreneurs.' },
              { title: 'Innovation', description: 'Combining traditional knowledge with modern systems and technology.' },
              { title: 'Empowerment', description: 'Building a scalable ecosystem for rural and tribal communities.' }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-10 bg-white border border-black/5 hover:border-green-600 transition-all group"
              >
                <h3 className="text-xl font-bold mb-4 text-black">{value.title}</h3>
                <p className="text-black/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2 text-green-600">500+</div>
              <div className="text-white/60 text-sm uppercase tracking-widest">Rural Producers</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-green-600">50+</div>
              <div className="text-white/60 text-sm uppercase tracking-widest">Villages Impacted</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-green-600">1M+</div>
              <div className="text-white/60 text-sm uppercase tracking-widest">Plates Produced</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-green-600">100%</div>
              <div className="text-white/60 text-sm uppercase tracking-widest">Eco-Friendly</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
