import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  ArrowRight,
  Star,
  ChevronRight,
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES, TESTIMONIALS, BRAND_VALUES } from '../data/salonData';
import { PriceRow } from '../components/PriceRow';
import { HAIR_TOOLS } from '../components/HairToolIcons';
import heroImage from '../assets/images/hero_braiding_studio_1792522827721.jpg';

const MARQUEE_ITEMS = [
  'KNOTLESS BRAIDS',
  'BOHO BOB',
  'FULANI BRAIDS',
  'CORNROWS & STRAIGHT BACKS',
  'FRENCH CURLS',
  'KNOTLESS BOHO',
  'CUSTOM WIGS',
  'PROTECTIVE STYLING',
  'SCALP HEALTH FIRST',
  'HARLOW ESSEX',
];

export const HomePage: React.FC = () => {
  const [aboutSideOk, setAboutSideOk] = useState(true);
  return (
    <div className="bg-black text-white selection:bg-white selection:text-black">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Bright, vivid photography background with clear visibility */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Hagiazo Hair Studio - Afro-Caribbean Braids"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-100 filter brightness-90 contrast-105"
          />
          {/* Soft full-width gradient overlay to keep text readable (no boxes) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h1 className="font-heading text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-white leading-none [text-shadow:_0_4px_24px_rgba(0,0,0,0.95),_0_2px_8px_rgba(0,0,0,0.8)]">
            BE <span className="font-serif-accent font-normal italic text-neutral-200">SET APART</span>
          </h1>

          <div className="w-16 h-[2px] bg-white my-6 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />

          <div className="max-w-2xl mb-10">
            <p className="text-base sm:text-lg md:text-xl text-neutral-100 font-normal leading-relaxed text-balance [text-shadow:_0_2px_12px_rgba(0,0,0,0.6)]">
              A premium braiding studio in the heart of Harlow — knotless braids, Fulani braids, French curls and custom wigs, crafted with patience and precision.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 w-full sm:w-auto">
            <Link
              to="/booking"
              className="cta cta-primary w-full sm:w-auto justify-center text-sm"
            >
              <Calendar className="cta-icon w-4 h-4" />
              BOOK AN APPOINTMENT
            </Link>
            <Link
              to="/services"
              className="cta cta-secondary w-full sm:w-auto justify-center text-sm"
            >
              EXPLORE SERVICES
              <ArrowRight className="cta-icon w-4 h-4" />
            </Link>
          </div>

          {/* Scroll down indicator line */}
          <div className="mt-16 flex flex-col items-center gap-2 text-neutral-300">
            <span className="text-[10px] uppercase tracking-[0.3em]">SCROLL</span>
            <div className="w-[1px] h-10 bg-gradient-to-b from-white/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* 2. STATS ROW */}
      <section className="bg-neutral-950 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <p className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tabular-nums tracking-wide">
                8+
              </p>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mt-2">
                Years Master Experience
              </p>
            </div>
            <div className="p-4">
              <p className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tabular-nums tracking-wide">
                6
              </p>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mt-2">
                Signature Protective Styles
              </p>
            </div>
            <div className="p-4">
              <p className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tabular-nums tracking-wide">
                100%
              </p>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mt-2">
                Gentle Tension & Edge Care
              </p>
            </div>
            <div className="p-4">
              <p className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tabular-nums tracking-wide flex items-center justify-center gap-1">
                5.0 <Star className="w-5 h-5 fill-white text-white inline-block" />
              </p>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mt-2">
                Flawless Client Rating
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SCROLLING MARQUEE */}
      <section className="py-4 bg-black overflow-hidden select-none" aria-hidden="true">
        <div className="marquee animate-marquee whitespace-nowrap flex items-center text-xs font-heading tracking-[0.25em] text-neutral-400 uppercase">
          {[0, 1].map((loop) =>
            MARQUEE_ITEMS.map((label, i) => {
              const Tool = HAIR_TOOLS[i % HAIR_TOOLS.length];
              return (
                <React.Fragment key={`${loop}-${label}`}>
                  <span>{label}</span>
                  <Tool className="marquee-tool h-[22px] w-[22px] sm:h-[26px] sm:w-[26px] mx-6 sm:mx-8 shrink-0" />
                </React.Fragment>
              );
            })
          )}
        </div>
      </section>

      {/* 4. SPLIT SECTION: SERVICE BEYOND EXPECTATION */}
      <section className="relative py-24 overflow-hidden bg-black">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-8 items-center">
            {/* LEFT: editorial text */}
            <div className="order-1 lg:order-none lg:col-start-1">
              <h2 className="font-heading text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
                SERVICE <span className="font-serif-accent font-normal italic text-neutral-200">BEYOND</span> EXPECTATION
              </h2>
              <div className="w-14 h-[2px] bg-white my-6 shadow-[0_0_8px_rgba(255,255,255,0.7)]" />

              <div className="space-y-4 max-w-xl">
                <p className="text-neutral-200 text-sm sm:text-base leading-relaxed">
                  {BUSINESS_INFO.story}
                </p>

                <p className="text-neutral-200 text-sm leading-relaxed">
                  We believe true luxury is in the details — parted grids aligned to perfection, zero tension pulling your hairline, unhurried precision, and braiding hair prepared to maintain light, bouncy softness for weeks.
                </p>
              </div>
            </div>

            {/* RIGHT: image (no border / radius / frame), left edge blended into black */}
            <div className="order-2 lg:order-none lg:col-start-2 lg:self-stretch">
              <div className="relative w-full h-[360px] lg:h-full min-h-[360px] overflow-hidden bg-gradient-to-br from-neutral-950 via-black to-neutral-900">
                {aboutSideOk && (
                  <img
                    src="https://res.cloudinary.com/didqabx8q/image/upload/v1792531228/wmremove-transformed_1_vyvtnr.jpg"
                    alt=""
                    aria-hidden="true"
                    referrerPolicy="no-referrer"
                    onError={() => setAboutSideOk(false)}
                    className="animate-ken-burns-side w-full h-full object-cover filter grayscale contrast-[1.1]"
                  />
                )}
                {/* Left-edge blend into black (desktop) */}
                <div className="hidden lg:block absolute inset-y-0 left-0 w-[30%] bg-gradient-to-r from-black via-black/60 to-transparent" />
                {/* Top fade into black (mobile) */}
                <div className="lg:hidden absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHAT WE OFFER: 6 SERVICE CARDS */}
      <section className="py-20 lg:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
              WHAT WE <span className="font-serif-accent font-normal italic text-neutral-300">OFFER</span>
            </h2>
            <div className="w-14 h-[1.5px] bg-white mx-auto my-6" />
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Every style is executed with deliberate precision, premium pre-stretched braiding hair, and an uncompromising focus on scalp comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 left-4 font-heading text-xs tracking-widest text-white [text-shadow:_0_2px_12px_rgba(0,0,0,0.6)]">
                    {service.number}
                  </div>
                  <div className="absolute bottom-4 right-4 text-xs font-heading tracking-wider text-white [text-shadow:_0_2px_12px_rgba(0,0,0,0.6)]">
                    FROM £{service.startingPrice}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-xl font-bold tracking-wide text-white group-hover:text-neutral-200 transition-colors uppercase mb-2">
                      {service.name}
                    </h3>
                    <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                      {service.tagline}
                    </p>
                    <p className="text-[11px] text-neutral-300 border-t border-neutral-900 pt-3">
                      {service.note}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-neutral-900 flex items-center justify-between">
                    <Link
                      to={`/booking?service=${service.id}`}
                      className="cta cta-primary text-xs"
                    >
                      BOOK THIS STYLE
                      <ChevronRight className="cta-icon w-3.5 h-3.5" />
                    </Link>
                    <Link
                      to="/services"
                      className="text-[11px] text-neutral-400 hover:text-white uppercase tracking-wider"
                    >
                      VIEW SIZES
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/services"
              className="cta cta-secondary text-xs"
            >
              VIEW FULL MENU & COMPLETE PRICE LIST
              <ArrowRight className="cta-icon w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. DISCOVER OUR WORKS: 2-IMAGE STRIP FROM REFERENCE DESIGN */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Two Photography Cards (just like the reference image) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="relative group overflow-hidden aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
                  alt="Artisanal braiding technique"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[11px] font-heading tracking-widest text-neutral-300 uppercase [text-shadow:_0_2px_12px_rgba(0,0,0,0.6)]">
                    ARTISANAL PRECISION
                  </p>
                  <p className="text-sm font-semibold text-white [text-shadow:_0_2px_12px_rgba(0,0,0,0.6)]">Clean Fulani Partings</p>
                </div>
              </div>

              <div className="relative group overflow-hidden aspect-[3/4] sm:translate-y-6">
                <img
                  src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80"
                  alt="Stylist work close-up"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[11px] font-heading tracking-widest text-neutral-300 uppercase [text-shadow:_0_2px_12px_rgba(0,0,0,0.6)]">
                    ROMANTIC FINISH
                  </p>
                  <p className="text-sm font-semibold text-white [text-shadow:_0_2px_12px_rgba(0,0,0,0.6)]">Cascading French Curls</p>
                </div>
              </div>
            </div>

            {/* Right Column: Heading & Navigation (barbershop reference style) */}
            <div className="lg:col-span-5 pl-0 lg:pl-10 mt-8 lg:mt-0">
              <h2 className="font-heading text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
                DISCOVER <br />
                <span className="font-serif-accent font-normal italic text-neutral-300">OUR</span> WORKS
              </h2>
              <div className="w-14 h-[1.5px] bg-white my-6" />

              <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                Explore our curated portfolio of real clients — from intricate tribal Fulani patterns to waist-length knotless braids and bouncy French curls. Every installation reflects hours of dedicated craftsmanship.
              </p>

              <div className="flex items-center gap-4">
                <Link
                  to="/our-work"
                  className="cta cta-secondary text-xs"
                >
                  EXPLORE FULL GALLERY
                  <ArrowRight className="cta-icon w-4 h-4" />
                </Link>
                <a
                  href={BUSINESS_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
                >
                  @HAGIAZOHAIR
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BARBERSHOP STYLE: OUR PRICES TEASER */}
      <section className="py-20 lg:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Prices Column */}
            <div className="lg:col-span-6">
              <h2 className="font-heading text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
                OUR <span className="font-serif-accent font-normal italic text-neutral-300">PRICES</span>
              </h2>
              <div className="w-14 h-[1.5px] bg-white my-6" />
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-8">
                Our services encompass meticulous parting, premium pre-stretched hair, edge protection and soothing finishing care.
              </p>

              <div className="space-y-1 py-4">
                <PriceRow name="Knotless Braids (Mid-Back / Med)" price={100} highlight />
                <PriceRow name="Boho Bob Braids (Shoulder / Med)" price={110} />
                <PriceRow name="French Curls (Bob / Med)" price={120} />
                <PriceRow name="Fulani Braids (Med)" price={120} />
                <PriceRow name="Straight Backs (8–10 braids)" price={95} />
                <PriceRow name="Closure Custom Wig Unit" price={75} />
              </div>

              <div className="mt-8">
                <Link
                  to="/services"
                  className="cta cta-secondary text-xs"
                >
                  VIEW ALL PRICES & LENGTHS
                  <ArrowRight className="cta-icon w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Studio Atmosphere Image */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&q=80"
                    alt="Hagiazo Hair Studio interior and service"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-85 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="font-serif-accent text-lg text-white italic [text-shadow:_0_2px_12px_rgba(0,0,0,0.6)]">
                      "To set apart for a special purpose."
                    </p>
                    <p className="font-heading text-xs uppercase tracking-widest text-neutral-300 mt-1 [text-shadow:_0_2px_12px_rgba(0,0,0,0.6)]">
                      HAGIAZO HAIR STUDIO · HARLOW
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHAT WE STAND FOR: 3 VALUES */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
              WHAT WE <span className="font-serif-accent font-normal italic text-neutral-300">STAND FOR</span>
            </h2>
            <div className="w-14 h-[1.5px] bg-white mx-auto my-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BRAND_VALUES.map((val) => (
              <div
                key={val.number}
                className="pt-8 border-t border-neutral-900 flex flex-col justify-between"
              >
                <div>
                  <span className="font-heading text-xs tracking-widest text-neutral-400 block mb-4">
                    PILLAR {val.number}
                  </span>
                  <h3 className="font-heading text-2xl font-bold uppercase text-white tracking-wide mb-2">
                    {val.title}
                  </h3>
                  <p className="font-serif-accent text-sm text-neutral-400 italic mb-4">
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

      {/* 9. TESTIMONIAL PREVIEW */}
      <section className="py-20 lg:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
              WHAT <span className="font-serif-accent font-normal italic text-neutral-300">CLIENTS SAY</span>
            </h2>
            <div className="w-14 h-[1.5px] bg-white mx-auto my-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="pt-8 border-t border-neutral-900 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-6 text-white">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-white text-white" />
                    ))}
                  </div>
                  <p className="font-serif-accent text-neutral-200 text-base leading-relaxed italic mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="border-t border-neutral-900 pt-4 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-heading text-sm font-bold uppercase text-white tracking-wider break-words">
                      {item.name}
                    </p>
                    <p className="text-xs text-neutral-400 break-words">{item.service}</p>
                  </div>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-widest text-right shrink-0">
                    {item.location}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/testimonials"
              className="cta cta-secondary text-xs"
            >
              READ ALL CLIENT STORIES
              <ArrowRight className="cta-icon w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FINAL CALL TO ACTION */}
      <section className="relative py-24 lg:py-32 overflow-hidden text-center">
        {/* Background Image requested by user */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/didqabx8q/image/upload/v1792523873/Gemini_Generated_Image_947uuv947uuv947u_bdsokc.jpg"
            alt="Ready for your transformation - Hagiazo Hair"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
          />
          {/* Soft full-width gradient overlay to keep text readable (no boxes) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-0">
            <h2 className="font-heading text-4xl sm:text-6xl font-bold uppercase tracking-tight text-white mb-6 [text-shadow:_0_4px_20px_rgba(0,0,0,0.95)]">
              READY FOR YOUR <span className="font-serif-accent font-normal italic text-neutral-200">TRANSFORMATION?</span>
            </h2>
            <div className="w-16 h-[2px] bg-white mx-auto mb-6 shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
            <p className="max-w-xl mx-auto text-sm sm:text-base text-neutral-100 mb-10 leading-relaxed [text-shadow:_0_2px_12px_rgba(0,0,0,0.6)]">
              Appointments fill quickly. Reserve your date and time with our seamless online booking, or message us with any questions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
              <Link
                to="/booking"
                className="cta cta-primary w-full sm:w-auto justify-center text-xs"
              >
                <Calendar className="cta-icon w-4 h-4" />
                BOOK AN APPOINTMENT NOW
              </Link>
              <a
                href={BUSINESS_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="cta cta-secondary w-full sm:w-auto justify-center text-xs"
              >
                MESSAGE ON WHATSAPP
                <ArrowRight className="cta-icon w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
