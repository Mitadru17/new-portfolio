import { useState, useEffect } from 'react';

interface BreakpointValues {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLarge: boolean;
  screenWidth: number;
}

export function useResponsive(): BreakpointValues {
  const [values, setValues] = useState<BreakpointValues>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLarge: false,
    screenWidth: 0,
  });

  useEffect(() => {
    const updateValues = () => {
      const width = window.innerWidth;
      setValues({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024 && width < 1440,
        isLarge: width >= 1440,
        screenWidth: width,
      });
    };

    // Initial call
    updateValues();

    // Add event listener
    window.addEventListener('resize', updateValues);

    // Cleanup
    return () => window.removeEventListener('resize', updateValues);
  }, []);

  return values;
}

// Responsive animation delays based on device
export const getStaggerDelay = (index: number, isMobile: boolean): string => {
  const baseDelay = isMobile ? 0.05 : 0.1;
  return `${index * baseDelay}s`;
};

// Responsive sizing
export const getResponsiveSize = (
  mobile: number,
  tablet: number,
  desktop: number,
  screenWidth: number
): number => {
  if (screenWidth < 768) return mobile;
  if (screenWidth < 1024) return tablet;
  return desktop;
};
