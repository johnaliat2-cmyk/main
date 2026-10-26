import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, BRAND_VALUES } from '../data/salonData';
import { SectionHeader } from '../components/SectionHeader';
import { Calendar, ArrowRight, ShieldCheck, Heart, Sparkles, MapPin } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-black text-white selection:bg-white selection:text-black pt-28 pb-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <SectionHeader
          title="TO SET"
          italicWord="APART"
          subtitle="Hagiazo (Greek: ἁγιάζω) — to set apart for a sacred, special purpose. That is the singular promise behind every appointment at our Harlow hair studio."
        />
      </div>

      {/* OUR STORY: Split section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white leading-tight">
              PROTECTIVE STYLING IS AN <span className="font-serif-accent font-normal italic text-neutral-300">ART FORM</span>
            </h3>
            <div className="w-14 h-[1.5px] bg-white my-4" />

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {BUSINESS_INFO.story}
            </p>

            <p className="text-neutral-400 text-sm leading-relaxed">
              Too often, Afro-Caribbean hair experiences in commercial salons involve long delays, rough handling, extreme tension, and hurried stylists juggling multiple clients. At Hagiazo, we deliberately built the antithesis: an unhurried, peaceful chair where one client receives our complete undivided focus.
            </p>

            <div className="pt-4 border-t border-neutral-900 flex flex-wrap items-center gap-x-6 gap-y-4 text-xs text-neutral-400">
              <div>
                <span className="text-white font-heading text-xl font-bold block tabular-nums">2026</span>
                <span>Established in Harlow</span>
              </div>
              <div className="hidden sm:block w-[1px] h-8 bg-neutral-800" />
              <div>
                <span className="text-white font-heading text-xl font-bold block">1-on-1</span>
                <span>Calm Chair Policy</span>
              </div>
              <div className="hidden sm:block w-[1px] h-8 bg-neutral-800" />
              <div>
                <span className="text-white font-heading text-xl font-bold block">100%</span>
                <span>Organic Edge Preservation</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=1200&q=80"
                  alt="Hagiazo Hair Philosophy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-serif-accent text-lg italic text-white [text-shadow:_0_2px_12px_rgba(0,0,0,0.6)]">
                    "Every head of hair deserves to be treated as something set apart."
                  </p>
                  <p className="text-[11px] font-heading tracking-widest text-neutral-400 uppercase mt-1 [text-shadow:_0_2px_12px_rgba(0,0,0,0.6)]">
                    HAGIAZO HAIR · ESSEX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE STAND FOR: 3 VALUES */}
      <section className="bg-neutral-950 py-20 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-white">
              WHAT WE <span className="font-serif-accent font-normal italic text-neutral-300">STAND FOR</span>
            </h3>
            <div className="w-12 h-[1px] bg-white mx-auto my-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BRAND_VALUES.map((val) => (
              <div
                key={val.number}
                className="pt-8 border-t border-neutral-800 flex flex-col justify-between"
              >
                <div>
                  <span className="font-heading text-xs tracking-widest text-neutral-400 block mb-3">
                    STAND FOR · {val.number}
                  </span>
                  <h4 className="font-heading text-2xl font-bold uppercase text-white tracking-wide mb-2">
                    {val.title}
                  </h4>
                  <p className="font-serif-accent text-neutral-400 text-sm italic mb-4">
                    {val.tagline}
                  </p>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET RUVIMBO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="pt-10 border-t border-neutral-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80"
                    alt="Ruvimbo - Lead Artisan at Hagiazo Hair"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-95 contrast-110"
                  />
                </div>
                <div className="mt-3 text-center">
                  <span className="font-heading text-xs uppercase tracking-widest text-neutral-300">
                    RUVIMBO · LEAD ARTISAN & FOUNDER
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <h3 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-white leading-tight">
                MEET <span className="font-serif-accent font-normal italic text-neutral-300">RUVIMBO</span>
              </h3>
              <div className="w-14 h-[1.5px] bg-white my-3" />

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {BUSINESS_INFO.stylistBio}
              </p>

              <blockquote className="border-l border-white pl-4 font-serif-accent italic text-neutral-300 text-base">
                "When you sit in my chair, you are not just getting your hair done. You are taking time for yourself to rest, be renewed, and wear a style that turns heads with zero tension on your temples."
              </blockquote>

              <div className="pt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-heading tracking-wider uppercase">
                <span className="text-neutral-300">
                  ✦ Pain-Free Knotless Specialist
                </span>
                <span className="text-neutral-300">
                  ✦ French Curl Artisan
                </span>
                <span className="text-neutral-300">
                  ✦ Wig Customisation Master
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STUDIO PHOTO STRIP */}
      <section className="mb-24 overflow-hidden bg-neutral-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <h4 className="font-heading text-2xl uppercase tracking-wider text-white">
            INSIDE THE STUDIO
          </h4>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 max-w-7xl mx-auto">
          <div className="aspect-[4/5] overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=700&q=80"
              alt="Hair styling detail"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
            />
          </div>
          <div className="aspect-[4/5] overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=700&q=80"
              alt="Precision parting grid"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
            />
          </div>
          <div className="aspect-[4/5] overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=700&q=80"
              alt="Relaxed salon chair"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
            />
          </div>
          <div className="aspect-[4/5] overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=700&q=80"
              alt="Custom wig creation"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
            />
          </div>
        </div>
      </section>

      {/* FINAL BOOK NOW CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="font-heading text-3xl sm:text-5xl font-bold uppercase text-white mb-4">
          YOUR CROWN DESERVES <span className="font-serif-accent font-normal italic text-neutral-300">EXCELLENCE</span>
        </h3>
        <p className="text-sm text-neutral-400 max-w-lg mx-auto mb-8 leading-relaxed">
          Book your private session with Ruvimbo at our Harlow studio. Let us show you what it feels like to truly be set apart.
        </p>
        <Link
          to="/booking"
          className="cta cta-primary text-xs"
        >
          <Calendar className="cta-icon w-4 h-4" />
          BOOK YOUR APPOINTMENT NOW
        </Link>
      </section>
    </div>
  );
};

