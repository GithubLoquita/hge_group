import { motion } from 'framer-motion';
import { Building2, Rocket, Globe, ChevronDown, Check, Loader2 } from 'lucide-react';
import React, { useState } from 'react';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const solutions = [
  {
    title: 'Rural Workers',
    icon: Rocket,
    description: 'Transforming daily wage workers into independent micro-entrepreneurs.',
  },
  {
    title: 'Small Producers',
    icon: Globe,
    description: 'Providing access to capital for machines and raw materials.',
  },
  {
    title: 'Distributors',
    icon: Building2,
    description: 'Building a scalable ecosystem from forest to global markets.',
  },
];

const industries = ['Salpata Production', 'Eco-Packaging', 'Rural Commerce', 'Microfinance', 'Sustainable Manufacturing', 'Logistics'];

const plans = [
  {
    name: 'Production Support',
    price: 'Micro-Loan',
    features: ['Small loans for startup', 'Machine financing', 'Raw material support', 'Business guidance'],
  },
  {
    name: 'Enterprise Partner',
    price: 'Scalable',
    features: ['Bulk supply chain', 'Quality certification', 'Market connection', 'Flexible repayment'],
    highlight: true,
  },
];

export default function Business() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    requirement: ''
  });

  const services = [
    { title: 'Small Loans', content: 'We provide small loans to help rural workers start their own salpata production units.' },
    { title: 'Machine Financing', content: 'Financial support specifically for purchasing leaf-plate making machines and tools.' },
    { title: 'Flexible Repayment', content: 'Repayment models designed to match the seasonal nature of forest-based livelihoods.' },
    { title: 'Business Training', content: 'Guidance on production quality, financial management, and market trends.' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const path = 'inquiries';
      await addDoc(collection(db, path), {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'new'
      });
      setSubmitStatus('success');
      setFormData({ fullName: '', email: '', companyName: '', requirement: '' });
    } catch (error) {
      setSubmitStatus('error');
      handleFirestoreError(error, OperationType.CREATE, 'inquiries');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="pt-16 bg-white transition-colors">
      {/* Header Banner */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-bold tracking-tighter mb-6"
          >
            HGE <span className="text-green-600">Finance Support</span>
          </motion.h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Empowering rural producers through microfinance, training, and a strong supply chain from forest to market.
          </p>
        </div>
      </section>

      {/* Solutions Categories */}
      <section className="py-24 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-10 border border-black/5 hover:border-green-600 transition-colors group"
              >
                <item.icon className="w-12 h-12 text-green-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-black">{item.title}</h3>
                <p className="text-black/60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Accordion */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold tracking-tighter mb-12 text-center text-black">Microfinance Support</h2>
          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-black/5">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left font-bold text-black"
                >
                  {service.title}
                  <ChevronDown className={cn("w-5 h-5 transition-transform", activeAccordion === index && "rotate-180")} />
                </button>
                {activeAccordion === index && (
                  <div className="px-6 pb-6 text-black/60 text-sm leading-relaxed">
                    {service.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold tracking-tighter mb-12 text-center text-black">Our Ecosystem</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry) => (
              <div key={industry} className="p-6 border border-black/5 text-center font-bold text-black hover:bg-green-600 hover:text-white transition-all cursor-default">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Plans */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold tracking-tighter mb-16 text-center">Support Programs</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <div 
                key={plan.name} 
                className={cn(
                  "p-10 border border-white/10 relative overflow-hidden",
                  plan.highlight && "bg-white text-black border-none"
                )}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-0 bg-green-600 text-white text-[10px] font-bold px-4 py-1 rotate-45 translate-x-4 translate-y-2 uppercase tracking-widest">
                    Impact
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-8">{plan.price}</div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm opacity-80">
                      <Check className="w-4 h-4 text-green-600" /> {f}
                    </li>
                  ))}
                </ul>
                <button className={cn(
                  "w-full py-4 text-sm font-bold transition-all",
                  plan.highlight ? "bg-black text-white hover:bg-green-600" : "bg-white text-black hover:bg-green-600 hover:text-white"
                )}>
                  Apply for Support
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold tracking-tighter mb-16 text-center">The HGE Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {['Trust Building', 'Training', 'Production', 'Quality Check', 'Market Access'].map((step, i) => (
              <div key={step} className="text-center relative">
                <div className="text-6xl font-bold text-black/5 mb-4">{i + 1}</div>
                <h4 className="text-lg font-bold mb-2">{step}</h4>
                {i < 4 && <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-black/10"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Business CTA */}
      <section className="py-24 bg-gray-50 transition-colors">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 border border-black/5 shadow-2xl shadow-black/5">
            <h2 className="text-3xl font-bold mb-8 text-black">Partner with HGE</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/40">Full Name</label>
                  <input 
                    type="text" 
                    name="fullName"
                    required
                    value={formData.fullName}
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
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-black/40">Village/Organization</label>
                <input 
                  type="text" 
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full border-b border-black/10 py-2 focus:border-green-600 outline-none transition-colors bg-transparent text-black" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-black/40">Requirement/Story</label>
                <textarea 
                  name="requirement"
                  required
                  rows={4} 
                  value={formData.requirement}
                  onChange={handleChange}
                  className="w-full border border-black/10 p-4 focus:border-green-600 outline-none transition-colors resize-none bg-transparent text-black"
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
                    Sending...
                  </>
                ) : 'Submit Inquiry'}
              </button>
              
              {submitStatus === 'success' && (
                <p className="text-green-600 text-sm font-bold text-center">Inquiry sent successfully! We will contact you soon.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-sm font-bold text-center">Failed to send inquiry. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
