
import { useState, useEffect } from 'react';

type BreakpointKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type OrientationType = 'portrait' | 'landscape';
type DeviceType = 'mobile' | 'tablet' | 'desktop' | 'large-desktop';

interface Breakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
}

interface ViewportInfo {
  width: number;
  height: number;
  orientation: OrientationType;
  aspectRatio: number;
  devicePixelRatio: number;
}

const breakpoints: Breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export function useResponsive() {
  const [viewportInfo, setViewportInfo] = useState<ViewportInfo>({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768,
    orientation: 'landscape',
    aspectRatio: 16/9,
    devicePixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio : 1,
  });

  useEffect(() => {
    function updateViewportInfo() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const orientation: OrientationType = height > width ? 'portrait' : 'landscape';
      
      setViewportInfo({
        width,
        height,
        orientation,
        aspectRatio: width / height,
        devicePixelRatio: window.devicePixelRatio || 1,
      });
    }

    updateViewportInfo();
    
    const mediaQuery = window.matchMedia('(orientation: portrait)');
    const handleOrientationChange = () => {
      // Small delay to ensure dimensions are updated
      setTimeout(updateViewportInfo, 100);
    };

    window.addEventListener('resize', handleOrientationChange);
    mediaQuery.addEventListener('change', handleOrientationChange);
    
    return () => {
      window.removeEventListener('resize', handleOrientationChange);
      mediaQuery.removeEventListener('change', handleOrientationChange);
    };
  }, []);

  // Device detection with orientation consideration
  const getDeviceType = (): DeviceType => {
    const { width, orientation } = viewportInfo;
    
    if (width >= breakpoints['2xl']) return 'large-desktop';
    if (width >= breakpoints.lg) return 'desktop';
    if (width >= breakpoints.md) return 'tablet';
    return 'mobile';
  };

  const deviceType = getDeviceType();
  const isMobile = deviceType === 'mobile';
  const isTablet = deviceType === 'tablet';
  const isDesktop = deviceType === 'desktop' || deviceType === 'large-desktop';
  const isLargeDesktop = deviceType === 'large-desktop';
  
  // Orientation-aware responsive helpers
  const isSmallScreen = viewportInfo.width < breakpoints.md;
  const isMediumScreen = viewportInfo.width >= breakpoints.md && viewportInfo.width < breakpoints.lg;
  const isLargeScreen = viewportInfo.width >= breakpoints.lg;
  
  // Layout helpers
  const getOptimalColumns = (maxColumns: number = 3): number => {
    if (isLargeDesktop) return Math.min(maxColumns, 4);
    if (isDesktop) return Math.min(maxColumns, 3);
    if (isTablet && viewportInfo.orientation === 'landscape') return Math.min(maxColumns, 3);
    if (isTablet) return Math.min(maxColumns, 2);
    return 1;
  };

  const getCardLayout = () => {
    if (isMobile) {
      return {
        columns: 'grid-cols-1',
        gap: 'gap-4',
        padding: 'p-4',
        cardPadding: 'p-4'
      };
    }
    if (isTablet) {
      return viewportInfo.orientation === 'landscape' 
        ? {
            columns: 'grid-cols-2 lg:grid-cols-3',
            gap: 'gap-6',
            padding: 'p-6',
            cardPadding: 'p-5'
          }
        : {
            columns: 'grid-cols-1 sm:grid-cols-2',
            gap: 'gap-5',
            padding: 'p-5',
            cardPadding: 'p-4'
          };
    }
    
    return {
      columns: isLargeDesktop ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      gap: 'gap-6 lg:gap-8',
      padding: 'p-6 lg:p-8',
      cardPadding: 'p-6'
    };
  };

  const getCurrentBreakpoint = (): BreakpointKey => {
    const { width } = viewportInfo;
    if (width >= breakpoints['2xl']) return '2xl';
    if (width >= breakpoints.xl) return 'xl';
    if (width >= breakpoints.lg) return 'lg';
    if (width >= breakpoints.md) return 'md';
    if (width >= breakpoints.sm) return 'sm';
    return 'xs';
  };

  const isBreakpoint = (breakpoint: BreakpointKey): boolean => {
    return viewportInfo.width >= breakpoints[breakpoint];
  };

  const getResponsiveValue = <T,>(values: Partial<Record<BreakpointKey, T>>): T | undefined => {
    const currentBreakpoint = getCurrentBreakpoint();
    const breakpointOrder: BreakpointKey[] = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs'];
    
    for (const bp of breakpointOrder) {
      if (viewportInfo.width >= breakpoints[bp] && values[bp] !== undefined) {
        return values[bp];
      }
    }
    return undefined;
  };

  const getContainerClasses = () => {
    return getResponsiveValue({
      xs: 'container mx-auto px-4',
      sm: 'container mx-auto px-6',
      lg: 'container mx-auto px-8',
      xl: 'container mx-auto px-12'
    }) || 'container mx-auto px-4';
  };

  const getSectionSpacing = () => {
    return getResponsiveValue({
      xs: 'py-12',
      sm: 'py-16',
      lg: 'py-20',
      xl: 'py-24'
    }) || 'py-12';
  };

  return {
    ...viewportInfo,
    deviceType,
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
    getCurrentBreakpoint,
    isBreakpoint,
    getResponsiveValue,
    getOptimalColumns,
    getCardLayout,
    getContainerClasses,
    getSectionSpacing,
    breakpoints,
  };
}
