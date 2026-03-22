import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-bold tracking-tighter">
              HGE<span className="text-green-600">.</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              Empowering rural communities through sustainable products and microfinance. 
              Join us in building a greener, more equitable future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/50 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-white/50 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-white/50 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Impact</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link to="/products" className="hover:text-white transition-colors">Eco-Products</Link></li>
              <li><Link to="/bulk-pricing" className="hover:text-white transition-colors">Bulk Pricing</Link></li>
              <li><Link to="/support" className="hover:text-white transition-colors">Support & Loans</Link></li>
              <li><Link to="/business" className="hover:text-white transition-colors">Microfinance</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Community</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Mission</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-green-500" />
                <span>hembramgroupofficial@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-green-500" />
                <span>+91 9832382762</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-green-500" />
                <span>Raipur, Bankura, West Bengal, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>© 2026 HGE Salpata Company. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
