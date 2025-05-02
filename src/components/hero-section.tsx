
import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowDown, ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const HeroSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.7, ease: "easeOut" }
    })
  };

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
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
      
      {/* Animated circle */}
      <motion.div 
        className="absolute w-[500px] h-[500px] rounded-full border border-primary/20 opacity-30"
        style={{ top: '50%', left: '50%', x: '-50%', y: '-50%' }}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 8, 
          ease: "easeInOut", 
          repeat: Infinity,
        }}
      />
      
      <motion.div 
        className="absolute w-[700px] h-[700px] rounded-full border border-secondary/20 opacity-20"
        style={{ top: '50%', left: '50%', x: '-50%', y: '-50%' }}
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ 
          duration: 12, 
          ease: "easeInOut", 
          repeat: Infinity,
          delay: 1
        }}
      />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          variants={staggerItems}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center lg:text-left max-w-2xl">
            <motion.span 
              className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6"
              variants={fadeIn}
              custom={0}
            >
              Web Developer | Future Tech Leader
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight"
              variants={fadeIn}
              custom={1}
            >
              Mann <span className="text-gradient">Maheshwari</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-foreground/80 mb-8 max-w-lg mx-auto lg:mx-0"
              variants={fadeIn}
              custom={2}
            >
              Creating elegant and performant web experiences with modern technologies and innovative solutions.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-4"
              variants={fadeIn}
              custom={3}
            >
              <Button size="lg" className="btn-gradient hover:shadow-lg hover:shadow-primary/20 group">
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" className="hover:shadow-lg border border-primary/50 group" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Contact Me
                </a>
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            className="relative"
            variants={fadeIn}
            custom={4}
          >
            {/* Avatar with decorative ring */}
            <div className="relative">
              <motion.div 
                className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
              />
              <motion.div 
                className="absolute -inset-8 rounded-full border-2 border-dashed border-secondary/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
              />
              
              <div className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-card glass shadow-xl shadow-primary/10 hover:scale-105 transition-all duration-300">
                <img 
                  src="/lovable-uploads/331208d5-833a-4bdd-85f2-97e0ab0aabb1.png" 
                  alt="Mann Maheshwari" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badges */}
              <motion.div 
                className="absolute -right-4 top-1/4 glass py-1 px-3 rounded-full text-xs font-medium shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                React
              </motion.div>
              
              <motion.div 
                className="absolute -left-8 bottom-1/4 glass py-1 px-3 rounded-full text-xs font-medium shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                JavaScript
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-2 right-1/4 glass py-1 px-3 rounded-full text-xs font-medium shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                UI/UX
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <span className="text-sm text-foreground/60 mb-2">Scroll to explore</span>
        <motion.div
          className="glass p-2 rounded-full"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
