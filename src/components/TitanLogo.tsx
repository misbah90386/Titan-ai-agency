import React from 'react';

interface TitanIconProps {
  className?: string;
  size?: number | string;
}

export const TitanIcon: React.FC<TitanIconProps> = ({ className = 'w-10 h-10', size }) => {
  return (
    <img
      src="/titan-icon.png"
      alt="TITAN AI Emblem"
      className={`object-contain shrink-0 ${className}`}
      style={size ? { width: size, height: size } : undefined}
      loading="eager"
    />
  );
};

export interface TitanFullLogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export const TitanFullLogo: React.FC<TitanFullLogoProps> = ({
  variant = 'dark',
  className = 'h-12 w-auto'
}) => {
  return (
    <img
      src={variant === 'dark' ? '/titan-logo-dark.png' : '/titan-logo.png'}
      alt="TITAN AI AGENCY"
      className={`object-contain ${className}`}
      loading="eager"
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
  iconClassName = 'w-10 h-10 sm:w-11 sm:h-11',
  titleClassName,
  subtitleClassName,
  useFullImage = false
}) => {
  const isDark = variant === 'dark';

  if (useFullImage) {
    return (
      <TitanFullLogo
        variant={variant}
        className={className || 'h-12 sm:h-14 w-auto'}
      />
    );
  }

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Exact 3D Metallic Emblem Icon from provided logo */}
      <div className="relative shrink-0 flex items-center justify-center">
        <TitanIcon className={iconClassName} />
      </div>

      {/* Typography */}
      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-display font-extrabold tracking-[0.16em] ${
                titleClassName || 'text-xl sm:text-[22px] md:text-2xl'
              } ${isDark ? 'text-white' : 'text-[#071A33]'}`}
            >
              TIT
              {/* Custom 'A' with cyan chevron & blue dot matching the logo */}
              <span className="relative inline-block text-[#00D1FF]">
                A
                <span className="absolute bottom-[2px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#00D1FF]" />
              </span>
              N
            </span>
          </div>
          <span
            className={`font-bold tracking-[0.28em] text-[#00D1FF] uppercase mt-1 ${
              subtitleClassName || 'text-[11px] sm:text-[12px]'
            }`}
          >
            AI AGENCY
          </span>
          {showTagline && (
            <span
              className={`text-[9px] font-medium tracking-wider mt-1 ${
                isDark ? 'text-[#8FA0BA]' : 'text-[#536477]'
              }`}
            >
              Digital Solutions Built for Business
            </span>
          )}
        </div>
      )}
    </div>
  );
};
