import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS, TestimonialItem, BUSINESS_INFO } from '../data/salonData';
import { SectionHeader } from '../components/SectionHeader';
import { Star, Quote, ChevronLeft, ChevronRight, Calendar, CheckCircle2 } from 'lucide-react';

export const TestimonialsPage: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const nextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setActiveSlideIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const featured = TESTIMONIALS[activeSlideIndex];

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <SectionHeader
          title="CLIENT"
          italicWord="STORIES"
          subtitle="Real experiences from clients who sit in our Harlow chair. We measure our success not just by the beauty of the braids, but by how healthy and respected your crown feels."
        />
      </div>

      {/* FEATURED SPOTLIGHT SLIDER */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="pt-8 border-t border-neutral-900 relative">
          <div className="absolute top-6 right-8 text-neutral-800">
            <Quote className="w-16 h-16 opacity-30" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-1 mb-6">
              {[...Array(featured.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-white text-white" />
              ))}
              <span className="text-xs uppercase tracking-widest text-neutral-400 ml-2">
                5.0 VERIFIED CLIENT
              </span>
            </div>

            <blockquote className="font-serif-accent text-xl sm:text-2xl md:text-3xl text-neutral-100 leading-snug italic mb-8">
              "{featured.quote}"
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-neutral-800 pt-6">
              <div>
                <h4 className="font-heading text-lg font-bold uppercase text-white tracking-wider">
                  {featured.name}
                </h4>
                <p className="text-xs text-neutral-400">
                  {featured.service} · {featured.location}
                </p>
                <p className="text-[11px] text-neutral-400 mt-0.5">{featured.date}</p>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-1">
                <button
                  onClick={prevSlide}
                  className="p-3 text-white flex items-center justify-center transition-colors hover:text-neutral-300 active:scale-95 focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/60 focus-visible:outline-offset-2"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="font-heading text-xs tracking-widest text-neutral-400 px-2 tabular-nums">
                  {activeSlideIndex + 1} / {TESTIMONIALS.length}
                </span>
                <button
                  onClick={nextSlide}
                  className="p-3 text-white flex items-center justify-center transition-colors hover:text-neutral-300 active:scale-95 focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/60 focus-visible:outline-offset-2"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COMPLETE REVIEW GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-neutral-900 pb-4 mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 className="font-heading text-sm uppercase tracking-widest text-neutral-400">
            ALL CLIENT TESTIMONIALS ({TESTIMONIALS.length})
          </h3>
          <span className="text-xs text-neutral-400">100% 5-Star Reputation</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="pt-6 border-t border-neutral-900 flex flex-col justify-between transition-colors"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-white">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-white text-white" />
                  ))}
                </div>
                <p className="font-serif-accent text-sm sm:text-base text-neutral-200 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="border-t border-neutral-900 pt-4 flex items-start justify-between gap-3 text-xs">
                <div className="min-w-0">
                  <p className="font-heading font-bold uppercase text-white tracking-wider break-words">
                    {item.name}
                  </p>
                  <p className="text-neutral-400 text-[11px] break-words">{item.service}</p>
                </div>
                <span className="text-neutral-400 text-[11px] uppercase tracking-wider text-right shrink-0">
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TRUST PILLARS STRIP */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="pt-8 border-t border-neutral-900 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <CheckCircle2 className="w-8 h-8 text-white mb-3" />
            <h4 className="font-heading text-sm uppercase tracking-wider font-bold text-white mb-1">
              Scalp Health Always
            </h4>
            <p className="text-xs text-neutral-400 max-w-xs">
              No pulling, no tight headaches. Braids should nurture growth, never compromise follicles.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle2 className="w-8 h-8 text-white mb-3" />
            <h4 className="font-heading text-sm uppercase tracking-wider font-bold text-white mb-1">
              Calm Unhurried Chair
            </h4>
            <p className="text-xs text-neutral-400 max-w-xs">
              One client at a time. No chaotic salon noise or rushed corners.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle2 className="w-8 h-8 text-white mb-3" />
            <h4 className="font-heading text-sm uppercase tracking-wider font-bold text-white mb-1">
              Flawless Grid Partings
            </h4>
            <p className="text-xs text-neutral-400 max-w-xs">
              Clean symmetry from crown to nape that looks fresh weeks after installation.
            </p>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <h3 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-white mb-4">
          EXPERIENCE THE <span className="font-serif-accent font-normal italic text-neutral-300">DIFFERENCE</span>
        </h3>
        <p className="text-sm text-neutral-400 max-w-md mx-auto mb-8">
          Join our cherished community of women in Harlow and beyond who trust their crown to Hagiazo.
        </p>
        <Link
          to="/booking"
          className="cta cta-primary text-xs"
        >
          <Calendar className="cta-icon w-4 h-4" />
          BOOK YOUR APPOINTMENT TODAY
        </Link>
      </div>
    </div>
  );
};
