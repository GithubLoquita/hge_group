import { motion } from 'framer-motion';
import { 
  Coins, 
  Settings, 
  Leaf, 
  Lightbulb, 
  TrendingUp, 
  Truck, 
  CheckCircle, 
  Globe, 
  Calendar,
  Send,
  Loader2
} from 'lucide-react';
import React, { useState } from 'react';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Support() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    supportType: 'Production Support',
    specificNeed: 'Micro-Loan',
    message: ''
  });

  const supportTypes = ['Production Support', 'Enterprise Partner'];
  const specificNeeds = {
    'Production Support': [
      'Micro-Loan',
      'Small loans for startup',
      'Machine financing',
      'Raw material support',
      'Business guidance'
    ],
    'Enterprise Partner': [
      'Scalable Solutions',
      'Bulk supply chain',
      'Quality certification',
      'Market connection',
      'Flexible repayment'
    ]
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const path = 'support_applications';
      await addDoc(collection(db, path), {
        fullName: formData.name,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        supportType: formData.supportType,
        specificNeed: formData.specificNeed,
        message: formData.message,
        createdAt: serverTimestamp(),
        status: 'pending'
      });
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        supportType: 'Production Support',
        specificNeed: 'Micro-Loan',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      handleFirestoreError(error, OperationType.CREATE, 'support_applications');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      // Reset specific need if support type changes
      if (name === 'supportType') {
        newData.specificNeed = specificNeeds[value as keyof typeof specificNeeds][0];
      }
      return newData;
    });
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
            Empowerment <span className="text-green-600">& Support</span>
          </motion.h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            We provide the tools, capital, and guidance needed to transform rural artisans into successful entrepreneurs.
          </p>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Production Support */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-600 text-white rounded-2xl flex items-center justify-center">
                  <Settings className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-black">Production Support</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: 'Micro-Loan', icon: Coins, desc: 'Small capital injections for daily operations.' },
                  { title: 'Startup Loans', icon: Lightbulb, desc: 'Funding to kickstart new production units.' },
                  { title: 'Machine Financing', icon: Settings, iconColor: 'text-blue-600', desc: 'Access to modern heat-pressing machines.' },
                  { title: 'Raw Material', icon: Leaf, desc: 'Consistent supply of high-quality sal leaves.' },
                  { title: 'Business Guidance', icon: TrendingUp, desc: 'Mentorship on quality and efficiency.' }
                ].map((item, i) => (
                  <div key={i} className="p-6 border border-black/5 rounded-2xl hover:border-green-600 transition-colors group">
                    <item.icon className="w-8 h-8 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-black mb-2">{item.title}</h4>
                    <p className="text-black/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Enterprise Partner */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-black">Enterprise Partner</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: 'Scalable Model', icon: TrendingUp, desc: 'Grow your production with our proven systems.' },
                  { title: 'Bulk Supply Chain', icon: Truck, desc: 'Access to large-scale distribution networks.' },
                  { title: 'Quality Certs', icon: CheckCircle, desc: 'Get HGE certified for premium markets.' },
                  { title: 'Market Connection', icon: Globe, desc: 'Direct access to national and global buyers.' },
                  { title: 'Flexible Repayment', icon: Calendar, desc: 'Loan terms that match your production cycles.' }
                ].map((item, i) => (
                  <div key={i} className="p-6 border border-black/5 rounded-2xl hover:border-black transition-colors group">
                    <item.icon className="w-8 h-8 text-black mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-black mb-2">{item.title}</h4>
                    <p className="text-black/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 border border-black/5 shadow-2xl rounded-[2rem]"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tighter text-black mb-4">Apply for Support</h2>
              <p className="text-black/50">Tell us about your project and how we can help you grow.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/40">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-b border-black/10 py-3 focus:border-green-600 outline-none transition-colors bg-transparent text-black" 
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
                    className="w-full border-b border-black/10 py-3 focus:border-green-600 outline-none transition-colors bg-transparent text-black" 
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/40">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-b border-black/10 py-3 focus:border-green-600 outline-none transition-colors bg-transparent text-black" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/40">Location (Village/City)</label>
                  <input 
                    type="text" 
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full border-b border-black/10 py-3 focus:border-green-600 outline-none transition-colors bg-transparent text-black" 
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/40">Support Category</label>
                  <select 
                    name="supportType"
                    value={formData.supportType}
                    onChange={handleChange}
                    className="w-full border-b border-black/10 py-3 focus:border-green-600 outline-none transition-colors bg-transparent text-black"
                  >
                    {supportTypes.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/40">Specific Need</label>
                  <select 
                    name="specificNeed"
                    value={formData.specificNeed}
                    onChange={handleChange}
                    className="w-full border-b border-black/10 py-3 focus:border-green-600 outline-none transition-colors bg-transparent text-black"
                  >
                    {specificNeeds[formData.supportType as keyof typeof specificNeeds].map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-black/40">Tell us more about your business/idea</label>
                <textarea 
                  name="message"
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-black/10 p-4 focus:border-green-600 outline-none transition-colors resize-none bg-transparent text-black rounded-xl"
                  placeholder="Describe your current production or your startup plan..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-5 rounded-xl font-bold hover:bg-green-600 transition-all flex items-center justify-center gap-2 shadow-xl shadow-black/10"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting Application...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Apply for Support
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-green-50 border border-green-100 rounded-xl text-green-700 text-center font-bold"
                >
                  Application submitted successfully! Our team will review it and get back to you.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-sm font-bold text-center">Something went wrong. Please try again later.</p>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
