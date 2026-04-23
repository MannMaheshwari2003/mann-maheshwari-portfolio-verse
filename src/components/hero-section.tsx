import HeroContent from "./hero/hero-content";
import HeroAvatar from "./hero/hero-avatar";
import ScrollIndicator from "./hero/scroll-indicator";
import BackgroundElements from "./hero/background-elements";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 md:pt-28 border-b-2 md:border-b-4 border-foreground overflow-hidden"
      aria-label="Introduction"
    >
      <BackgroundElements />

      <div className="container mx-auto max-w-7xl px-4 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center min-h-[calc(100vh-7rem)] py-12 md:py-20 relative">
        {/* Content: 7 cols */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <HeroContent />
        </div>

        {/* Avatar composition: 5 cols, on a blue color-block panel */}
        <div className="lg:col-span-5 order-1 lg:order-2 relative">
          <div className="relative bg-[hsl(var(--secondary))] border-2 md:border-4 border-foreground p-6 md:p-10 shadow-bauhaus-xl">
            {/* dot grid overlay */}
            <div aria-hidden="true" className="absolute inset-0 dot-grid-light opacity-40 pointer-events-none" />
            <HeroAvatar />
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
