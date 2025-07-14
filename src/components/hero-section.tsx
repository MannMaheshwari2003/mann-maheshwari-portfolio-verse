
import HeroContent from "./hero/hero-content";
import HeroAvatar from "./hero/hero-avatar";
import ScrollIndicator from "./hero/scroll-indicator";
import BackgroundElements from "./hero/background-elements";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useResponsive } from "@/hooks/use-responsive";

const HeroSection = () => {
  const { ref: contentRef, inView: contentInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: avatarRef, inView: avatarInView } = useScrollAnimation({ threshold: 0.3, delay: 300 });
  const { isMobile, isTablet } = useResponsive();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20 lg:pt-12">
      {/* Enhanced gradient backgrounds with proper HSL colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8 animate-breathe"></div>
      <div 
        className={`absolute ${isMobile ? 'top-1/3 left-1/5 w-64 h-64' : 'top-1/4 left-1/4 w-80 sm:w-96 h-80 sm:h-96'} bg-gradient-radial from-accent/15 via-primary/8 to-transparent rounded-full blur-3xl animate-float-orb`}
      ></div>
      <div 
        className={`absolute ${isMobile ? 'bottom-1/3 right-1/5 w-56 h-56' : 'bottom-1/4 right-1/4 w-72 sm:w-80 h-72 sm:h-80'} bg-gradient-radial from-secondary/15 via-accent/8 to-transparent rounded-full blur-3xl animate-float-orb`}
        style={{ animationDelay: '10s' }}
      ></div>
      
      <BackgroundElements />

      <div className="container px-4 md:px-6 relative z-10 w-full">
        <div 
          ref={contentRef}
          className={`flex flex-col ${isTablet ? 'lg:flex-row' : 'xl:flex-row'} items-center justify-between gap-8 sm:gap-12 min-h-[calc(100vh-6rem)] sm:min-h-[calc(100vh-8rem)] lg:min-h-[calc(100vh-5rem)] transition-all duration-1000 ease-out ${
            contentInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className={`transition-all duration-1200 ease-out ${isMobile ? 'w-full' : 'flex-1'} ${
            contentInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <HeroContent />
          </div>
          <div 
            ref={avatarRef}
            className={`transition-all duration-1000 ease-out ${isMobile ? 'w-full mt-8' : 'flex-shrink-0'} ${
              avatarInView ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'
            }`}
          >
            <HeroAvatar />
          </div>
        </div>
      </div>
      
      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
