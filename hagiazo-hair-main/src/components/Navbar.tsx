import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'About Us', path: '/about' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' },
  ];

  const isServicesPage = location.pathname === '/services';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isServicesPage
          ? 'bg-black py-3'
          : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 sm:gap-8">
          {/* Zone 1: Brand Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2 text-white group whitespace-nowrap shrink-0 focus:outline-none"
          >
            <span className="font-heading text-xl sm:text-3xl tracking-widest font-bold">
              HAGIAZO
            </span>
            <span className="hidden xs:inline font-serif-accent text-base sm:text-xl text-neutral-300 group-hover:text-white transition-colors">
              Hair
            </span>
          </Link>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium uppercase tracking-widest">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`transition-colors whitespace-nowrap py-1 relative ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white animate-in fade-in duration-300" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <Link
              to="/booking"
              className="cta cta-primary cta-nav"
            >
              <Calendar className="cta-icon w-3.5 h-3.5" />
              BOOK NOW
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              to="/booking"
              className="cta cta-primary cta-nav !tracking-widest"
            >
              BOOK
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-white hover:text-neutral-300 transition-colors focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/60 focus-visible:outline-offset-2"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950 px-6 pt-5 pb-8 space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm uppercase tracking-wider py-2 border-b border-neutral-900 transition-colors flex items-center justify-between ${
                    isActive ? 'text-white font-bold' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                </Link>
              );
            })}
          </div>

          <div className="pt-2">
            <Link
              to="/booking"
              className="cta cta-primary w-full justify-center text-sm"
            >
              BOOK AN APPOINTMENT
            </Link>
          </div>

          <div className="pt-3 text-xs text-neutral-500 text-center">
            <p>{BUSINESS_INFO.address} · {BUSINESS_INFO.hours.weekdays}</p>
          </div>
        </div>
      )}
    </header>
  );
};
