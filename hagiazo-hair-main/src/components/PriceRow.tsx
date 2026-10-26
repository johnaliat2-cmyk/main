import React from 'react';

interface PriceRowProps {
  name: string;
  price: number;
  highlight?: boolean;
}

export const PriceRow: React.FC<PriceRowProps> = ({ name, price, highlight = false }) => {
  return (
    <div className="flex items-baseline justify-between gap-2 sm:gap-4 py-2 border-b border-neutral-900/60 group hover:border-neutral-700 transition-colors">
      <span
        className={`font-heading text-sm sm:text-base tracking-wider uppercase transition-colors ${
          highlight ? 'text-white font-semibold' : 'text-neutral-300 group-hover:text-white'
        }`}
      >
        {name}
      </span>
      <span className="flex-1 border-b border-dotted border-neutral-800 mx-2 self-center mb-1 group-hover:border-neutral-600 transition-colors" />
      <span className="font-heading text-base sm:text-lg font-bold text-white tabular-nums tracking-wide shrink-0">
        £{price}
      </span>
    </div>
  );
};
