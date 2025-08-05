
import HeroContent from "./hero/hero-content";
import HeroAvatar from "./hero/hero-avatar";
import ScrollIndicator from "./hero/scroll-indicator";
import BackgroundElements from "./hero/background-elements";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useResponsive } from "@/hooks/use-responsive";
import { useTouchDevice } from "@/hooks/use-mobile";

const HeroSection = () => {
  const { ref: contentRef, inView: contentInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: avatarRef, inView: avatarInView } = useScrollAnimation({ threshold: 0.3, delay: 300 });
  
  const { 
    getContainerClasses, 
    getSectionSpacing, 
    isMobile, 
    isTablet, 
    orientation, 
    deviceType,
    aspectRatio 
  } = useResponsive();
  const isTouchDevice = useTouchDevice();

  // Enhanced responsive layout calculations
  const getHeroLayout = () => {
    if (isMobile) {
      return {
        direction: 'flex-col',
        gap: orientation === 'portrait' ? 'gap-6' : 'gap-4',
        contentOrder: 'order-2',
        avatarOrder: 'order-1',
        contentWidth: 'w-full',
        avatarMargin: 'mb-2'
      };
    }
    
    if (isTablet) {
      return orientation === 'landscape' 
        ? {
            direction: 'lg:flex-row',
            gap: 'gap-8',
            contentOrder: 'order-1',
            avatarOrder: 'order-2',
            contentWidth: 'flex-1',
            avatarMargin: ''
          }
        : {
            direction: 'flex-col',
            gap: 'gap-6',
            contentOrder: 'order-2',
            avatarOrder: 'order-1',
            contentWidth: 'w-full',
            avatarMargin: 'mb-4'
          };
    }
    
    return {
      direction: 'xl:flex-row',
      gap: 'gap-12',
      contentOrder: 'order-1',
      avatarOrder: 'order-2',
      contentWidth: 'flex-1',
      avatarMargin: ''
    };
  };

  const heroLayout = getHeroLayout();

  // Dynamic background orb sizing based on device and orientation
  const getOrbSizing = () => {
    const baseSize = isMobile ? 48 : isTablet ? 64 : 80;
    const orientationMultiplier = orientation === 'portrait' ? 0.8 : 1;
    const size = Math.round(baseSize * orientationMultiplier);
    
    return {
      primary: {
        size: `w-${size} h-${size}`,
        position: isMobile 
          ? 'top-1/4 left-1/6' 
          : isTablet 
            ? 'top-1/4 left-1/5' 
            : 'top-1/4 left-1/4'
      },
      secondary: {
        size: `w-${Math.round(size * 0.85)} h-${Math.round(size * 0.85)}`,
        position: isMobile 
          ? 'bottom-1/4 right-1/6' 
          : isTablet
            ? 'bottom-1/4 right-1/5'
            : 'bottom-1/4 right-1/4'
      }
    };
  };

  const orbSizing = getOrbSizing();

  return (
    <section 
      id="hero" 
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${getSectionSpacing()}`}
    >
      {/* Enhanced responsive gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8 animate-breathe"></div>
      
      <div 
        className={`absolute ${orbSizing.primary.position} ${orbSizing.primary.size} bg-gradient-radial from-accent/15 via-primary/8 to-transparent rounded-full blur-3xl animate-float-orb`}
      ></div>
      <div 
        className={`absolute ${orbSizing.secondary.position} ${orbSizing.secondary.size} bg-gradient-radial from-secondary/15 via-accent/8 to-transparent rounded-full blur-3xl animate-float-orb`}
        style={{ animationDelay: '10s' }}
      ></div>
      
      <BackgroundElements />

      <div className={`${getContainerClasses()} relative z-10 w-full max-w-7xl`}>
        <div 
          ref={contentRef}
          className={`flex ${heroLayout.direction} ${heroLayout.gap} items-center justify-between min-h-[calc(100vh-8rem)] transition-all duration-1000 ease-out ${
            contentInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className={`transition-all duration-1200 ease-out ${heroLayout.contentWidth} ${heroLayout.contentOrder} ${
            contentInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <HeroContent />
          </div>
          <div 
            ref={avatarRef}
            className={`transition-all duration-1000 ease-out flex-shrink-0 ${heroLayout.avatarOrder} ${heroLayout.avatarMargin} ${
              avatarInView ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'
            }`}
          >
            <HeroAvatar />
          </div>
        </div>
      </div>
      
      {!isTouchDevice && <ScrollIndicator />}
    </section>
  );
};

export default HeroSection;
