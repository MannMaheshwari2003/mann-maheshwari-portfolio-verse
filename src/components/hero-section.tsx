
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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <BackgroundElements />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
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
