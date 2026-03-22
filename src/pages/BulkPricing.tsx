import { motion } from 'framer-motion';
import { Send, Loader2, Package, Truck, ShieldCheck, Phone, Mail } from 'lucide-react';
import React, { useState } from 'react';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function BulkPricing() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    productType: 'Round Plate (12")',
    quantity: '',
    message: ''
  });

  const productOptions = [
    'Round Plate (12")',
    'Sal Leaf Dona (Bowl)',
    'Medium Dining Plate (10")',
    'Rectangular Eco-Tray',
    'Premium Polished Plate',
    'Custom Event Pack',
    'Mixed Bulk Order'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const path = 'bulk_inquiries';
      await addDoc(collection(db, path), {
        fullName: formData.name,
        email: formData.email,
        phone: formData.phone,
        organization: formData.organization,
        productType: formData.productType,
        quantity: formData.quantity,
        message: formData.message,
        createdAt: serverTimestamp(),
        status: 'new',
        type: 'bulk_pricing'
      });
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        productType: 'Round Plate (12")',
        quantity: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      handleFirestoreError(error, OperationType.CREATE, 'bulk_inquiries');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
            Bulk <span className="text-green-600">Pricing</span>
          </motion.h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Partner with HGE Salpata for large-scale sustainable solutions. We offer competitive rates for wholesalers, event planners, and corporate clients.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                title: 'Volume Discounts', 
                desc: 'Significant price reductions for orders exceeding 5,000 units.',
                icon: Package
              },
              { 
                title: 'Reliable Logistics', 
                desc: 'Efficient supply chain ensuring timely delivery across India.',
                icon: Truck
              },
              { 
                title: 'Quality Assurance', 
                desc: 'Every batch undergoes strict hygiene and durability testing.',
                icon: ShieldCheck
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 border border-black/5 rounded-2xl"
              >
                <div className="w-16 h-16 bg-green-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">{item.title}</h3>
                <p className="text-black/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-4xl font-bold tracking-tighter mb-6 text-black">Wholesale Inquiries</h2>
                <p className="text-black/60 text-lg leading-relaxed">
                  Whether you are looking to stock our products in your retail store or need thousands of plates for a major event, our team is ready to provide a tailored quote.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-green-600/10 flex items-center justify-center rounded-xl shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black">Direct Sales Line</h4>
                    <p className="text-black/60">+91 9832382762</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-green-600/10 flex items-center justify-center rounded-xl shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black">Bulk Orders Email</h4>
                    <p className="text-black/60">hembramgroupofficial@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-green-50 rounded-3xl border border-green-100">
                <h4 className="font-bold text-green-800 mb-2">Why choose HGE for Bulk?</h4>
                <p className="text-green-700/80 text-sm">
                  By ordering in bulk, you are directly supporting the livelihoods of over 500 rural producers. Our scalable manufacturing process allows us to handle orders of up to 100,000 units per month.
                </p>
              </div>
            </motion.div>

            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 border border-black/5 shadow-2xl shadow-black/5"
            >
              <h3 className="text-2xl font-bold mb-8 text-black">Request a Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-black/40">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-b border-black/10 py-2 focus:border-green-600 outline-none transition-colors bg-transparent text-black" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-black/40">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-b border-black/10 py-2 focus:border-green-600 outline-none transition-colors bg-transparent text-black" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-black/40">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-b border-black/10 py-2 focus:border-green-600 outline-none transition-colors bg-transparent text-black" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-black/40">Organization</label>
                    <input 
                      type="text" 
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full border-b border-black/10 py-2 focus:border-green-600 outline-none transition-colors bg-transparent text-black" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-black/40">Product Interest</label>
                    <select 
                      name="productType"
                      value={formData.productType}
                      onChange={handleChange}
                      className="w-full border-b border-black/10 py-2 focus:border-green-600 outline-none transition-colors bg-transparent text-black"
                    >
                      {productOptions.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-black/40">Estimated Quantity</label>
                    <input 
                      type="number" 
                      name="quantity"
                      placeholder="e.g. 5000"
                      required
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full border-b border-black/10 py-2 focus:border-green-600 outline-none transition-colors bg-transparent text-black" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/40">Additional Requirements</label>
                  <textarea 
                    name="message"
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-black/10 p-4 focus:border-green-600 outline-none transition-colors resize-none bg-transparent text-black"
                    placeholder="Tell us about your specific needs or event dates..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white py-4 font-bold hover:bg-green-600 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Get Bulk Quote
                    </>
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <p className="text-green-600 text-sm font-bold text-center">Quote request sent! Our sales team will contact you within 24 hours.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-sm font-bold text-center">Failed to send request. Please try again.</p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
