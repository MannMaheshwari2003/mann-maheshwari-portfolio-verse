
import HeroContent from "./hero/hero-content";
import HeroAvatar from "./hero/hero-avatar";
import ScrollIndicator from "./hero/scroll-indicator";
import BackgroundElements from "./hero/background-elements";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const HeroSection = () => {
  const { ref: contentRef, inView: contentInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24 lg:pt-16">
      <BackgroundElements />

      <div className="container px-4 md:px-6 relative z-10 w-full">
        <div 
          ref={contentRef}
          className={`flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-10rem)] lg:min-h-[calc(100vh-6rem)] transition-all duration-1000 ease-out ${
            contentInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <HeroContent />
          <HeroAvatar />
        </div>
      </div>
      
      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
