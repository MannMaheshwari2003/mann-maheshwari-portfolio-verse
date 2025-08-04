
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
  const { isMobile, isTablet, getCurrentBreakpoint, getResponsiveValue } = useResponsive();
  const isTouchDevice = useTouchDevice();

  const containerPadding = getResponsiveValue({
    xs: 'px-4',
    sm: 'px-6', 
    lg: 'px-8',
    xl: 'px-12'
  }) || 'px-4';

  const sectionSpacing = getResponsiveValue({
    xs: 'pt-20 pb-8',
    sm: 'pt-24 pb-12',
    lg: 'pt-16 pb-16',
    xl: 'pt-20 pb-20'
  }) || 'pt-20 pb-8';

  return (
    <section 
      id="hero" 
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${sectionSpacing}`}
    >
      {/* Enhanced gradient backgrounds with proper HSL colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8 animate-breathe"></div>
      <div 
        className={`absolute ${
          isMobile 
            ? 'top-1/4 left-1/6 w-48 h-48' 
            : isTablet 
              ? 'top-1/4 left-1/5 w-64 h-64'
              : 'top-1/4 left-1/4 w-80 h-80'
        } bg-gradient-radial from-accent/15 via-primary/8 to-transparent rounded-full blur-3xl animate-float-orb`}
      ></div>
      <div 
        className={`absolute ${
          isMobile 
            ? 'bottom-1/4 right-1/6 w-40 h-40' 
            : isTablet
              ? 'bottom-1/4 right-1/5 w-56 h-56'
              : 'bottom-1/4 right-1/4 w-72 h-72'
        } bg-gradient-radial from-secondary/15 via-accent/8 to-transparent rounded-full blur-3xl animate-float-orb`}
        style={{ animationDelay: '10s' }}
      ></div>
      
      <BackgroundElements />

      <div className={`container ${containerPadding} relative z-10 w-full max-w-7xl`}>
        <div 
          ref={contentRef}
          className={`flex flex-col ${
            isMobile 
              ? 'gap-8' 
              : isTablet 
                ? 'lg:flex-row gap-10' 
                : 'xl:flex-row gap-12'
          } items-center justify-between min-h-[calc(100vh-8rem)] transition-all duration-1000 ease-out ${
            contentInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className={`transition-all duration-1200 ease-out ${
            isMobile ? 'w-full order-2' : 'flex-1 order-1'
          } ${
            contentInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <HeroContent />
          </div>
          <div 
            ref={avatarRef}
            className={`transition-all duration-1000 ease-out ${
              isMobile 
                ? 'w-full order-1 mb-4' 
                : 'flex-shrink-0 order-2'
            } ${
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
