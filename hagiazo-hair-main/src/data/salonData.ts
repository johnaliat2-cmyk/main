export interface PriceOption {
  name: string;
  price: number;
}

export interface ServiceTier {
  lengthName: string;
  items: PriceOption[];
}

export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  tagline: string;
  startingPrice: number;
  tiers: ServiceTier[];
  note: string;
  image: string;
  category: 'braids' | 'curls' | 'cornrows' | 'wigs';
  durationEst: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  meaning: string;
  shortDescription: string;
  story: string;
  stylistName: string;
  stylistBio: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    sunday: string;
  };
  socials: {
    instagram: string;
    tiktok: string;
    whatsapp: string;
  };
}

export const BUSINESS_INFO: BusinessInfo = {
  name: "HAGIAZO HAIR",
  tagline: "Be set apart",
  meaning: "Hagiazo — to set apart for a special purpose",
  shortDescription: "Premium hair services in the heart of Harlow, Essex. Hagiazo — to set apart for a special purpose.",
  story: "Hagiazo was founded in the heart of Harlow on one belief: that protective styling is an art form, and every head of hair deserves to be treated as something set apart. We specialise in braids for the Afro-Caribbean community — combining authentic technique, healthy-hair care and a calm, unhurried chair that keeps our clients coming back time and again.",
  stylistName: "Ruvimbo",
  stylistBio: "Founder and Lead Artisan at Hagiazo Hair. With over 8 years dedicated to Afro-textured hair health and artisanal braiding precision, Ruvimbo brings a gentle hand, meticulous grid partings, and an uncompromising focus on scalp wellness to every single appointment.",
  address: "Harlow, Essex, UK",
  phone: "+44 (0) 000 000 0000",
  email: "hello@hagiazohair.co.uk",
  hours: {
    weekdays: "Mon–Sat 9:00am – 7:00pm",
    sunday: "Sunday 10:00am – 5:00pm",
  },
  socials: {
    instagram: "https://www.instagram.com/hagiazohair",
    tiktok: "https://vm.tiktok.com/ZNRwuLbhB/",
    whatsapp: "https://wa.me/447000000000",
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: "boho-bob",
    number: "01",
    name: "Boho Bob Braids",
    tagline: "The on-trend bob with soft, curled ends — playful, lightweight and endlessly flattering.",
    startingPrice: 110,
    durationEst: "3.5 - 4.5 hrs",
    category: "braids",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=900&q=80",
    tiers: [
      {
        lengthName: "Shoulder Length",
        items: [
          { name: "Small", price: 130 },
          { name: "Smedium", price: 120 },
          { name: "Medium", price: 110 },
        ],
      },
      {
        lengthName: "Long Bob (Armpit Length)",
        items: [
          { name: "Small", price: 140 },
          { name: "Smedium", price: 130 },
          { name: "Medium", price: 120 },
        ],
      },
    ],
    note: "Braiding hair & curled ends included. Boho pieces not included.",
  },
  {
    id: "cornrow-fulani",
    number: "02",
    name: "Cornrow & Fulani Braids",
    tagline: "Intricate Fulani patterns, clean straight-backs and sleek sew-ins — artistry that sits close and lasts.",
    startingPrice: 85,
    durationEst: "2.5 - 4.5 hrs",
    category: "cornrows",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
    tiers: [
      {
        lengthName: "Fulani Braids",
        items: [
          { name: "Small", price: 140 },
          { name: "Smedium", price: 130 },
          { name: "Medium", price: 120 },
        ],
      },
      {
        lengthName: "Straight Backs / Cornrows (to waist)",
        items: [
          { name: "8–10 braids", price: 95 },
          { name: "11–16 braids", price: 105 },
          { name: "17–25 braids", price: 130 },
        ],
      },
      {
        lengthName: "Fulani Sew-In",
        items: [
          { name: "Small Fulani Sew-In", price: 85 },
          { name: "Small Fulani Side Sew-In", price: 105 },
        ],
      },
    ],
    note: "Braiding hair included. Sew-in add-on hair charged separately.",
  },
  {
    id: "french-curls",
    number: "03",
    name: "French Curls",
    tagline: "Soft, bouncy curls braided through for a romantic, voluminous finish — in every length.",
    startingPrice: 120,
    durationEst: "4 - 5.5 hrs",
    category: "curls",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&q=80",
    tiers: [
      {
        lengthName: "Bob Length",
        items: [
          { name: "Small", price: 140 },
          { name: "Smedium", price: 130 },
          { name: "Medium", price: 120 },
        ],
      },
      {
        lengthName: "Mid-Back Length",
        items: [
          { name: "Small", price: 150 },
          { name: "Smedium", price: 140 },
          { name: "Medium", price: 130 },
        ],
      },
      {
        lengthName: "Waist Length",
        items: [
          { name: "Small", price: 165 },
          { name: "Smedium", price: 155 },
          { name: "Medium", price: 145 },
        ],
      },
      {
        lengthName: "Bum Length",
        items: [
          { name: "Small", price: 180 },
          { name: "Smedium", price: 170 },
          { name: "Medium", price: 160 },
        ],
      },
    ],
    note: "Braiding hair included (default black). Boho option included.",
  },
  {
    id: "knotless-braids",
    number: "04",
    name: "Knotless Braids",
    tagline: "Our signature — featherlight from the very first braid, kind to your edges and beautiful for weeks.",
    startingPrice: 100,
    durationEst: "4 - 6 hrs",
    category: "braids",
    image: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=900&q=80",
    tiers: [
      {
        lengthName: "Mid-Back Length",
        items: [
          { name: "Small", price: 140 },
          { name: "Smedium", price: 115 },
          { name: "Medium", price: 100 },
        ],
      },
      {
        lengthName: "Waist Length",
        items: [
          { name: "Small", price: 160 },
          { name: "Smedium", price: 130 },
          { name: "Medium", price: 120 },
        ],
      },
      {
        lengthName: "Bum Length",
        items: [
          { name: "Small", price: 185 },
          { name: "Smedium", price: 150 },
          { name: "Medium", price: 140 },
        ],
      },
    ],
    note: "Braiding hair included. Colours available as add-ons.",
  },
  {
    id: "knotless-boho",
    number: "05",
    name: "Knotless Boho Braids",
    tagline: "Knotless braids dressed with soft curls — for natural, effortless volume.",
    startingPrice: 130,
    durationEst: "4.5 - 6.5 hrs",
    category: "braids",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80",
    tiers: [
      {
        lengthName: "Mid-Back Length",
        items: [
          { name: "Small", price: 150 },
          { name: "Smedium", price: 140 },
          { name: "Medium", price: 130 },
        ],
      },
      {
        lengthName: "Waist Length",
        items: [
          { name: "Small", price: 160 },
          { name: "Smedium", price: 150 },
          { name: "Medium", price: 140 },
        ],
      },
      {
        lengthName: "Bum Length",
        items: [
          { name: "Small", price: 170 },
          { name: "Smedium", price: 160 },
          { name: "Medium", price: 150 },
        ],
      },
    ],
    note: "Braiding hair included. Soft, natural volume — boho details confirmed at consultation.",
  },
  {
    id: "custom-wigs",
    number: "06",
    name: "Custom Wigs",
    tagline: "Frontal and closure units, constructed and finished by hand for a flawless, natural lay.",
    startingPrice: 75,
    durationEst: "Custom fitting & turnaround",
    category: "wigs",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=80",
    tiers: [
      {
        lengthName: "Constructed Units",
        items: [
          { name: "Frontal Wig Unit", price: 80 },
          { name: "Closure Wig Unit", price: 75 },
        ],
      },
    ],
    note: "Hand-constructed units. Hair, finish and styling confirmed at consultation.",
  },
];

export interface TestimonialItem {
  id: string;
  name: string;
  service: string;
  quote: string;
  rating: number;
  date: string;
  location: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "amara",
    name: "Amara O.",
    service: "Knotless Braids",
    quote: "Absolutely incredible from start to finish. My knotless braids were so neat, the parting was flawless and my scalp didn't hurt at all. They lasted weeks looking fresh — I'm obsessed.",
    rating: 5,
    date: "October 2026",
    location: "Harlow",
  },
  {
    id: "chante",
    name: "Chanté W.",
    service: "French Curls & Protective Care",
    quote: "I've trusted Hagiazo for three years and wouldn't go anywhere else. They work with such care and my hair has never been healthier. Always stunning results.",
    rating: 5,
    date: "September 2026",
    location: "Bishop's Stortford",
  },
  {
    id: "naomi",
    name: "Naomi B.",
    service: "Feed-in Cornrows",
    quote: "Booked feed-in cornrows for a big birthday and they absolutely delivered. Everyone kept asking who did my hair. The best braider in Harlow — hands down.",
    rating: 5,
    date: "August 2026",
    location: "Harlow, Essex",
  },
  {
    id: "kemi",
    name: "Kemi A.",
    service: "Boho Bob Braids",
    quote: "The tension was perfect and the curled ends stayed intact on my entire holiday. The studio environment is peaceful, clean, and Ruvimbo makes you feel so valued.",
    rating: 5,
    date: "July 2026",
    location: "Chelmsford",
  },
  {
    id: "tasha",
    name: "Tasha M.",
    service: "Custom Frontal Wig",
    quote: "The hairline customisation is pure witchcraft. Melted seamlessly into my skin tone without having to mess with extra glue. Unbeatable attention to detail.",
    rating: 5,
    date: "June 2026",
    location: "Epping",
  },
];

export interface ValueItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export const BRAND_VALUES: ValueItem[] = [
  {
    number: "01",
    title: "Set Apart",
    tagline: "Transcend fleeting micro-trends",
    description: "We do not believe in hurried turnover. Every grid, part, and stitch is calculated so you leave intentional, elevated, and unmistakably yourself.",
  },
  {
    number: "02",
    title: "Crown & Glory",
    tagline: "Healthy hair and edge preservation first",
    description: "Your hair is sacred. We reject tight tension, scorched scalps, or compromised edges. Protective styling must genuinely protect your natural crown.",
  },
  {
    number: "03",
    title: "Seen & Honoured",
    tagline: "An unhurried chair in a peaceful space",
    description: "Sitting in our chair is a retreat. Expect warm hospitality, sincere listening, and a calm atmosphere where you leave truly restored, not just styled.",
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: 'All' | 'Boho Bob' | 'Fulani & Cornrows' | 'French Curls' | 'Knotless' | 'Wigs';
  filterKey: string;
  image: string;
  caption: string;
  length?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Waist-Length Signature Knotless",
    category: "Knotless",
    filterKey: "knotless",
    image: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=900&q=80",
    caption: "Clean square-parting grid with featherlight tension and natural luster.",
    length: "Waist Length",
  },
  {
    id: "g2",
    title: "Boho Bob with Curled Spiral Ends",
    category: "Boho Bob",
    filterKey: "boho-bob",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=900&q=80",
    caption: "Soft shoulder-skimming bob with curled boho tendrils.",
    length: "Shoulder Length",
  },
  {
    id: "g3",
    title: "Intricate Fulani with Tribal Beads",
    category: "Fulani & Cornrows",
    filterKey: "fulani-cornrows",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
    caption: "Geometric precision cornrows meeting free-flowing back braids.",
    length: "Mid-Back",
  },
  {
    id: "g4",
    title: "Cascading French Curls in Jet Black",
    category: "French Curls",
    filterKey: "french-curls",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&q=80",
    caption: "Voluminous, romantic French curls with bouncy spiraled tips.",
    length: "Bum Length",
  },
  {
    id: "g5",
    title: "Sleek Straight-Back Stitch Cornrows",
    category: "Fulani & Cornrows",
    filterKey: "fulani-cornrows",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80",
    caption: "12 razor-sharp stitch braids down to the waist with clean edges.",
    length: "Waist Length",
  },
  {
    id: "g6",
    title: "Hand-Crafted HD Lace Frontal Wig",
    category: "Wigs",
    filterKey: "wigs",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=80",
    caption: "Custom plucked hairline with bleached knots for an undetectable melt.",
    length: "22 inches",
  },
  {
    id: "g7",
    title: "Knotless Boho with Human Hair Curls",
    category: "Knotless",
    filterKey: "knotless",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80",
    caption: "Full-bodied knotless braids with loose curls woven through.",
    length: "Waist Length",
  },
  {
    id: "g8",
    title: "Fulani Side Part Sew-In Hybrid",
    category: "Fulani & Cornrows",
    filterKey: "fulani-cornrows",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80",
    caption: "Artful cornrows in the crown paired with a seamless sew-in back.",
    length: "20 inches",
  },
  {
    id: "g9",
    title: "Mid-Back French Curl Symphony",
    category: "French Curls",
    filterKey: "french-curls",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
    caption: "Ultra-pliable, soft-touch French curl extensions with zero stiffness.",
    length: "Mid-Back",
  },
  {
    id: "g10",
    title: "Honey Blonde Smedium Boho Bob",
    category: "Boho Bob",
    filterKey: "boho-bob",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80",
    caption: "Shoulder-length textured bob with golden blonde accent curls.",
    length: "Shoulder Length",
  },
  {
    id: "g11",
    title: "Copper Radiance Knotless Braids",
    category: "Knotless",
    filterKey: "knotless",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
    caption: "Warm copper-toned knotless braids with ultra-clean symmetry.",
    length: "Waist Length",
  },
  {
    id: "g12",
    title: "Sleek Custom HD Closure Unit",
    category: "Wigs",
    filterKey: "wigs",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
    caption: "Glueless handmade closure unit with silk-pressed finish.",
    length: "18 inches",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FAQItem[] = [
  {
    question: "How long do appointments usually take?",
    answer: "Appointment duration varies depending on your chosen style, length, and size. Simple cornrows typically take 2.5 to 3 hours, whereas waist-length small knotless braids or French curls take between 4.5 and 6 hours. Because we prioritize gentle tension and perfection, we never rush. We recommend bringing a charger, snacks, or your favourite entertainment.",
    category: "Appointments",
  },
  {
    question: "How should I prepare my natural hair before arriving?",
    answer: "Please arrive with your hair freshly washed, thoroughly detangled from roots to ends, and blow-dried out straight with heat protectant (no heavy oils, grease, or heavy creams beforehand as these cause slip during braiding). If you require our wash and blow-dry preparation service, please add it at the time of booking so enough chair time is reserved.",
    category: "Preparation",
  },
  {
    question: "Is braiding hair included in the price?",
    answer: "Yes! High-grade pre-stretched braiding hair in standard natural tones (such as 1, 1B, 2, 4) is included in the quoted prices for all our braid styles, as well as the curled ends for Boho Bobs and French Curl extensions. If you are booking a sew-in style or custom wig, the human hair bundles are supplied separately or can be pre-ordered through our consultation.",
    category: "Hair & Supplies",
  },
  {
    question: "Can I request custom colours or ombre braiding hair?",
    answer: "Absolutely. We stock and can procure copper, honey blonde, burgundy, ash tones, and custom blend ombre packs. Please specify your preferred colour in your booking notes or message us at least 48 hours prior so your custom packs are prepped and ready.",
    category: "Hair & Supplies",
  },
  {
    question: "How long will my braids or protective style last?",
    answer: "With proper night-time maintenance (satin bonnet or silk scarf) and regular light scalp hydration, our knotless braids and French curls typically last 6 to 8 weeks. Cornrows and straight backs look their crispest for 3 to 4 weeks. We advise against keeping any protective style in for longer than 8 weeks to maintain optimal scalp and follicle health.",
    category: "Maintenance",
  },
  {
    question: "What is your deposit and cancellation policy?",
    answer: "To secure your slot, a £25 non-refundable deposit is required at booking, which is deducted from your final balance on the day. Appointments can be rescheduled once free of charge if at least 48 hours notice is provided. Cancellations within 48 hours or no-shows forfeit the deposit.",
    category: "Booking & Policies",
  },
  {
    question: "What is the difference between Knotless and Knotless Boho Braids?",
    answer: "Standard knotless braids are sleek, clean, and uniform throughout the entire shaft down to the sealed ends. Knotless Boho braids incorporate loose, wavy/curly strands of hair throughout the length and ends, giving a fuller, beachy, voluminous silhouette.",
    category: "Styles",
  },
  {
    question: "How does the custom wig construction work?",
    answer: "We offer both frontal and closure wig construction. You bring your bundles and closure/frontal (or purchase through our curated source). We measure your head circumference, construct the unit on a sewing machine with reinforced stretch caps, bleach the knots, pluck the hairline naturally, and style it to your preference.",
    category: "Wigs",
  },
  {
    question: "What happens if I am running late?",
    answer: "We offer a 15-minute grace period. If you are running more than 20 minutes late without prior communication, your appointment may need to be modified or rescheduled to avoid impacting the next client's chair time.",
    category: "Booking & Policies",
  },
  {
    question: "Which payment methods do you accept?",
    answer: "We accept all major debit/credit cards (Visa, Mastercard, Amex), Apple Pay, Google Pay, bank transfers, and cash for the remaining balance on the day of your appointment.",
    category: "Booking & Policies",
  },
];
