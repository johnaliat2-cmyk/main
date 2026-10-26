import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white border-t border-neutral-900 pt-16 pb-24 sm:pb-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-heading text-2xl tracking-widest font-bold">HAGIAZO</span>
              <span className="font-serif-accent text-lg ml-2 text-neutral-400">Hair</span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {BUSINESS_INFO.shortDescription}
            </p>
            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-neutral-400">Tagline</span>
              <p className="font-serif-accent text-neutral-300 text-base">"{BUSINESS_INFO.tagline}"</p>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href={BUSINESS_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 flex items-center justify-center text-neutral-400 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 flex items-center justify-center text-neutral-400 hover:text-white transition-all"
                aria-label="TikTok"
              >
                {/* Custom TikTok Icon */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-.88-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.83 4.47 6.27 6.27 0 0 0 1.86-4.48V8.75a8.17 8.17 0 0 0 4.9 1.62v-3.68z" />
                </svg>
              </a>
              <a
                href={BUSINESS_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 flex items-center justify-center text-neutral-400 hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-heading text-sm tracking-widest text-white uppercase mb-5 border-b border-neutral-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider text-neutral-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="hover:text-white transition-colors">
                  Our Work Gallery
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-white transition-colors">
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us & Ruvimbo
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Location & Contact
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-white hover:underline transition-colors font-semibold">
                  Book an Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Hours */}
          <div>
            <h4 className="font-heading text-sm tracking-widest text-white uppercase mb-5 border-b border-neutral-800 pb-2">
              Studio Hours
            </h4>
            <div className="space-y-3 text-xs text-neutral-400">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-neutral-300 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Monday – Saturday</p>
                  <p className="tabular-nums">9:00am – 7:00pm</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-neutral-300 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Sunday</p>
                  <p className="tabular-nums">10:00am – 5:00pm</p>
                </div>
              </div>
              <div className="pt-2 text-[11px] text-neutral-400">
                *By appointment only to maintain our calm, unhurried chair experience.
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading text-sm tracking-widest text-white uppercase mb-5 border-b border-neutral-800 pb-2">
              Studio Contact
            </h4>
            <ul className="space-y-3.5 text-xs text-neutral-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-neutral-300 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-neutral-300 shrink-0 mt-0.5" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors tabular-nums">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-neutral-300 shrink-0 mt-0.5" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-neutral-900">
              <Link
                to="/booking"
                className="cta cta-primary w-full justify-center text-xs"
              >
                RESERVE YOUR CHAIR
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 text-center sm:text-left">
          <p>© 2026 Hagiazo Hair. All rights reserved. Harlow, Essex.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-6">
            <span className="max-w-[16rem] sm:max-w-none">Specialising in Afro-Caribbean Braids & Protective Styling</span>
            <button
              onClick={scrollToTop}
              className="shrink-0 p-2.5 text-neutral-400 hover:text-white transition-colors focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/60 focus-visible:outline-offset-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
