import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GALLERY_ITEMS, GalleryItem, BUSINESS_INFO } from '../data/salonData';
import { Instagram, X, Calendar, ArrowRight, Eye, Star } from 'lucide-react';

const FILTER_CATEGORIES = [
  'All',
  'Boho Bob',
  'Fulani & Cornrows',
  'French Curls',
  'Knotless',
  'Wigs',
] as const;

export const OurWorkPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);
  const [bgImageError, setBgImageError] = useState(false);
  const [instaBgError, setInstaBgError] = useState(false);
  // Incrementing key replays the Ken Burns zoom each time this page mounts
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    setAnimKey((k) => k + 1);
  }, []);

  const filteredItems =
    selectedFilter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  // Dynamic count helper for badges
  const getCategoryCount = (category: string) => {
    if (category === 'All') return GALLERY_ITEMS.length;
    return GALLERY_ITEMS.filter((item) => item.category === category).length;
  };

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black">
      {/* 
        PREMIUM HERO / HEADER SECTION
        - Desktop: ~60vh (min 420px), Mobile: ~45vh
        - Background: /images/work-bg-new.jpg (only image used) with an automatic
          one-shot Ken Burns zoom-in (1 -> 1.12, 14s ease-out, forwards)
        - Desktop overlay: bg-black/65 + left-to-right gradient (from-black via-black/80 to-transparent)
        - Mobile overlay: image shown only in top 45% (center top), faded into pure black below (bg-black/55)
        - Fallback: plain dark gradient if the image is missing (no other image shown)
      */}
      <section className="relative min-h-[45vh] lg:min-h-[60vh] flex items-center justify-center overflow-hidden pt-28 pb-14 text-center bg-black">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-black pointer-events-none">
          {!bgImageError && (
            <>
              {/* Desktop background image */}
              <img
                key={`desktop-${animKey}`}
                src="/images/work-bg-new.jpg"
                alt=""
                aria-hidden="true"
                referrerPolicy="no-referrer"
                onError={() => setBgImageError(true)}
                className="hidden sm:block w-full h-full object-cover animate-ken-burns-once filter grayscale contrast-[1.1]"
                style={{ objectPosition: 'right center', transformOrigin: 'right center' }}
              />
              {/* Mobile background image: top 45%, faded into pure black below */}
              <img
                key={`mobile-${animKey}`}
                src="/images/work-bg-new.jpg"
                alt=""
                aria-hidden="true"
                referrerPolicy="no-referrer"
                onError={() => setBgImageError(true)}
                className="sm:hidden w-full h-full object-cover animate-ken-burns-once filter grayscale contrast-[1.1]"
                style={{ objectPosition: 'center top', transformOrigin: 'right center' }}
              />
            </>
          )}

          {/* Mobile: fade the top-45% image into pure black (overall bg-black/55) */}
          <div className="sm:hidden absolute inset-0 bg-black/55" />
          <div className="sm:hidden absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-transparent via-transparent to-black" />
          <div className="sm:hidden absolute inset-x-0 bottom-0 h-[55%] bg-black" />

          {/* Desktop: overall overlay bg-black/65 + left-to-right gradient */}
          <div className="hidden sm:block absolute inset-0 bg-black/65" />
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        {/* Content Container (Centered, Staggered Fade-Up Motion) */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* 1. Heading: OUR Works */}
          <h1
            className="font-heading text-4xl sm:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-white leading-none [text-shadow:_0_4px_24px_rgba(0,0,0,0.95)] animate-fade-up opacity-0"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            OUR{' '}
            <span className="font-serif-accent font-normal italic lowercase bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-400 bg-clip-text text-transparent">
              Works
            </span>
          </h1>

          {/* 4. Short Thin White Divider Line */}
          <div
            className="w-12 h-[1px] bg-white/70 mx-auto my-5 shadow-[0_0_8px_rgba(255,255,255,0.6)] animate-fade-up opacity-0"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          />

          {/* 5. Description */}
          <p
            className="max-w-[600px] mx-auto text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-8 text-balance animate-fade-up opacity-0"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            Explore authentic client results crafted in our Harlow chair — precision parting, featherlight knotless braids and romantic French curls.
          </p>

          {/* 6. Stats Row (3 items, separated by thin vertical lines) */}
          <div
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-4 sm:gap-x-10 text-center mb-10 pb-2 animate-fade-up opacity-0"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            <div className="text-center">
              <span className="font-heading text-xl sm:text-2xl font-bold text-white block tabular-nums">
                500+
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-neutral-400 font-medium">
                Happy Clients
              </span>
            </div>

            <div className="hidden sm:block w-[1px] h-7 bg-white/20 shrink-0" />

            <div className="text-center">
              <span className="font-heading text-xl sm:text-2xl font-bold text-white block tabular-nums">
                6
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-neutral-400 font-medium">
                Signature Styles
              </span>
            </div>

            <div className="hidden sm:block w-[1px] h-7 bg-white/20 shrink-0" />

            <div className="text-center">
              <span className="font-heading text-xl sm:text-2xl font-bold text-white flex items-center justify-center gap-1.5 tabular-nums">
                5.0 <Star className="w-4 h-4 fill-white text-white inline-block mb-0.5" />
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-neutral-400 font-medium">
                Average Rating
              </span>
            </div>
          </div>

          {/* 7. Filter Bar Below Stats */}
          <div
            className="w-full max-w-5xl mx-auto animate-fade-up opacity-0"
            style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
          >
            <div
              role="tablist"
              aria-label="Filter gallery by style"
              className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar snap-x snap-mandatory gap-6 sm:gap-8 py-2 px-2"
            >
              {FILTER_CATEGORIES.map((category) => {
                const isActive = selectedFilter === category;
                const count = getCategoryCount(category);

                return (
                  <button
                    key={category}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedFilter(category)}
                    className={`group relative snap-start shrink-0 font-heading text-xs sm:text-sm uppercase tracking-widest min-h-[44px] py-3 flex items-center gap-2 cursor-pointer transition-colors ${
                      isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    <span className="relative">
                      <span>{category}</span>
                      <span
                        className={`ml-2 text-[10px] tabular-nums ${
                          isActive ? 'text-white font-semibold' : 'text-neutral-400'
                        }`}
                      >
                        {count}
                      </span>
                      {/* Hover underline (thin white/40) */}
                      <span
                        className={`pointer-events-none absolute left-0 -bottom-2 h-[1px] w-full origin-left bg-white/40 transition-transform duration-300 ease-out ${
                          isActive ? 'scale-x-0' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                      {/* Active underline (2px white) */}
                      <span
                        className={`pointer-events-none absolute left-0 -bottom-2 h-[2px] w-full origin-left bg-white transition-transform duration-300 ease-out ${
                          isActive ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY GRID (Smooth Fade & Scale Animation upon Filtering) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          key={selectedFilter}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 animate-in fade-in zoom-in-95"
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative cursor-pointer overflow-hidden transition-all duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Hover overlay hint */}
                <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity [text-shadow:_0_2px_12px_rgba(0,0,0,0.6)]">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Bottom caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span className="text-[10px] font-heading uppercase tracking-[0.2em] text-neutral-400 block mb-1 [text-shadow:_0_2px_12px_rgba(0,0,0,0.6)]">
                    {item.category} {item.length ? `· ${item.length}` : ''}
                  </span>
                  <h3 className="font-heading text-lg font-bold uppercase text-white tracking-wide [text-shadow:_0_2px_12px_rgba(0,0,0,0.6)]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1 line-clamp-2 [text-shadow:_0_2px_12px_rgba(0,0,0,0.6)]">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM BANNER: Full-Width 
          - Height: ~380px on desktop, ~320px on mobile, vertically centered
          - Background: /images/instagram-banner.jpg (cover, right center)
          - Overlays: desktop bg-black/65 + left-to-right gradient (from-black via-black/70 to-transparent)
          - Mobile: stacked centered with uniform bg-black/80 overlay
          - Content: small eyebrow, heading "Follow the Chair", description, solid white button
      */}
      <section className="relative w-full my-20 overflow-hidden min-h-[320px] md:min-h-[380px] flex items-center bg-neutral-950">
        {/* Background Image / Plain Dark Gradient Fallback */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {!instaBgError ? (
            <img
              src="/images/instagram-banner.jpg"
              alt=""
              aria-hidden="true"
              referrerPolicy="no-referrer"
              onError={() => setInstaBgError(true)}
              className="w-full h-full object-cover object-[right_center] filter brightness-90 contrast-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-black via-neutral-950 to-neutral-900" />
          )}

          {/* Mobile Overlay: uniform bg-black/80 */}
          <div className="sm:hidden absolute inset-0 bg-black/80" />

          {/* Desktop Overlays: bg-black/65 + left-to-right gradient from-black via-black/70 to-transparent */}
          <div className="hidden sm:block absolute inset-0 bg-black/65" />
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
        </div>

        {/* Content Container: Centered on mobile, Left-aligned on desktop */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="max-w-xl text-center sm:text-left mx-auto sm:mx-0">
            {/* Heading: Follow the Chair */}
            <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4 [text-shadow:_0_2px_10px_rgba(0,0,0,0.9)]">
              FOLLOW <span className="font-serif-accent font-normal italic lowercase text-neutral-200">the Chair</span>
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-8 max-w-md mx-auto sm:mx-0 [text-shadow:_0_1px_4px_rgba(0,0,0,0.9)]">
              Catch fresh installations, slow-motion parting reveals, and hair care wisdom on our official feed.
            </p>

            {/* Instagram CTA */}
            <div>
              <a
                href={BUSINESS_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="cta cta-primary text-xs"
              >
                <Instagram className="cta-icon w-4 h-4" />
                FOLLOW @HAGIAZOHAIR
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {activeLightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setActiveLightboxItem(null)}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-4 right-4 z-10 text-neutral-400 hover:text-white p-3 transition-colors focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/60 focus-visible:outline-offset-2"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden mb-6">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-neutral-800 pt-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-neutral-400 block mb-1">
                  {activeLightboxItem.category} {activeLightboxItem.length ? `· ${activeLightboxItem.length}` : ''}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
                  {activeLightboxItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-md">
                  {activeLightboxItem.caption}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <Link
                  to="/booking"
                  className="cta cta-primary text-xs"
                >
                  <Calendar className="cta-icon w-3.5 h-3.5" />
                  BOOK THIS LOOK
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
