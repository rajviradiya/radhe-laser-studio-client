import React from 'react';

/**
 * Official Brand Logo for RADHE LASER STUDIO
 * Uses authentic logo artwork:
 * - Precision CO2 laser emitter nozzle with spark burst
 * - Official bold industrial "RADHE LASER" & "STUDIO" typography
 * - High-contrast light & dark variant support
 * - Multiple layout options: 'horizontal' (navbar/footer), 'stacked' (login/cards), 'icon' (favicon/badges)
 */
export const Logo = ({
  variant = 'dark', // 'dark' (for light backgrounds) | 'light' (for dark backgrounds)
  size = 'md', // 'sm' | 'md' | 'lg' | 'xl'
  layout = 'horizontal', // 'horizontal' | 'stacked' | 'icon'
  showTagline = true,
  className = '',
}) => {
  const isLightMode = variant === 'dark';

  // Responsive sizing for horizontal lockup
  const horizontalSizes = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11 md:h-12',
    lg: 'h-13 sm:h-15',
    xl: 'h-16 sm:h-20',
  };

  // Sizing for stacked lockup (icon on top, text below)
  const stackedSizes = {
    sm: 'h-14 w-auto',
    md: 'h-20 w-auto',
    lg: 'h-28 w-auto',
    xl: 'h-36 w-auto',
  };

  // Sizing for icon only
  const iconSizes = {
    sm: 'h-8 w-auto',
    md: 'h-10 w-auto',
    lg: 'h-14 w-auto',
    xl: 'h-20 w-auto',
  };

  const taglineSizes = {
    sm: 'text-[8px]',
    md: 'text-[8.5px] sm:text-[9.5px]',
    lg: 'text-[10px] sm:text-[11px]',
    xl: 'text-xs',
  };

  // Asset selection
  const horizontalSrc = isLightMode ? '/logo-horizontal.png' : '/logo-darkbg.png';
  const stackedSrc = isLightMode ? '/logo.png' : '/logo-vertical-darkbg.png';
  const iconSrc = isLightMode ? '/logo-icon.png' : '/logo-icon.png';

  if (layout === 'stacked') {
    return (
      <div className={`flex flex-col items-center select-none ${className}`}>
        <img
          src={stackedSrc}
          alt="RADHE LASER STUDIO"
          className={`${stackedSizes[size]} object-contain transition-transform duration-300 group-hover:scale-[1.02]`}
          loading="eager"
        />
        {showTagline && (
          <p
            className={`tracking-widest uppercase font-semibold mt-2 text-center ${taglineSizes[size]} ${
              isLightMode ? 'text-slate-500' : 'text-slate-400'
            }`}
          >
            Precision <span className="text-[#C2272D]">•</span> Creativity{' '}
            <span className="text-[#C2272D]">•</span> Customization
          </p>
        )}
      </div>
    );
  }

  if (layout === 'icon') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src={iconSrc}
          alt="RADHE LASER STUDIO"
          className={`${iconSizes[size]} object-contain transition-transform duration-300 group-hover:scale-105`}
          loading="eager"
        />
      </div>
    );
  }

  // Default: Horizontal lockup (ideal for Navbar & Footer)
  return (
    <div className={`inline-flex flex-col select-none ${className}`}>
      <div className="flex items-center">
        <img
          src={horizontalSrc}
          alt="RADHE LASER STUDIO"
          className={`${horizontalSizes[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]`}
          loading="eager"
        />
      </div>

      {showTagline && (
        <p
          className={`tracking-widest uppercase font-semibold mt-1 pl-1 leading-tight ${taglineSizes[size]} ${
            isLightMode ? 'text-slate-500' : 'text-slate-400'
          }`}
        >
          Precision <span className="text-[#C2272D]">•</span> Creativity{' '}
          <span className="text-[#C2272D]">•</span> Customization
        </p>
      )}
    </div>
  );
};
