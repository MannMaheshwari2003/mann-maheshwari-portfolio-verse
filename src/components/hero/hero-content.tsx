
import { Button } from "@/components/ui/button";
import { Mail, Download, Sparkles } from "lucide-react";
import ResumeDownloadButton from "./resume-download-button";
import InteractiveBadge from "@/components/ui/interactive-badge";

const HeroContent = () => {
  return (
    <div className="text-center lg:text-left max-w-2xl relative">
      {/* Enhanced floating badge */}
      <div className="flex justify-center lg:justify-start mb-6">
        <InteractiveBadge 
          variant="gradient" 
          size="md" 
          glow={true}
          animate={true}
          className="backdrop-blur-md shadow-lg"
        >
          <Sparkles className="w-4 h-4" />
          Full Stack Developer | Future Tech Leader
        </InteractiveBadge>
      </div>
      
      {/* Enhanced name section with better gradients */}
      <div className="relative mb-6">
        <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-heading leading-tight">
          <span className="block text-foreground drop-shadow-2xl mb-2 tracking-tight">
            Mann
          </span>
          <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-x tracking-tight">
            Maheshwari
          </span>
        </h1>
        
        {/* Multi-layered glow effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl -z-10 opacity-60 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-primary/15 to-secondary/15 blur-2xl -z-20 opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-conic from-primary/10 via-secondary/10 to-accent/10 blur-xl -z-30 opacity-40 animate-spin-slow"></div>
      </div>
      
      {/* Enhanced description with better contrast */}
      <p className="text-base sm:text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0 px-4 sm:px-0 leading-relaxed text-muted-foreground/90 font-medium backdrop-blur-sm">
        Creating{" "}
        <span className="text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-md">
          elegant
        </span>{" "}
        and{" "}
        <span className="text-secondary font-bold bg-secondary/10 px-2 py-0.5 rounded-md">
          performant
        </span>{" "}
        web experiences with modern technologies and innovative solutions.
      </p>
      
      {/* Enhanced button section */}
      <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 px-4 sm:px-0">
        <ResumeDownloadButton />
        <Button 
          variant="outline" 
          size="lg" 
          className="group relative overflow-hidden hover:shadow-xl border-2 border-primary/30 hover:border-primary/60 w-full sm:w-auto transition-all duration-500 hover:bg-primary/5 hover:scale-105 backdrop-blur-sm" 
          asChild
        >
          <a href="#contact">
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
            <Mail className="mr-2 h-4 w-4 transition-all duration-300 group-hover:scale-110 group-hover:text-primary relative z-10" />
            <span className="relative z-10">Contact Me</span>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
