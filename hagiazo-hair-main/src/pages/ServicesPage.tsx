import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, BUSINESS_INFO } from '../data/salonData';
import { PriceRow } from '../components/PriceRow';
import { SectionHeader } from '../components/SectionHeader';
import { Calendar, CheckCircle2, AlertCircle, Sparkles, ArrowRight } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black pt-28 pb-20 overflow-hidden">
      {/* 
        Full-Page Fixed Background Image for Services:
        - Image target: /images/services-bg.jpg (with dark placeholder fallback)
        - Fixed positioning with cover & center so it stays still while content scrolls
        - On mobile, fixed element ensures iOS Safari compatibility
        - Black overlay (bg-black/75) keeps the image subtle and ensures white text/prices are easily readable
      */}
      <div
        className="fixed inset-0 z-0 pointer-events-none bg-neutral-950 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/services-bg.jpg')",
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Mobile fixed image element (ensures iOS Safari renders fixed background correctly) */}
        <img
          src="/images/services-bg.jpg"
          alt="Hagiazo Hair Services Background"
          aria-hidden="true"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback dark placeholder if file is missing
            (e.target as HTMLElement).style.display = 'none';
          }}
          className="md:hidden fixed inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        {/* Black overlay on top (bg-black/75) */}
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[0.5px]" />
      </div>

      <div className="relative z-10">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
          <SectionHeader
            title="ARTISANAL"
            italicWord="SERVICES"
            subtitle="All prices listed in GBP. Standard pre-stretched braiding hair included with every braid service. We honour your time, your natural hair health, and your crown."
          />
        </div>

      {/* Services List */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {SERVICES.map((service) => {
          return (
            <article
              key={service.id}
              id={service.id}
              className="transition-all duration-300 py-2 pt-10 border-t border-neutral-900 relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
                {/* Left/Main Info */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="font-heading text-xs tracking-widest text-neutral-400">
                    STYLE {service.number}
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">
                    {service.name}
                  </h3>
                  <p className="font-serif-accent text-neutral-300 text-sm italic leading-relaxed">
                    "{service.tagline}"
                  </p>

                  <div className="pt-2">
                    <img
                      src={service.image}
                      alt={service.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-52 object-cover filter brightness-90"
                    />
                  </div>

                  <div className="text-xs text-neutral-400 space-y-1 pt-2">
                    <p className="flex items-center gap-1.5">
                      <span className="text-neutral-300 font-medium">Estimated Duration:</span>
                      <span className="tabular-nums">{service.durationEst}</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <span className="text-neutral-300 font-medium">Starting from:</span>
                      <span className="text-white font-bold tabular-nums">£{service.startingPrice}</span>
                    </p>
                  </div>

                  <div className="pt-4">
                    <Link
                      to={`/booking?service=${service.id}`}
                      className="cta cta-primary text-xs"
                    >
                      <Calendar className="cta-icon w-3.5 h-3.5" />
                      BOOK {service.name.toUpperCase()}
                    </Link>
                  </div>
                </div>

                {/* Right: Grouped Length Headings & Barbershop Price Rows */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="border-b border-neutral-800 pb-3 flex items-center justify-between">
                    <span className="font-heading text-xs uppercase tracking-widest text-neutral-400">
                      LENGTH & SIZING BREAKDOWN
                    </span>
                    <span className="text-xs text-neutral-300 uppercase tracking-wider">
                      GBP (£)
                    </span>
                  </div>

                  <div className="space-y-8">
                    {service.tiers.map((tier) => (
                      <div key={tier.lengthName} className="space-y-3">
                        <h4 className="font-heading text-sm uppercase tracking-wider text-neutral-200 font-semibold flex items-center gap-2">
                          <span className="w-2 h-2 bg-white inline-block" />
                          {tier.lengthName}
                        </h4>

                        <div className="space-y-1 pl-2 sm:pl-4 border-l border-neutral-800">
                          {tier.items.map((item) => (
                            <PriceRow
                              key={item.name}
                              name={item.name}
                              price={item.price}
                              highlight={item.name === 'Medium' || item.name.includes('Small')}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Note block */}
                  <div className="pt-4 border-t border-neutral-800 flex items-start gap-2.5 text-xs text-neutral-400">
                    <AlertCircle className="w-4 h-4 text-neutral-300 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-neutral-300 font-medium">Service Note:</strong>{' '}
                      {service.note}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* PREP & AFTERCARE SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="pt-10 border-t border-neutral-900">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
              PREPARATION & <span className="font-serif-accent italic font-normal text-neutral-300">AFTERCARE</span>
            </h3>
            <div className="w-12 h-[1px] bg-white mx-auto my-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Appointment Preparation */}
            <div className="space-y-4">
              <h4 className="font-heading text-base uppercase tracking-wider text-white font-semibold flex items-center gap-2 border-b border-neutral-800 pb-2">
                <CheckCircle2 className="w-4 h-4 text-white" />
                HOW TO PREPARE YOUR HAIR
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">✦</span>
                  <span><strong>Clean Scalp:</strong> Arrive with freshly washed, clean scalp free of heavy product residue.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">✦</span>
                  <span><strong>Detangled & Blow-Dried:</strong> Hair must be fully detangled from tips to roots and gently blow-dried straight.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">✦</span>
                  <span><strong>No Heavy Grease:</strong> Do not coat your hair with heavy butters, vaseline, or edge wax before the appointment as it creates slip.</span>
                </li>
              </ul>
            </div>

            {/* Post-Care & Maintenance */}
            <div className="space-y-4">
              <h4 className="font-heading text-base uppercase tracking-wider text-white font-semibold flex items-center gap-2 border-b border-neutral-800 pb-2">
                <Sparkles className="w-4 h-4 text-white" />
                EXTENDING YOUR BRAID LONGEVITY
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">✦</span>
                  <span><strong>Silk or Satin Protection:</strong> Always wear a high-grade satin bonnet or silk scarf every night without exception.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">✦</span>
                  <span><strong>Lightweight Scalp Oil:</strong> Apply lightweight rosemary, jojoba, or peppermint oil between partings 2–3 times a week.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">✦</span>
                  <span><strong>Mousse Refresh:</strong> For Boho curls or French ends, apply setting foam and scrunch lightly every few days to keep curls crisp.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-neutral-900 text-center">
            <Link
              to="/booking"
              className="cta cta-secondary text-xs"
            >
              READY TO BOOK? CHOOSE YOUR STYLE
              <ArrowRight className="cta-icon w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};
