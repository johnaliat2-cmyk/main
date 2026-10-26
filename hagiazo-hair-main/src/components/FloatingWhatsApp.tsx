import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="WhatsApp quick chat"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-3"
    >
      <div
        className={`text-white text-xs px-3.5 py-1.5 font-medium tracking-wide [text-shadow:_0_2px_8px_rgba(0,0,0,0.9)] transition-all duration-200 pointer-events-none hidden sm:block ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        Chat on WhatsApp
      </div>

      <a
        href={BUSINESS_INFO.socials.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="p-2 text-white hover:text-neutral-300 flex items-center justify-center transition-colors duration-300 group focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/60 focus-visible:outline-offset-2"
        aria-label="Contact Hagiazo Hair on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 transition-transform group-hover:translate-x-1" />
      </a>
    </aside>
  );
};
