import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Send, Loader2 } from 'lucide-react';
import React, { useState } from 'react';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const jobs = [
  {
    id: 1,
    title: 'Production Supervisor',
    location: 'Raipur, Bankura',
    type: 'Full-time',
    description: 'Oversee the manufacturing process of sal leaf plates, ensuring quality standards and efficiency.',
    requirements: ['Experience in manufacturing', 'Leadership skills', 'Knowledge of sal leaf products']
  },
  {
    id: 2,
    title: 'Field Officer (Rural Empowerment)',
    location: 'Bankura District',
    type: 'Full-time',
    description: 'Work directly with rural and tribal communities to build trust, provide training, and manage leaf collection.',
    requirements: ['Strong communication skills', 'Willingness to travel', 'Passion for rural development']
  },
  {
    id: 3,
    title: 'Sales & Marketing Executive',
    location: 'Remote / West Bengal',
    type: 'Full-time',
    description: 'Expand our market reach by connecting with eco-friendly distributors, event planners, and corporate clients.',
    requirements: ['Sales experience', 'Digital marketing knowledge', 'Commitment to sustainability']
  },
  {
    id: 4,
    title: 'Quality Control Specialist',
    location: 'Raipur, Bankura',
    type: 'Part-time',
    description: 'Inspect finished products to ensure they meet our premium hygiene and durability standards.',
    requirements: ['Attention to detail', 'Understanding of eco-standards', 'Reliability']
  }
];

export default function Careers() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const path = 'job_applications';
      await addDoc(collection(db, path), {
        fullName: formData.name,
        email: formData.email,
        position: formData.position,
        message: formData.message,
        createdAt: serverTimestamp(),
        status: 'new'
      });
      setSubmitStatus('success');
      setFormData({ name: '', email: '', position: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      handleFirestoreError(error, OperationType.CREATE, 'job_applications');
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
            Join the <span className="text-green-600">Movement</span>
          </motion.h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Build a career that makes a real impact. We are looking for passionate individuals to help us empower rural communities and promote sustainability.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Mission-Driven', desc: 'Work for a company that prioritizes people and the planet over pure profit.' },
              { title: 'Rural Impact', desc: 'Directly contribute to the livelihoods of thousands of rural and tribal families.' },
              { title: 'Growth & Learning', desc: 'Be part of a fast-growing eco-startup where your ideas and leadership matter.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">{item.title}</h3>
                <p className="text-black/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold tracking-tighter mb-16 text-center text-black">Open Positions</h2>
          <div className="grid gap-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 border border-black/5 hover:border-green-600 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-black group-hover:text-green-600 transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-black/40 font-bold uppercase tracking-widest">
                      <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> {job.type}</span>
                    </div>
                    <p className="text-black/60 mt-4 max-w-2xl">{job.description}</p>
                  </div>
                  <button 
                    onClick={() => {
                      setFormData(prev => ({ ...prev, position: job.title }));
                      document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center text-sm font-bold text-black hover:text-green-600 transition-colors"
                  >
                    Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-form" className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 border border-black/5 shadow-2xl shadow-black/5">
            <h2 className="text-3xl font-bold mb-8 text-black">Submit Your Application</h2>
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
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-black/40">Position</label>
                <select 
                  name="position"
                  required
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full border-b border-black/10 py-2 focus:border-green-600 outline-none transition-colors bg-transparent text-black"
                >
                  <option value="">Select a position</option>
                  {jobs.map(job => (
                    <option key={job.id} value={job.title}>{job.title}</option>
                  ))}
                  <option value="General Inquiry">General Inquiry / Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-black/40">Why do you want to join HGE?</label>
                <textarea 
                  name="message"
                  required
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-black/10 p-4 focus:border-green-600 outline-none transition-colors resize-none bg-transparent text-black"
                  placeholder="Tell us about your passion for sustainability and rural empowerment..."
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
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Application
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <p className="text-green-600 text-sm font-bold text-center">Application submitted successfully! We'll be in touch.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-sm font-bold text-center">Failed to submit application. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
