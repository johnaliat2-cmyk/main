import React from 'react';

interface HairToolIconProps {
  className?: string;
}

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

/* 1. Rat-tail comb */
export const RatTailComb: React.FC<HairToolIconProps> = ({ className }) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M3 18.5 14 7.5" />
    <path d="M14 7.5 20 4" />
    <path d="M4.5 20 5.5 19" />
    <path d="M6.5 15h3" />
    <path d="M9 12.5h3" />
    <path d="M11.5 10h3" />
  </svg>
);

/* 2. Scissors */
export const ScissorsIcon: React.FC<HairToolIconProps> = ({ className }) => (
  <svg {...base} className={className} aria-hidden="true">
    <circle cx="6" cy="18" r="2.5" />
    <circle cx="6" cy="6" r="2.5" />
    <path d="M8.1 16.4 20 4" />
    <path d="M8.1 7.6 20 20" />
    <path d="M12.5 12 20 4" />
  </svg>
);

/* 3. Hair clip */
export const HairClipIcon: React.FC<HairToolIconProps> = ({ className }) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M4 20 16 8" />
    <path d="M8 4v5" />
    <path d="M12 3v5" />
    <path d="M16 4v5" />
    <path d="M5 18c2 3 6 3 8 0" />
  </svg>
);

/* 4. Braiding hair bundle */
export const HairBundleIcon: React.FC<HairToolIconProps> = ({ className }) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M9 4c-1 6-1 10 0 16" />
    <path d="M12 4c-1 6-1 10 0 16" />
    <path d="M15 4c-1 6-1 10 0 16" />
    <path d="M6 20h12" />
    <path d="M7 4h10" />
  </svg>
);

/* 5. Spray bottle */
export const SprayBottleIcon: React.FC<HairToolIconProps> = ({ className }) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M10 8h4a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z" />
    <path d="M12 8V5" />
    <path d="M12 5h4" />
    <path d="M18 4h1" />
    <path d="M18 7h1" />
    <path d="M18 10h1" />
  </svg>
);

/* 6. Crochet hook needle */
export const CrochetHookIcon: React.FC<HairToolIconProps> = ({ className }) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M20 4 6 18" />
    <path d="M4.5 20.5c1.5 0 2.5-1 2.5-2.5" />
    <path d="M18 3.5c1 .3 1.5 1 1.8 2" />
  </svg>
);

/* 7. Wide-tooth comb */
export const WideToothComb: React.FC<HairToolIconProps> = ({ className }) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M3 8h18" />
    <path d="M4 8v9" />
    <path d="M8 8v9" />
    <path d="M12 8v9" />
    <path d="M16 8v9" />
    <path d="M20 8v9" />
  </svg>
);

/* 8. Edge brush */
export const EdgeBrush: React.FC<HairToolIconProps> = ({ className }) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M5 4 10 12" />
    <path d="M10 12 8 20" />
    <path d="M8 20h9" />
    <path d="M17 20v-5" />
    <path d="M14 15h6" />
    <path d="M14 15v5" />
  </svg>
);

export const HAIR_TOOLS: React.FC<HairToolIconProps>[] = [
  RatTailComb,
  ScissorsIcon,
  HairClipIcon,
  HairBundleIcon,
  SprayBottleIcon,
  CrochetHookIcon,
  WideToothComb,
  EdgeBrush,
];
