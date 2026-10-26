import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SERVICES, ServiceItem, ServiceTier, PriceOption, BUSINESS_INFO } from '../data/salonData';
import { SectionHeader } from '../components/SectionHeader';
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Check,
  Sparkles,
} from 'lucide-react';

interface BookingAddon {
  id: string;
  name: string;
  price: number;
  description: string;
}

const AVAILABLE_ADDONS: BookingAddon[] = [
  {
    id: 'colour-blend',
    name: 'Custom Colour Blend / Ombre',
    price: 15,
    description: 'Pre-mixed custom tones (copper, honey blonde, burgundy, or 1B/30 blend).',
  },
  {
    id: 'scalp-prep',
    name: 'Scalp Steam & Hydration Treatment',
    price: 25,
    description: 'Warm organic essential oil steam treatment prior to installation to lock in moisture.',
  },
  {
    id: 'sew-in-prep',
    name: 'Sew-In Human Hair Bundle Prep',
    price: 30,
    description: 'Pre-washing, weft sealing, and deep conditioning of client sew-in bundles.',
  },
  {
    id: 'extra-length',
    name: 'Extra Length Extension (Knee Length)',
    price: 20,
    description: 'Ultra-extended length past bum for maximum drama and silhouette.',
  },
];

// Time slots generation based on salon hours
const WEEKDAY_TIME_SLOTS = [
  '09:00 AM',
  '10:30 AM',
  '12:00 PM',
  '01:30 PM',
  '03:00 PM',
  '04:30 PM',
];

const SUNDAY_TIME_SLOTS = [
  '10:00 AM',
  '11:30 AM',
  '01:00 PM',
  '02:30 PM',
];

export const BookingPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedServiceId = searchParams.get('service');

  // Step 1: Service & Sizing
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    preselectedServiceId || SERVICES[0].id
  );
  const [selectedTierIndex, setSelectedTierIndex] = useState<number>(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState<number>(0);

  // Step 2: Date & Time
  // Format today's date in YYYY-MM-DD
  const todayStr = useMemo(() => {
    const d = new Date();
    return d.toISOString().split('T')[0];
  }, []);

  const [selectedDate, setSelectedDate] = useState<string>(todayStr);
  const [selectedTime, setSelectedTime] = useState<string>('10:30 AM');

  // Step 3: Client Details & Addons
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [hairNotes, setHairNotes] = useState('');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  // Step management & Validation
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [bookingReference, setBookingReference] = useState<string>('');

  // Synchronize when preselectedServiceId changes via URL
  useEffect(() => {
    if (preselectedServiceId) {
      const match = SERVICES.find((s) => s.id === preselectedServiceId);
      if (match) {
        setSelectedServiceId(match.id);
        setSelectedTierIndex(0);
        setSelectedSizeIndex(0);
      }
    }
  }, [preselectedServiceId]);

  // Active service object
  const currentService = useMemo(() => {
    return SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];
  }, [selectedServiceId]);

  // Active Tier
  const currentTier = useMemo(() => {
    return currentService.tiers[selectedTierIndex] || currentService.tiers[0];
  }, [currentService, selectedTierIndex]);

  // Active Size & Base Price
  const currentSizeOption = useMemo(() => {
    return currentTier.items[selectedSizeIndex] || currentTier.items[0];
  }, [currentTier, selectedSizeIndex]);

  // Calculate live total price
  const basePrice = currentSizeOption ? currentSizeOption.price : currentService.startingPrice;
  const addonsTotal = useMemo(() => {
    return selectedAddons.reduce((sum, addonId) => {
      const found = AVAILABLE_ADDONS.find((a) => a.id === addonId);
      return sum + (found ? found.price : 0);
    }, 0);
  }, [selectedAddons]);

  const totalPrice = basePrice + addonsTotal;
  const depositRequired = 25;
  const remainingBalance = totalPrice - depositRequired;

  // Available time slots based on day of week
  const availableSlots = useMemo(() => {
    if (!selectedDate) return WEEKDAY_TIME_SLOTS;
    const day = new Date(selectedDate).getDay();
    // 0 is Sunday
    return day === 0 ? SUNDAY_TIME_SLOTS : WEEKDAY_TIME_SLOTS;
  }, [selectedDate]);

  const toggleAddon = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter((id) => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  // Step Nav validation
  const goToNextStep = () => {
    const errs: Record<string, string> = {};

    if (currentStep === 1) {
      if (!selectedServiceId) errs.service = 'Please select a service';
      if (!currentSizeOption) errs.size = 'Please select a length and size option';
    } else if (currentStep === 2) {
      if (!selectedDate) errs.date = 'Please pick an appointment date';
      if (!selectedTime) errs.time = 'Please pick a preferred start time';
    } else if (currentStep === 3) {
      if (!clientName.trim()) errs.name = 'Full name is required';
      if (!clientEmail.trim()) {
        errs.email = 'Email address is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientEmail)) {
        errs.email = 'Please enter a valid email address';
      }
      if (!clientPhone.trim()) {
        errs.phone = 'Phone number is required';
      } else if (clientPhone.replace(/[^0-9+]/g, '').length < 8) {
        errs.phone = 'Please enter a valid UK phone number';
      }
    }

    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      if (currentStep < 4) {
        setCurrentStep((prev) => prev + 1);
        window.scrollTo({ top: 180, behavior: 'smooth' });
      } else {
        // Confirm booking
        const ref = 'HH-' + Math.floor(100000 + Math.random() * 900000);
        setBookingReference(ref);
        setIsCompleted(true);
        window.scrollTo({ top: 100, behavior: 'smooth' });
      }
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black pt-28 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeader
          title="ONLINE"
          italicWord="BOOKING"
          subtitle="Select your desired hair service, preferred length, size, date, and custom add-ons. Review pricing in real time before confirmation."
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Step Indicator Progress Bar */}
        {!isCompleted && (
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-4 gap-2 sm:gap-4 border-b border-neutral-900 pb-6 text-center">
              {[
                { num: 1, label: 'Style & Size' },
                { num: 2, label: 'Date & Time' },
                { num: 3, label: 'Details & Add-ons' },
                { num: 4, label: 'Review & Confirm' },
              ].map((step) => {
                const isActive = currentStep === step.num;
                const isPassed = currentStep > step.num;

                return (
                  <div
                    key={step.num}
                    className={`flex flex-col items-center cursor-pointer transition-colors ${
                      isActive ? 'text-white font-bold' : isPassed ? 'text-neutral-300' : 'text-neutral-600'
                    }`}
                    onClick={() => {
                      if (step.num < currentStep) setCurrentStep(step.num);
                    }}
                  >
                    <span className="font-heading text-xs mb-1.5 tabular-nums">
                      {isPassed ? <Check className="w-3.5 h-3.5" /> : String(step.num).padStart(2, '0')}
                    </span>
                    <span className="relative text-[10px] sm:text-xs uppercase tracking-wider font-heading truncate w-full text-center">
                      {step.label}
                      <span
                        className={`pointer-events-none absolute left-0 right-0 -bottom-1 mx-auto h-[2px] bg-white origin-left transition-transform duration-300 ${
                          isActive ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {isCompleted ? (
          /* SUCCESS CONFIRMATION STATE */
          <div className="max-w-2xl mx-auto pt-8 border-t border-neutral-900 text-center animate-in fade-in duration-300">
            <div className="flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>

            <h3 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-white mb-2">
              WE'RE EXPECTING YOU
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed mb-8">
              Thank you, <span className="text-white font-semibold">{clientName}</span>. Your booking request for{' '}
              <strong className="text-white">{currentService.name}</strong> has been logged into our calendar.
            </p>

            {/* Reference Badge */}
            <div className="py-4 mb-8 inline-block w-full max-w-md border-y border-neutral-900">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 block mb-1">
                BOOKING REFERENCE
              </span>
              <span className="font-heading text-2xl font-bold tracking-widest text-white tabular-nums">
                {bookingReference}
              </span>
            </div>

            {/* Appointment Recap */}
            <div className="py-6 text-left space-y-3 text-xs mb-8 border-t border-neutral-900">
              <div className="flex justify-between gap-4 border-b border-neutral-800 pb-2">
                <span className="text-neutral-400 shrink-0">Service:</span>
                <span className="text-white font-medium text-right break-words min-w-0">{currentService.name}</span>
              </div>
              <div className="flex justify-between gap-4 border-b border-neutral-800 pb-2">
                <span className="text-neutral-400 shrink-0">Length & Size:</span>
                <span className="text-white font-medium text-right break-words min-w-0">
                  {currentTier.lengthName} · {currentSizeOption.name}
                </span>
              </div>
              <div className="flex justify-between gap-4 border-b border-neutral-800 pb-2">
                <span className="text-neutral-400 shrink-0">Date & Time:</span>
                <span className="text-white font-medium tabular-nums text-right break-words min-w-0">
                  {selectedDate} at {selectedTime}
                </span>
              </div>
              <div className="flex justify-between gap-4 border-b border-neutral-800 pb-2">
                <span className="text-neutral-400 shrink-0">Total Quoted:</span>
                <span className="text-white font-bold text-sm tabular-nums">£{totalPrice}</span>
              </div>
              <div className="flex justify-between gap-4 text-neutral-300">
                <span className="shrink-0">Deposit Due on Confirmation:</span>
                <span className="font-semibold tabular-nums text-white">£{depositRequired}</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs text-neutral-400 leading-relaxed">
                A confirmation summary has been sent to <span className="text-white">{clientEmail}</span>. Ruvimbo will message your WhatsApp at <span className="text-white">{clientPhone}</span> with directions and pre-appointment details.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 pt-4">
                <a
                  href={`https://wa.me/447000000000?text=${encodeURIComponent(
                    `Hi Ruvimbo! I just booked an appointment for ${currentService.name} on ${selectedDate} at ${selectedTime}. Ref: ${bookingReference}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta cta-primary text-xs"
                >
                  NOTIFY ON WHATSAPP
                </a>
                <Link
                  to="/"
                  className="cta cta-secondary text-xs"
                >
                  RETURN TO HOME
                </Link>
              </div>
            </div>
          </div>
        ) : (
          /* BOOKING FORM & SUMMARY SIDEBAR */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Main Multi-Step Form */}
            <div className="lg:col-span-8">
              {/* STEP 1: SERVICE & SIZING */}
              {currentStep === 1 && (
                <div className="space-y-8 animate-in fade-in duration-200">
                  <div>
                    <h3 className="font-heading text-xl uppercase tracking-wider text-white font-bold mb-1">
                      STEP 1: SELECT YOUR SERVICE
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Choose your signature protective hairstyle.
                    </p>
                  </div>

                  {/* Service Cards Radio Grid */}
                  <div role="radiogroup" aria-label="Select a service" className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                    {SERVICES.map((s) => {
                      const isSelected = selectedServiceId === s.id;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          onClick={() => {
                            setSelectedServiceId(s.id);
                            setSelectedTierIndex(0);
                            setSelectedSizeIndex(0);
                          }}
                          className="group relative text-left py-3 cursor-pointer transition-colors"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-heading text-xs uppercase tracking-widest text-neutral-400">
                              {s.number}
                            </span>
                            <span className="font-heading text-xs font-bold text-white tabular-nums">
                              FROM £{s.startingPrice}
                            </span>
                          </div>
                          <span className="relative inline-block">
                            <h4
                              className={`font-heading text-base font-bold uppercase mb-1 transition-colors ${
                                isSelected ? 'text-white' : 'text-neutral-300 group-hover:text-white'
                              }`}
                            >
                              {s.name}
                            </h4>
                            {/* Hover underline (thin white/40) */}
                            <span
                              className={`pointer-events-none absolute left-0 -bottom-0.5 h-[1px] w-full origin-left bg-white/40 transition-transform duration-300 ease-out ${
                                isSelected ? 'scale-x-0' : 'scale-x-0 group-hover:scale-x-100'
                              }`}
                            />
                            {/* Active underline (2px white) */}
                            <span
                              className={`pointer-events-none absolute left-0 -bottom-0.5 h-[2px] w-full origin-left bg-white transition-transform duration-300 ease-out ${
                                isSelected ? 'scale-x-100' : 'scale-x-0'
                              }`}
                            />
                          </span>
                          <p className="text-xs line-clamp-2 text-neutral-400">
                            {s.tagline}
                          </p>
                        </button>
                      );
                    })}
                  </div>

                  {/* Length and Tier selection */}
                  <div className="border-t border-neutral-900 pt-6 space-y-6">
                    <div>
                      <label className="block text-xs font-heading uppercase tracking-widest text-neutral-300 mb-3">
                        LENGTH VARIANT
                      </label>
                      <div className="flex flex-wrap gap-x-8 gap-y-4">
                        {currentService.tiers.map((tier, idx) => {
                          const isTierSelected = selectedTierIndex === idx;
                          return (
                            <button
                              key={tier.lengthName}
                              type="button"
                              aria-pressed={isTierSelected}
                              onClick={() => {
                                setSelectedTierIndex(idx);
                                setSelectedSizeIndex(0);
                              }}
                              className={`group relative py-3 min-h-[44px] text-left text-xs font-heading uppercase tracking-wider transition-colors ${
                                isTierSelected ? 'text-white' : 'text-neutral-400 hover:text-white'
                              }`}
                            >
                              <span className="relative inline-block">
                                {tier.lengthName}
                                {/* Hover underline (thin white/40) */}
                                <span
                                  className={`pointer-events-none absolute left-0 -bottom-1.5 h-[1px] w-full origin-left bg-white/40 transition-transform duration-300 ease-out ${
                                    isTierSelected ? 'scale-x-0' : 'scale-x-0 group-hover:scale-x-100'
                                  }`}
                                />
                                {/* Active underline (2px white) */}
                                <span
                                  className={`pointer-events-none absolute left-0 -bottom-1.5 h-[2px] w-full origin-left bg-white transition-transform duration-300 ease-out ${
                                    isTierSelected ? 'scale-x-100' : 'scale-x-0'
                                  }`}
                                />
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Sizing selection (Small / Smedium / Medium) */}
                    <div>
                      <label className="block text-xs font-heading uppercase tracking-widest text-neutral-300 mb-3">
                        BRAID SIZE & DENSITY
                      </label>
                      <div className="flex flex-wrap gap-x-8 gap-y-5">
                        {currentTier.items.map((item, idx) => {
                          const isSizeSelected = selectedSizeIndex === idx;
                          return (
                            <button
                              key={item.name}
                              type="button"
                              aria-pressed={isSizeSelected}
                              onClick={() => setSelectedSizeIndex(idx)}
                              className={`group relative py-3 min-h-[44px] text-left transition-colors ${
                                isSizeSelected ? 'text-white' : 'text-neutral-400 hover:text-white'
                              }`}
                            >
                              <span className="relative inline-flex flex-col">
                                <span className="font-heading text-xs uppercase tracking-wider font-bold">
                                  {item.name}
                                </span>
                                <span className="font-heading text-sm text-neutral-300 font-bold tabular-nums">
                                  £{item.price}
                                </span>
                                {/* Hover underline (thin white/40) */}
                                <span
                                  className={`pointer-events-none absolute left-0 -bottom-1.5 h-[1px] w-full origin-left bg-white/40 transition-transform duration-300 ease-out ${
                                    isSizeSelected ? 'scale-x-0' : 'scale-x-0 group-hover:scale-x-100'
                                  }`}
                                />
                                {/* Active underline (2px white) */}
                                <span
                                  className={`pointer-events-none absolute left-0 -bottom-1.5 h-[2px] w-full origin-left bg-white transition-transform duration-300 ease-out ${
                                    isSizeSelected ? 'scale-x-100' : 'scale-x-0'
                                  }`}
                                />
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-neutral-900 text-xs text-neutral-400 flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span>{currentService.note}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: DATE & TIME */}
              {currentStep === 2 && (
                <div className="space-y-8 animate-in fade-in duration-200">
                  <div>
                    <h3 className="font-heading text-xl uppercase tracking-wider text-white font-bold mb-1">
                      STEP 2: PICK APPOINTMENT DATE & TIME
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Our studio is open Mon–Sat 9am–7pm, and Sun 10am–5pm.
                    </p>
                  </div>

                  {/* Date Input */}
                  <div>
                    <label className="block text-xs font-heading uppercase tracking-widest text-neutral-300 mb-2">
                      SELECT DATE (NO PAST DATES) <span className="text-white">*</span>
                    </label>
                    <input
                      type="date"
                      min={todayStr}
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-transparent border-b border-white/30 px-1 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                    />
                    {errors.date && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.date}
                      </p>
                    )}
                  </div>

                  {/* Time Slots */}
                  <div>
                    <label className="block text-xs font-heading uppercase tracking-widest text-neutral-300 mb-3">
                      SELECT CHAIR START TIME <span className="text-white">*</span>
                    </label>
                    <div className="flex flex-wrap gap-x-8 gap-y-4">
                      {availableSlots.map((slot) => {
                        const isSlotSelected = selectedTime === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            aria-pressed={isSlotSelected}
                            onClick={() => setSelectedTime(slot)}
                            className={`group relative py-3 min-h-[44px] font-heading text-xs tracking-wider uppercase transition-colors ${
                              isSlotSelected ? 'text-white' : 'text-neutral-400 hover:text-white'
                            }`}
                          >
                            <span className="relative inline-flex items-center">
                              <Clock className="w-3.5 h-3.5 inline-block mr-1.5 mb-0.5" />
                              {slot}
                              {/* Hover underline (thin white/40) */}
                              <span
                                className={`pointer-events-none absolute left-0 -bottom-1.5 h-[1px] w-full origin-left bg-white/40 transition-transform duration-300 ease-out ${
                                  isSlotSelected ? 'scale-x-0' : 'scale-x-0 group-hover:scale-x-100'
                                }`}
                              />
                              {/* Active underline (2px white) */}
                              <span
                                className={`pointer-events-none absolute left-0 -bottom-1.5 h-[2px] w-full origin-left bg-white transition-transform duration-300 ease-out ${
                                  isSlotSelected ? 'scale-x-100' : 'scale-x-0'
                                }`}
                              />
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-900 text-xs text-neutral-400 flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-neutral-300 shrink-0 mt-0.5" />
                    <span>
                      Because we maintain a 1-on-1 unhurried environment, each appointment reserves the entire dedicated chair slot. Please plan for {currentService.durationEst}.
                    </span>
                  </div>
                </div>
              )}

              {/* STEP 3: DETAILS & ADD-ONS */}
              {currentStep === 3 && (
                <div className="space-y-8 animate-in fade-in duration-200">
                  <div>
                    <h3 className="font-heading text-xl uppercase tracking-wider text-white font-bold mb-1">
                      STEP 3: YOUR INFORMATION & ENHANCEMENTS
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Tell us who is sitting in the chair and any custom requirements.
                    </p>
                  </div>

                  {/* Contact Fields */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-heading uppercase tracking-widest text-neutral-300 mb-2">
                        FULL NAME <span className="text-white">*</span>
                      </label>
                      <input
                        type="text"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. Chanté Williams"
                        className={`w-full bg-transparent border-b px-1 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors ${
                          errors.name ? 'border-red-500' : 'border-white/30'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-heading uppercase tracking-widest text-neutral-300 mb-2">
                          EMAIL ADDRESS <span className="text-white">*</span>
                        </label>
                        <input
                          type="email"
                          value={clientEmail}
                          onChange={(e) => setClientEmail(e.target.value)}
                          placeholder="chante@example.co.uk"
                          className={`w-full bg-transparent border-b px-1 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors ${
                            errors.email ? 'border-red-500' : 'border-white/30'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-heading uppercase tracking-widest text-neutral-300 mb-2">
                          PHONE / WHATSAPP <span className="text-white">*</span>
                        </label>
                        <input
                          type="tel"
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          placeholder="+44 7000 000000"
                          className={`w-full bg-transparent border-b px-1 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors ${
                            errors.phone ? 'border-red-500' : 'border-white/30'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Add-ons Checklist */}
                  <div className="border-t border-neutral-900 pt-6">
                    <label className="block text-xs font-heading uppercase tracking-widest text-neutral-300 mb-3">
                      OPTIONAL SERVICE ENHANCEMENTS
                    </label>

                    <div className="space-y-5">
                      {AVAILABLE_ADDONS.map((addon) => {
                        const isChecked = selectedAddons.includes(addon.id);
                        return (
                          <div
                            key={addon.id}
                            onClick={() => toggleAddon(addon.id)}
                            role="checkbox"
                            aria-checked={isChecked}
                            className="py-2 min-h-[44px] cursor-pointer flex items-start justify-between gap-4 group/addon"
                          >
                            <div className="flex items-start gap-3">
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => {}} // handled by div
                                className="mt-1 h-4 w-4 rounded-none accent-white"
                              />
                              <div>
                                <span className="relative inline-block">
                                  <span
                                    className={`font-heading text-sm uppercase tracking-wide block transition-colors ${
                                      isChecked ? 'text-white' : 'text-neutral-300 group-hover/addon:text-white'
                                    }`}
                                  >
                                    {addon.name}
                                  </span>
                                  {/* Hover underline (thin white/40) */}
                                  <span
                                    className={`pointer-events-none absolute left-0 -bottom-0.5 h-[1px] w-full origin-left bg-white/40 transition-transform duration-300 ease-out ${
                                      isChecked ? 'scale-x-0' : 'scale-x-0 group-hover/addon:scale-x-100'
                                    }`}
                                  />
                                  {/* Active underline (2px white) */}
                                  <span
                                    className={`pointer-events-none absolute left-0 -bottom-0.5 h-[2px] w-full origin-left bg-white transition-transform duration-300 ease-out ${
                                      isChecked ? 'scale-x-100' : 'scale-x-0'
                                    }`}
                                  />
                                </span>
                                <span className="text-xs text-neutral-400">
                                  {addon.description}
                                </span>
                              </div>
                            </div>
                            <span className="font-heading text-sm font-bold text-white tabular-nums shrink-0">
                              +£{addon.price}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Hair notes */}
                  <div className="border-t border-neutral-900 pt-6">
                    <label className="block text-xs font-heading uppercase tracking-widest text-neutral-300 mb-2">
                      HAIR NOTES / PREFERENCES (OPTIONAL)
                    </label>
                    <textarea
                      rows={3}
                      value={hairNotes}
                      onChange={(e) => setHairNotes(e.target.value)}
                      placeholder="e.g. Tender scalp, natural hair is shoulder length, prefer 1B/30 blend, extra tension relief on temples..."
                      className="w-full bg-transparent border-b border-white/30 px-1 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>
              )}

              {/* STEP 4: REVIEW & CONFIRM */}
              {currentStep === 4 && (
                <div className="space-y-8 animate-in fade-in duration-200">
                  <div>
                    <h3 className="font-heading text-xl uppercase tracking-wider text-white font-bold mb-1">
                      STEP 4: REVIEW & CONFIRM YOUR APPOINTMENT
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Please double-check all details before finalising your reservation.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-neutral-900 space-y-4 text-xs sm:text-sm">
                    <div className="flex justify-between gap-4 border-b border-neutral-900 pb-3">
                      <span className="text-neutral-400 shrink-0">Selected Style:</span>
                      <span className="text-white font-heading font-bold uppercase tracking-wide text-right break-words min-w-0">
                        {currentService.name}
                      </span>
                    </div>

                    <div className="flex justify-between gap-4 border-b border-neutral-900 pb-3">
                      <span className="text-neutral-400 shrink-0">Length & Size:</span>
                      <span className="text-white font-medium text-right break-words min-w-0">
                        {currentTier.lengthName} · {currentSizeOption.name}
                      </span>
                    </div>

                    <div className="flex justify-between gap-4 border-b border-neutral-900 pb-3">
                      <span className="text-neutral-400 shrink-0">Appointment Slot:</span>
                      <span className="text-white font-medium tabular-nums text-right break-words min-w-0">
                        {selectedDate} at {selectedTime}
                      </span>
                    </div>

                    <div className="flex justify-between gap-4 border-b border-neutral-900 pb-3">
                      <span className="text-neutral-400 shrink-0">Client:</span>
                      <span className="text-white font-medium text-right break-words min-w-0">
                        {clientName} ({clientPhone})
                      </span>
                    </div>

                    {selectedAddons.length > 0 && (
                      <div className="border-b border-neutral-900 pb-3">
                        <span className="text-neutral-400 block mb-1">Add-ons:</span>
                        <ul className="space-y-1 pl-3 text-xs text-neutral-300">
                          {selectedAddons.map((id) => {
                            const a = AVAILABLE_ADDONS.find((x) => x.id === id);
                            return (
                              <li key={id} className="flex justify-between">
                                <span>✦ {a?.name}</span>
                                <span className="tabular-nums">+£{a?.price}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}

                    <div className="flex justify-between pt-2 text-base sm:text-lg font-heading font-bold text-white">
                      <span>Total Estimated Price:</span>
                      <span className="tabular-nums">£{totalPrice}</span>
                    </div>
                  </div>

                  {/* Policy */}
                  <div className="pt-4 border-t border-neutral-900 text-xs text-neutral-400 space-y-2">
                    <div className="flex items-center gap-2 text-white font-heading tracking-wider">
                      <ShieldCheck className="w-4 h-4 text-white" />
                      <span>DEPOSIT & CANCELLATION POLICY</span>
                    </div>
                    <p className="leading-relaxed">
                      A £25 non-refundable deposit is required to confirm your reserved slot, which is deducted from your balance on appointment day. Rescheduling requires 48 hours notice.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-10 pt-6 border-t border-neutral-900 flex items-center justify-between gap-4">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={goToPreviousStep}
                    className="cta cta-secondary text-xs"
                  >
                    <ArrowLeft className="cta-icon w-3.5 h-3.5" />
                    BACK
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="button"
                  onClick={goToNextStep}
                  className="cta cta-primary text-xs ml-auto"
                >
                  {currentStep === 4 ? 'CONFIRM & RESERVE CHAIR' : 'CONTINUE'}
                  <ArrowRight className="cta-icon w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Sticky Summary Sidebar */}
            <aside className="lg:col-span-4 pt-6 border-t border-neutral-900 lg:border-t-0 lg:pt-0 lg:sticky lg:top-28">
              <h4 className="font-heading text-sm uppercase tracking-widest text-neutral-400 border-b border-neutral-800 pb-3 mb-4">
                BOOKING SUMMARY
              </h4>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-neutral-400 block mb-0.5">Style</span>
                  <p className="font-heading text-base font-bold text-white uppercase">
                    {currentService.name}
                  </p>
                </div>

                <div className="flex justify-between gap-4 border-t border-neutral-900 pt-2">
                  <span className="text-neutral-400">Length</span>
                  <span className="text-neutral-200 font-medium">{currentTier.lengthName}</span>
                </div>

                <div className="flex justify-between gap-4 border-t border-neutral-900 pt-2">
                  <span className="text-neutral-400">Size / Braid Width</span>
                  <span className="text-neutral-200 font-medium">{currentSizeOption.name}</span>
                </div>

                <div className="flex justify-between gap-4 border-t border-neutral-900 pt-2">
                  <span className="text-neutral-400">Date</span>
                  <span className="text-neutral-200 font-medium tabular-nums">{selectedDate}</span>
                </div>

                <div className="flex justify-between gap-4 border-t border-neutral-900 pt-2">
                  <span className="text-neutral-400">Time Slot</span>
                  <span className="text-neutral-200 font-medium tabular-nums">{selectedTime}</span>
                </div>

                {selectedAddons.length > 0 && (
                  <div className="border-t border-neutral-900 pt-2">
                    <span className="text-neutral-400 block mb-1">Add-ons (+£{addonsTotal})</span>
                    <ul className="space-y-0.5 text-neutral-300">
                      {selectedAddons.map((id) => {
                        const a = AVAILABLE_ADDONS.find((x) => x.id === id);
                        return (
                          <li key={id} className="flex justify-between text-[11px]">
                            <span>{a?.name}</span>
                            <span className="tabular-nums">£{a?.price}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {/* Total live breakdown */}
                <div className="border-t-2 border-white/20 pt-4 space-y-1">
                  <div className="flex justify-between text-base font-heading font-bold text-white">
                    <span>ESTIMATED TOTAL:</span>
                    <span className="tabular-nums text-lg">£{totalPrice}</span>
                  </div>
                  <div className="flex justify-between gap-4 text-[11px] text-neutral-400">
                    <span>Deposit Due Now:</span>
                    <span className="tabular-nums text-white">£{depositRequired}</span>
                  </div>
                  <div className="flex justify-between gap-4 text-[11px] text-neutral-400">
                    <span>Balance at Appointment:</span>
                    <span className="tabular-nums text-white">£{remainingBalance}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-900 text-[11px] text-neutral-400 space-y-2">
                <p>✦ Pre-stretched braiding hair included</p>
                <p>✦ Quiet, 1-on-1 private chair experience</p>
                <p>✦ Located in Harlow, Essex</p>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
};
