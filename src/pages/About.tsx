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
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] bg-gray-200 rounded-[2rem] overflow-hidden shadow-2xl z-10">
                <img 
                  src="https://res.cloudinary.com/drh369n9m/image/upload/v1774207578/WhatsApp_Image_2026-02-14_at_12.55.52_AM_kstau4.jpg" 
                  alt="Sandip Hembram - Founder of HGE Salpata" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-3xl font-bold tracking-tight">Sandip Hembram</h3>
                    <p className="text-green-400 font-medium tracking-widest uppercase text-xs mt-2">Founder & Visionary</p>
                  </motion.div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-600/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-green-600/5 rounded-full blur-3xl" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                The Visionary Behind HGE
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter mb-8 text-black leading-tight">
                From a Rural Dream to a <span className="text-green-600">Global Movement</span>
              </h2>
              <div className="space-y-6 text-black/70 text-lg leading-relaxed">
                <p>
                  The story of HGE begins not in a corporate office, but in a small rural village, where opportunities were limited but dreams were not.
                </p>
                <p>
                  The founder, <strong>Sandip Hembram</strong>, grew up witnessing the daily struggles of his community — hardworking people depending on forests for survival, yet never getting fair value for their work.
                </p>
                <div className="relative py-8 px-10 bg-white border-l-4 border-green-600 my-8 shadow-xl rounded-r-2xl">
                  <span className="absolute top-4 left-4 text-6xl text-green-600/10 font-serif">"</span>
                  <p className="relative z-10 text-xl font-medium text-black italic leading-relaxed">
                    Why can’t we build something of our own that respects our roots and empowers our people?
                  </p>
                </div>
                <p>
                  Despite completing higher education in science and technology, Sandip chose to return to his roots. Watching educated youth remain jobless while rural families struggled for basic income led to the birth of HGE.
                </p>
                <p>
                  Today, HGE is a platform where villagers are partners and small producers are business owners. Sandip's vision is to make HGE a global leader in sustainable products while keeping the soul of rural India alive.
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
