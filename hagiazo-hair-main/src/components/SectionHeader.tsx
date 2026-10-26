import React from 'react';

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  italicWord?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  kicker,
  title,
  italicWord,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignmentClass =
    align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center mx-auto';

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${alignmentClass} ${className}`}>
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-white">
        {title}{' '}
        {italicWord && (
          <span className="font-serif-accent font-normal normal-case italic text-neutral-300">
            {italicWord}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed text-balance">
          {subtitle}
        </p>
      )}

      <div
        className={`mt-4 h-[1px] w-12 bg-white/30 ${
          align === 'left' ? '' : align === 'right' ? 'ml-auto' : 'mx-auto'
        }`}
      />
    </div>
  );
};
