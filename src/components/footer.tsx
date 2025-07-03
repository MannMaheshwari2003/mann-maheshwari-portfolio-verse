
import { ThemeToggle } from "./theme-toggle";
import { Github, Instagram, Linkedin, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />, href: "https://www.linkedin.com/in/mann-maheshwari-3714b82a1/", label: "LinkedIn" },
    { icon: <Github className="h-4 w-4 sm:h-5 sm:w-5" />, href: "https://github.com/MannMaheshwari2003", label: "GitHub" },
    { icon: <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />, href: "https://www.instagram.com/_mannkmaheshwari_/", label: "Instagram" }
  ];
  
  return (
    <footer className="relative overflow-hidden border-t border-border/20">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/50"></div>
      
      <div className="container mx-auto py-8 sm:py-12 px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold font-heading mb-2">
              <span className="text-gradient">Mann</span> Maheshwari
            </h3>
            <p className="text-xs sm:text-sm text-foreground/60 max-w-md mx-auto lg:mx-0">
              Full Stack Developer passionate about creating innovative web solutions with modern technologies and clean code.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center lg:items-end space-y-4 sm:space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center space-x-3 sm:space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.href} 
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="glass p-2.5 sm:p-3 rounded-full hover:bg-primary/10 hover-scale text-foreground/70 hover:text-primary transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
              <div className="ml-2">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-border/30 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-foreground/60 space-y-4 sm:space-y-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-center sm:text-left">
            &copy; {currentYear} Mann Maheshwari. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <span className="flex items-center">
              Made with 
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 mx-1.5 text-red-500 animate-pulse" /> 
              by Mann Maheshwari
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
