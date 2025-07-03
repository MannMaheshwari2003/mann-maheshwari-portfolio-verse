
import { motion } from "framer-motion";
import HeroContent from "./hero/hero-content";
import HeroAvatar from "./hero/hero-avatar";
import ScrollIndicator from "./hero/scroll-indicator";
import BackgroundElements from "./hero/background-elements";

const HeroSection = () => {
  const staggerItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24 lg:pt-16">
      <BackgroundElements />

      <div className="container px-4 md:px-6 relative z-10 w-full">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-10rem)] lg:min-h-[calc(100vh-6rem)]"
          variants={staggerItems}
          initial="hidden"
          animate="visible"
        >
          <HeroContent />
          <HeroAvatar />
        </motion.div>
      </div>
      
      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
