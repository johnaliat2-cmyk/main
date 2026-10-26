import React, { useState } from 'react';
import { FAQS, FAQItem, BUSINESS_INFO } from '../data/salonData';
import { SectionHeader } from '../components/SectionHeader';
import { ChevronDown, MessageCircle, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FaqsPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <SectionHeader
          title="FREQUENT"
          italicWord="INQUIRIES"
          subtitle="Everything you need to know about preparing for your appointment, braiding hair inclusions, our deposit policy, and aftercare routines."
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Accordion list */}
        <div className="divide-y divide-neutral-900">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="transition-colors duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-heading text-xs text-neutral-400 mt-1 tabular-nums">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <h3 className="font-heading text-base sm:text-lg font-bold uppercase text-white tracking-wide">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-white' : 'text-neutral-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 border-t border-neutral-900 animate-in fade-in duration-200">
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed pl-4 sm:pl-7">
                      {faq.answer}
                    </p>
                    <div className="mt-4 pl-4 sm:pl-7">
                      <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-heading">
                        CATEGORY: {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Support Callout */}
        <div className="mt-16 pt-10 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-white">
              <MessageCircle className="w-5 h-5" />
              <h4 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-wider">
                STILL HAVE QUESTIONS?
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
              Need advice on curl choices, custom colours, or wig bundle lengths? Chat directly with Ruvimbo on WhatsApp for rapid, personalised answers.
            </p>
          </div>

          <a
            href={BUSINESS_INFO.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="cta cta-primary shrink-0 text-xs"
          >
            <MessageCircle className="cta-icon w-4 h-4" />
            MESSAGE US ON WHATSAPP
          </a>
        </div>

        {/* Bottom Booking Prompt */}
        <div className="mt-12 text-center">
          <p className="text-neutral-400 text-xs uppercase tracking-widest mb-3">All clear?</p>
          <Link
            to="/booking"
            className="cta cta-secondary text-xs"
          >
            PROCEED TO APPOINTMENT BOOKING
            <ArrowRight className="cta-icon w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
