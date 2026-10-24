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
  className = 'h-11 sm:h-12 w-auto'
}) => {
  return (
    <img
      src="/titan-logo.webp"
      alt="TITAN AI AGENCY"
      className={`object-contain rounded-xl shadow-xs transition-transform duration-200 ${className}`}
      loading="eager"
      fetchPriority="high"
      decoding="async"
      width={180}
      height={48}
    />
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
  variant = 'dark',
  showTagline = false,
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
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <img
        src="/titan-logo.webp"
        alt="TITAN AI AGENCY"
        className={`object-contain rounded-xl bg-white/95 p-1 border border-white/20 shadow-xs transition-transform duration-200 group-hover:scale-[1.02] ${iconClassName}`}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        width={180}
        height={48}
      />
    </div>
  );
};
