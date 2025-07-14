
import { Button } from "@/components/ui/button";
import { Mail, Download } from "lucide-react";
import ResumeDownloadButton from "./resume-download-button";

const HeroContent = () => {
  return (
    <div className="text-center lg:text-left max-w-2xl">
      <span 
        className="inline-block py-2 px-4 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-primary/15 to-secondary/15 border border-primary/20 mb-4 sm:mb-6 animate-fade-in backdrop-blur-sm text-primary shadow-lg"
        style={{ animationDelay: '0s' }}
      >
        ✨ Full Stack Developer | Future Tech Leader
      </span>
      
      <div className="relative mb-4 sm:mb-6">
        <h1 
          className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-heading leading-tight animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="block text-foreground drop-shadow-lg">Mann</span>
          <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse">
            Maheshwari
          </span>
        </h1>
        
        {/* Enhanced glow effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl -z-10 opacity-40 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-2xl -z-20 opacity-60"></div>
      </div>
      
      <p 
        className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 px-4 sm:px-0 animate-fade-in leading-relaxed text-muted-foreground font-medium"
        style={{ animationDelay: '0.4s' }}
      >
        Creating <span className="text-primary font-semibold">elegant</span> and <span className="text-secondary font-semibold">performant</span> web experiences with modern technologies and innovative solutions.
      </p>
      
      <div 
        className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 px-4 sm:px-0 animate-fade-in"
        style={{ animationDelay: '0.6s' }}
      >
        <ResumeDownloadButton />
        <Button variant="outline" size="lg" className="hover:shadow-xl border-2 border-primary/30 hover:border-primary/60 group w-full sm:w-auto transition-all duration-300 hover:bg-primary/5 hover:scale-105" asChild>
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
