import { ThemeToggle } from "./theme-toggle";
import { Github, Instagram, Linkedin, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/mann-maheshwari-3714b82a1/", label: "LinkedIn" },
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/MannMaheshwari2003", label: "GitHub" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/_mannkmaheshwari_/", label: "Instagram" }
  ];
  
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card"></div>
      
      <div className="container mx-auto py-12 px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold font-heading mb-2">
              <span className="text-gradient">Mann</span> Maheshwari
            </h3>
            <p className="text-sm text-foreground/60 max-w-md">
              Creating innovative web solutions with passion and precision. Let's build something amazing together.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center md:items-end space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="glass p-2 rounded-full hover:bg-primary/10 hover-scale text-foreground/70 hover:text-primary"
                >
                  {link.icon}
                </a>
              ))}
              <ThemeToggle />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-border/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p>
            &copy; {currentYear} Mann Maheshwari. All rights reserved.
          </p>
          
          <div className="flex items-center mt-4 md:mt-0">
            <span className="flex items-center">
              Made with 
              <Heart className="h-4 w-4 mx-1 text-red-500" /> 
              and modern web technologies
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
