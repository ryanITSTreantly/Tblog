import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Youtube, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-forest text-white py-20">
      <div className="max-w-site mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Logo & Mission */}
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2 mb-8 group">
              <div className="w-8 h-8 bg-lime rounded-full flex items-center justify-center text-forest">
                <span className="text-[18px] font-bold">T</span>
              </div>
              <span className="text-lime font-display font-extrabold text-2xl tracking-tight">TREANTLY</span>
            </Link>
            <p className="text-white/80 text-[16px] leading-relaxed mb-8 max-w-[400px]">
              Connecting businesses with the top 1% of global virtual assistant talent. Scale smarter, not harder.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-forest transition-all cursor-pointer">
                <Instagram size={18} />
              </div>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-forest transition-all cursor-pointer">
                <Facebook size={18} />
              </div>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-forest transition-all cursor-pointer">
                <Linkedin size={18} />
              </div>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-forest transition-all cursor-pointer">
                <Youtube size={18} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold text-[18px] mb-8">Quick Links</h4>
            <ul className="space-y-4 text-white/70 text-[16px]">
              <li><Link to="#" className="hover:text-lime transition-colors">Testimonials</Link></li>
              <li><Link to="#" className="hover:text-lime transition-colors">How It Works</Link></li>
              <li><Link to="#" className="hover:text-lime transition-colors">Pricing</Link></li>
              <li><Link to="/blog" className="hover:text-lime transition-colors">Blog</Link></li>
              <li><Link to="#" className="hover:text-lime transition-colors">FAQ</Link></li>
              <li><Link to="#" className="hover:text-lime transition-colors">Book a Call</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-white font-bold text-[18px] mb-8">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-white/70 hover:text-lime transition-colors">
                <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <a href="mailto:info@treantly.com">info@treantly.com</a>
              </li>
              <li className="flex items-center gap-4 text-white/70 hover:text-lime transition-colors">
                <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <a href="tel:+16049213664">+1 604-921-3664</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[14px] text-white/40">
          <p>© 2026 Treantly. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
