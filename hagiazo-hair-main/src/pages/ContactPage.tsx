import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/salonData';
import { SectionHeader } from '../components/SectionHeader';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Appointment Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.replace(/[^0-9+]/g, '').length < 8) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please enter a message of at least 10 characters';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 700);
    }
  };

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <SectionHeader
          title="CONTACT"
          italicWord="HAGIAZO"
          subtitle="Located in Harlow, Essex. Have questions about our braiding hair textures, customized wig units, or availability? Reach out below."
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Information & Hours & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h3 className="font-heading text-xl uppercase tracking-wider text-white font-bold border-b border-neutral-800 pb-3">
                STUDIO INFORMATION
              </h3>

              <div className="space-y-5 text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-medium">Studio Location</strong>
                    <p className="text-neutral-400 text-xs mt-0.5">{BUSINESS_INFO.address}</p>
                    <p className="text-neutral-400 text-xs">Essex, United Kingdom</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-medium">Direct Telephone</strong>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="text-neutral-400 text-xs mt-0.5 hover:text-white transition-colors tabular-nums block"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-medium">Email Inquiries</strong>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-neutral-400 text-xs mt-0.5 hover:text-white transition-colors block"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-medium">Studio Hours</strong>
                    <p className="text-neutral-400 text-xs mt-0.5">
                      Mon–Sat: <span className="tabular-nums text-white">9:00am – 7:00pm</span>
                    </p>
                    <p className="text-neutral-400 text-xs">
                      Sunday: <span className="tabular-nums text-white">10:00am – 5:00pm</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-neutral-900">
                <p className="text-xs font-heading tracking-widest text-neutral-400 uppercase mb-3">
                  CONNECT DIRECTLY
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <a
                    href={BUSINESS_INFO.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta cta-secondary text-xs"
                  >
                    <MessageCircle className="cta-icon w-4 h-4" />
                    WhatsApp
                  </a>
                  <a
                    href={BUSINESS_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta cta-secondary text-xs"
                  >
                    <Instagram className="cta-icon w-4 h-4" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Google Map of Harlow, Essex */}
            <div>
              <div className="pb-3 border-b border-neutral-900 flex items-center justify-between text-xs text-neutral-400">
                <span className="font-heading uppercase tracking-widest">MAP: HARLOW, ESSEX</span>
                <span className="text-neutral-400">UK</span>
              </div>
              <div className="h-64 w-full">
                <iframe
                  title="Hagiazo Hair Studio Location Harlow"
                  src="https://maps.google.com/maps?q=Harlow%20Essex%20UK&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter invert contrast-125 grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7 sm:pl-4">
            <h3 className="font-heading text-2xl uppercase tracking-wider text-white font-bold mb-2">
              SEND A MESSAGE
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-8 leading-relaxed">
              Fill in your details below and Ruvimbo will respond within 24 hours. For urgent or same-week appointment questions, WhatsApp is recommended.
            </p>

            {isSubmitted ? (
              <div className="pt-6 border-t border-neutral-900 text-center space-y-4 animate-in fade-in duration-300">
                <CheckCircle2 className="w-12 h-12 text-white mx-auto" />
                <h4 className="font-heading text-2xl font-bold uppercase tracking-wide text-white">
                  MESSAGE RECEIVED
                </h4>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your message has been sent to our studio desk. We will be in touch shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'Appointment Inquiry',
                        message: '',
                      });
                    }}
                    className="cta cta-secondary text-xs"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Name */}
                <div>
                  <label className="block text-xs font-heading uppercase tracking-widest text-neutral-300 mb-2">
                    FULL NAME <span className="text-white">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Amara Okafor"
                    className={`w-full bg-transparent border-b px-1 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors ${
                      errors.name ? 'border-red-500' : 'border-white/30'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-heading uppercase tracking-widest text-neutral-300 mb-2">
                      EMAIL ADDRESS <span className="text-white">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="amara@example.com"
                      className={`w-full bg-transparent border-b px-1 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors ${
                        errors.email ? 'border-red-500' : 'border-white/30'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-heading uppercase tracking-widest text-neutral-300 mb-2">
                      PHONE NUMBER <span className="text-white">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+44 7000 000000"
                      className={`w-full bg-transparent border-b px-1 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-white/30'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Selector */}
                <div>
                  <label className="block text-xs font-heading uppercase tracking-widest text-neutral-300 mb-2">
                    INQUIRY TYPE
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-transparent border-b border-white/30 px-1 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="Appointment Inquiry">Appointment & Date Availability</option>
                    <option value="Style & Hair Consultation">Style Consultation (Knotless vs Boho)</option>
                    <option value="Custom Wig Construction">Custom Wig Unit Construction</option>
                    <option value="Colour Match / Pre-stretched Hair">Custom Colour Matching</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-heading uppercase tracking-widest text-neutral-300 mb-2">
                    YOUR MESSAGE <span className="text-white">*</span>
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your natural hair length, desired style, or any specific requests..."
                    className={`w-full bg-transparent border-b px-1 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors ${
                      errors.message ? 'border-red-500' : 'border-white/30'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cta cta-primary w-full justify-center text-xs disabled:opacity-50"
                >
                  <Send className="cta-icon w-4 h-4" />
                  {isSubmitting ? 'TRANSMITTING MESSAGE...' : 'SEND INQUIRY'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
