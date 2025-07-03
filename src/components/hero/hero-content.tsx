
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import ResumeDownloadButton from "./resume-download-button";

const HeroContent = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.7, ease: "easeOut" }
    })
  };

  return (
    <div className="text-center lg:text-left max-w-2xl">
      <motion.span 
        className="inline-block py-2 px-4 rounded-full text-xs sm:text-sm font-medium bg-primary/10 text-primary mb-4 sm:mb-6"
        variants={fadeIn}
        custom={0}
      >
        Full Stack Developer | Future Tech Leader
      </motion.span>
      
      <motion.h1 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading mb-4 sm:mb-6 leading-tight"
        variants={fadeIn}
        custom={1}
      >
        Mann <span className="text-gradient">Maheshwari</span>
      </motion.h1>
      
      <motion.p 
        className="text-base sm:text-lg md:text-xl text-foreground/80 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 px-4 sm:px-0"
        variants={fadeIn}
        custom={2}
      >
        Creating elegant and performant web experiences with modern technologies and innovative solutions.
      </motion.p>
      
      <motion.div 
        className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 px-4 sm:px-0"
        variants={fadeIn}
        custom={3}
      >
        <ResumeDownloadButton />
        <Button variant="outline" size="lg" className="hover:shadow-lg border border-primary/50 group w-full sm:w-auto" asChild>
          <a href="#contact">
            <Mail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
            Contact Me
          </a>
        </Button>
      </motion.div>
    </div>
  );
};

export default HeroContent;
