import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Testimonials', href: '#' },
    { name: 'How It Works', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Blog', href: '/blog' },
  ];

  const isBlogPage = location.pathname.startsWith('/blog');

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200 h-[64px] md:h-[72px] flex items-center',
        isScrolled ? 'bg-forest/80 backdrop-blur-[8px] shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="max-w-site mx-auto px-6 md:px-10 w-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
            isScrolled ? "bg-lime text-bright" : "bg-forest text-white"
          )}>
            <span className="text-[18px] font-bold">T</span>
          </div>
          <span className={cn(
            "font-display font-extrabold text-2xl tracking-tight transition-colors",
            isScrolled ? "text-lime" : "text-charcoal"
          )}>TREANTLY</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'text-[15px] font-semibold transition-all duration-150 relative py-1',
                  isScrolled ? 'text-white hover:text-bright' : 'text-dark-text hover:text-bright',
                  isBlogPage && link.name === 'Blog' && 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-lime after:translate-y-[4px]'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <button className={cn(
            "font-bold text-[15px] px-5 py-2.5 rounded-default transition-all duration-150",
            isScrolled ? "bg-white text-forest hover:bg-green-tint" : "bg-bright text-white hover:bg-mid-green shadow-btn hover:-translate-y-[1px]"
          )}>
            Book a Call
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden transition-colors",
            isScrolled ? "text-white" : "text-forest"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-forest p-5 absolute top-full left-0 right-0 border-t border-white/10 shadow-xl animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-white font-semibold py-2 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-white text-forest font-bold py-3 rounded-default mt-2">Book a Call</button>
          </div>
        </div>
      )}
    </nav>
  );
}
