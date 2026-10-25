import React from 'react';

interface TitanIconProps {
  className?: string;
  size?: number | string;
}

export const TitanIcon: React.FC<TitanIconProps> = ({ className = 'w-10 h-10', size }) => {
  return (
    <img
      src="/titan-icon.webp"
      alt="TITAN AI Emblem"
      className={`object-contain shrink-0 rounded-lg ${className}`}
      style={size ? { width: size, height: size } : undefined}
      loading="eager"
      fetchPriority="high"
      decoding="async"
      width={40}
      height={40}
    />
  );
};

export interface TitanFullLogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export const TitanFullLogo: React.FC<TitanFullLogoProps> = ({
  variant = 'light',
  className = 'h-10 sm:h-12 w-auto'
}) => {
  const isDark = variant === 'dark';
  return (
    <div className="flex items-center gap-2.5 sm:gap-3 select-none shrink-0 whitespace-nowrap">
      <img
        src="/titan-icon.webp"
        alt="TITAN AI Emblem"
        className={`object-contain rounded-xl shrink-0 transition-transform duration-200 group-hover:scale-[1.02] ${className}`}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        width={44}
        height={44}
      />
      <div className="flex flex-col text-left leading-tight shrink-0 whitespace-nowrap">
        <span className={`font-display font-extrabold text-base sm:text-lg lg:text-xl tracking-wider ${isDark ? 'text-[#071A33]' : 'text-white'}`}>
          TITAN <span className="text-[#00D1FF]">AI</span>
        </span>
        <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.26em] text-[#00D1FF] font-bold uppercase">
          AGENCY
        </span>
      </div>
    </div>
  );
};

interface TitanLogoProps {
  variant?: 'dark' | 'light';
  showTagline?: boolean;
  showText?: boolean;
  className?: string;
  iconClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  useFullImage?: boolean;
}

export const TitanLogo: React.FC<TitanLogoProps> = ({
  variant = 'light',
  showTagline = true,
  showText = true,
  className = '',
  iconClassName = 'h-10 sm:h-12 w-auto',
  useFullImage = false
}) => {
  const isDark = variant === 'dark';

  if (useFullImage) {
    return <TitanFullLogo variant={variant} className={iconClassName} />;
  }

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none shrink-0 whitespace-nowrap ${className}`}>
      <img
        src="/titan-icon.webp"
        alt="TITAN AI Emblem"
        className={`object-contain rounded-xl shrink-0 transition-transform duration-200 group-hover:scale-[1.02] ${iconClassName}`}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        width={44}
        height={44}
      />
      {showText && (
        <div className="flex flex-col text-left leading-tight shrink-0 whitespace-nowrap">
          <span className={`font-display font-extrabold text-base sm:text-lg lg:text-xl tracking-wider ${isDark ? 'text-[#071A33]' : 'text-white'}`}>
            TITAN <span className="text-[#00D1FF]">AI</span>
          </span>
          <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.26em] text-[#00D1FF] font-bold uppercase">
            AGENCY
          </span>
        </div>
      )}
    </div>
  );
};
