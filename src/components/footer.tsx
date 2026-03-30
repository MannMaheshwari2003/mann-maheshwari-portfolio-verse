
import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Linkedin className="h-4 w-4" />, href: "https://www.linkedin.com/in/mann-maheshwari-3714b82a1/", label: "LinkedIn" },
    { icon: <Github className="h-4 w-4" />, href: "https://github.com/MannMaheshwari2003", label: "GitHub" },
    { icon: <Instagram className="h-4 w-4" />, href: "https://www.instagram.com/_mannkmaheshwari_/", label: "Instagram" },
  ];
  
  return (
    <footer className="border-t border-border/30 bg-card/30" role="contentinfo">
      <div className="container mx-auto py-8 sm:py-10 px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold font-heading mb-1">
              <span className="text-foreground">Mann</span>{" "}
              <span className="text-muted-foreground">Maheshwari</span>
            </h3>
            <p className="text-xs text-muted-foreground max-w-sm">
              Full Stack Developer passionate about modern web solutions.
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-border/20 mt-6 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Mann Maheshwari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
