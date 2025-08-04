
import { Button } from "@/components/ui/button";
import { Mail, Download } from "lucide-react";
import ResumeDownloadButton from "./resume-download-button";

const HeroContent = () => {
  return (
    <div className="text-center lg:text-left max-w-2xl">
      <span 
        className="inline-block py-2 px-4 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-4 sm:mb-6 animate-fade-in backdrop-blur-sm text-foreground shadow-lg"
        style={{ animationDelay: '0s' }}
      >
        ✨ Full Stack Developer | Future Tech Leader
      </span>
      
      <div className="relative mb-4 sm:mb-6">
        <h1 
          className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-heading leading-tight animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="block text-foreground drop-shadow-2xl font-extrabold">Mann</span>
          <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse drop-shadow-xl">
            Maheshwari
          </span>
        </h1>
        
        {/* Enhanced glow effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/25 via-secondary/25 to-accent/25 blur-3xl -z-10 opacity-50 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-primary/15 to-secondary/15 blur-2xl -z-20 opacity-70"></div>
      </div>
      
      <p 
        className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 px-4 sm:px-0 animate-fade-in leading-relaxed text-foreground/90 font-medium drop-shadow-sm"
        style={{ animationDelay: '0.4s' }}
      >
        Creating <span className="text-primary font-bold drop-shadow-sm">elegant</span> and <span className="text-secondary font-bold drop-shadow-sm">performant</span> web experiences with modern technologies and innovative solutions.
      </p>
      
      <div 
        className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 px-4 sm:px-0 animate-fade-in"
        style={{ animationDelay: '0.6s' }}
      >
        <ResumeDownloadButton />
        <Button variant="outline" size="lg" className="hover:shadow-xl border-2 border-primary/40 hover:border-primary/70 group w-full sm:w-auto transition-all duration-300 hover:bg-primary/10 hover:scale-105 text-foreground font-semibold" asChild>
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
