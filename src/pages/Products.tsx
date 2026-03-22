import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Authentic Sal Leaf Plate (Round)',
    size: '12 inches',
    price: '₹5.00 / piece',
    // Replace with your actual product image URL
    image: 'https://res.cloudinary.com/drh369n9m/image/upload/v1774207807/WhatsApp_Image_2026-03-23_at_12.22.16_AM_fvm3sx.jpg',
    description: 'Traditional round plate handcrafted from premium sal leaves. 100% natural and biodegradable.'
  },
  {
    id: 2,
    name: 'Sal Leaf Dona (Bowl)',
    size: '6 inches',
    price: '₹2.00 / piece',
    image: 'https://res.cloudinary.com/drh369n9m/image/upload/v1774207807/WhatsApp_Image_2026-03-23_at_12.22.16_AM_fvm3sx.jpg',
    description: 'Deep-set bowls perfect for serving liquid items, snacks, and traditional desserts.'
  },
  {
    id: 3,
    name: 'Medium Dining Plate',
    size: '10 inches',
    price: '₹4.00 / piece',
    image: 'https://res.cloudinary.com/drh369n9m/image/upload/v1774207807/WhatsApp_Image_2026-03-23_at_12.22.16_AM_fvm3sx.jpg',
    description: 'Sturdy medium-sized plates ideal for breakfast, snacks, or smaller meal portions.'
  },
  {
    id: 4,
    name: 'Rectangular Eco-Tray',
    size: '14x10 inches',
    price: '₹8.00 / piece',
    image: 'https://res.cloudinary.com/drh369n9m/image/upload/v1774207807/WhatsApp_Image_2026-03-23_at_12.22.16_AM_fvm3sx.jpg',
    description: 'Large rectangular trays designed for catering, buffets, and corporate events.'
  },
  {
    id: 5,
    name: 'Premium Polished Plate',
    size: '12 inches',
    price: '₹10.00 / piece',
    image: 'https://res.cloudinary.com/drh369n9m/image/upload/v1774207807/WhatsApp_Image_2026-03-23_at_12.22.16_AM_fvm3sx.jpg',
    description: 'Extra-sturdy, heat-pressed plates with a smooth finish for premium dining experiences.'
  },
  {
    id: 6,
    name: 'Custom Event Pack',
    size: 'Mixed',
    price: 'Contact for Quote',
    image: 'https://res.cloudinary.com/drh369n9m/image/upload/v1774207807/WhatsApp_Image_2026-03-23_at_12.22.16_AM_fvm3sx.jpg',
    description: 'Tailored sets including plates, bowls, and cutlery for weddings and large gatherings.'
  }
];

export default function Products() {
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
            Our <span className="text-green-600">Eco-Products</span>
          </motion.h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Every product is handcrafted with care by rural artisans, ensuring a 100% biodegradable and chemical-free dining experience.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">
                    {product.price}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-black group-hover:text-green-600 transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-xs font-bold text-black/40 uppercase tracking-widest mt-2">
                      {product.size}
                    </span>
                  </div>
                  <p className="text-black/60 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <Link to="/bulk-pricing" className="flex items-center text-sm font-bold text-black hover:text-green-600 transition-colors pt-2">
                    Inquire Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Order CTA */}
      <section className="py-24 bg-green-50 border-t border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-8">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-bold tracking-tighter mb-6 text-black">Bulk Orders & Partnerships</h2>
          <p className="text-black/60 max-w-2xl mx-auto text-lg mb-10">
            Planning a large event or want to become a distributor? We offer special pricing and customized packaging for bulk orders.
          </p>
          <Link 
            to="/bulk-pricing"
            className="inline-block bg-black text-white px-10 py-5 text-sm font-bold rounded-none hover:bg-green-600 transition-all"
          >
            Contact for Bulk Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
