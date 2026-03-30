
import HeroContent from "./hero/hero-content";
import HeroAvatar from "./hero/hero-avatar";
import ScrollIndicator from "./hero/scroll-indicator";
import BackgroundElements from "./hero/background-elements";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useResponsive } from "@/hooks/use-responsive";
import { useTouchDevice } from "@/hooks/use-mobile";

const HeroSection = () => {
  const { ref: contentRef, inView: contentInView } = useScrollAnimation({ threshold: 0.2 });
  const { isMobile, isTablet, getContainerClasses, getSectionSpacing } = useResponsive();
  const isTouchDevice = useTouchDevice();

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      aria-label="Introduction"
    >
      <BackgroundElements />

      <div className={`${getContainerClasses()} relative z-10 w-full max-w-6xl`}>
        <div 
          ref={contentRef}
          className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between min-h-[calc(100vh-8rem)] py-20 transition-all duration-700 ease-out ${
            contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className={`flex-1 ${isMobile ? 'order-2' : 'order-1'}`}>
            <HeroContent />
          </div>
          <div className={`flex-shrink-0 ${isMobile ? 'order-1' : 'order-2'}`}>
            <HeroAvatar />
          </div>
        </div>
      </div>
      
      {!isTouchDevice && <ScrollIndicator />}
    </section>
  );
};

export default HeroSection;
