
import { Button } from "@/components/ui/button";
import { Mail, Download } from "lucide-react";
import ResumeDownloadButton from "./resume-download-button";

const HeroContent = () => {
  return (
    <div className="text-center lg:text-left max-w-2xl">
      <span 
        className="inline-block py-2 px-4 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-primary/15 to-secondary/15 border border-primary/20 mb-4 sm:mb-6 animate-fade-in backdrop-blur-sm text-primary"
        style={{ animationDelay: '0s' }}
      >
        Full Stack Developer | Future Tech Leader
      </span>
      
      <h1 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading mb-4 sm:mb-6 leading-tight animate-fade-in text-foreground"
        style={{ animationDelay: '0.2s' }}
      >
        Mann <span className="text-gradient">Maheshwari</span>
      </h1>
      
      <p 
        className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 px-4 sm:px-0 animate-fade-in leading-relaxed text-muted-foreground"
        style={{ animationDelay: '0.4s' }}
      >
        Creating elegant and performant web experiences with modern technologies and innovative solutions.
      </p>
      
      <div 
        className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 px-4 sm:px-0 animate-fade-in"
        style={{ animationDelay: '0.6s' }}
      >
        <ResumeDownloadButton />
        <Button variant="outline" size="lg" className="hover:shadow-lg border border-primary/30 hover:border-primary/60 group w-full sm:w-auto transition-all duration-300 hover:bg-primary/5" asChild>
          <a href="#contact">
            <Mail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
            Contact Me
          </a>
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
