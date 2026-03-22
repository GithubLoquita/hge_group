import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import React, { useState } from 'react';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const path = 'inquiries';
      await addDoc(collection(db, path), {
        fullName: formData.name,
        email: formData.email,
        requirement: `Subject: ${formData.subject}\nMessage: ${formData.message}`,
        createdAt: serverTimestamp(),
        status: 'new',
        type: 'contact_form'
      });
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
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
    <div className="pt-16 bg-white transition-colors min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-bold tracking-tighter mb-6"
          >
            Get in <span className="text-green-600">Touch</span>
          </motion.h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Have a question about our products or want to partner with us? We're here to support your journey towards sustainability.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-black">Contact Information</h2>
                <p className="text-black/60 text-lg">
                  Reach out to us through any of these channels. Our team typically responds within 24 business hours.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-green-600/10 flex items-center justify-center rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1">Email Us</h4>
                    <p className="text-black/60">contact@hgesalpata.com</p>
                    <p className="text-black/60 text-sm">support@hgesalpata.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-green-600/10 flex items-center justify-center rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1">Call Us</h4>
                    <p className="text-black/60">+91 000 000 0000</p>
                    <p className="text-black/60 text-sm">Mon - Sat, 9am - 6pm IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-green-600/10 flex items-center justify-center rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1">Visit Us</h4>
                    <p className="text-black/60">Rural Empowerment Hub, Innovation Block</p>
                    <p className="text-black/60 text-sm">Jharkhand, India</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 bg-gray-100 rounded-2xl border border-black/5 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-black/20 font-bold uppercase tracking-widest">
                  Jharkhand Hub Location
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 border border-black/5 shadow-2xl shadow-black/5"
            >
              <h3 className="text-2xl font-bold mb-8 text-black">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/40">Your Name</label>
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
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/40">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border-b border-black/10 py-2 focus:border-green-600 outline-none transition-colors bg-transparent text-black" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/40">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={6} 
                    value={formData.message}
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
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-600 text-sm font-bold text-center">Message sent successfully! We'll get back to you soon.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-sm font-bold text-center">Failed to send message. Please try again.</p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
