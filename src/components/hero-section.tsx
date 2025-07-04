
import HeroContent from "./hero/hero-content";
import HeroAvatar from "./hero/hero-avatar";
import ScrollIndicator from "./hero/scroll-indicator";
import BackgroundElements from "./hero/background-elements";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24 lg:pt-16">
      <BackgroundElements />

      <div className="container px-4 md:px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-10rem)] lg:min-h-[calc(100vh-6rem)]">
          <HeroContent />
          <HeroAvatar />
        </div>
      </div>
      
      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
