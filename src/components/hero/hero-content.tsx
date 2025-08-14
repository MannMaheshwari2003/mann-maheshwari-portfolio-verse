
import { Button } from "@/components/ui/button";
import { Mail, Download, Sparkles } from "lucide-react";
import ResumeDownloadButton from "./resume-download-button";
import InteractiveBadge from "@/components/ui/interactive-badge";

const HeroContent = () => {
  return (
    <div className="text-center lg:text-left max-w-2xl relative">
      {/* Enhanced floating badge with better theme support */}
      <div className="flex justify-center lg:justify-start mb-6">
        <InteractiveBadge 
          variant="gradient" 
          size="md" 
          glow={true}
          animate={true}
          className="backdrop-blur-md shadow-lg border-2"
        >
          <Sparkles className="w-4 h-4" />
          Full Stack Developer | Future Tech Leader
        </InteractiveBadge>
      </div>
      
      {/* Enhanced name section with better contrast */}
      <div className="relative mb-6">
        <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-heading leading-tight">
          <span className="block text-foreground mb-2 tracking-tight font-extrabold">
            Mann
          </span>
          <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-x tracking-tight font-extrabold">
            Maheshwari
          </span>
        </h1>
        
        {/* Enhanced multi-layered glow effects with theme support */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl -z-10 opacity-60 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-primary/15 to-secondary/15 blur-2xl -z-20 opacity-70"></div>
      </div>
      
      {/* Enhanced description with better readability */}
      <p className="text-base sm:text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0 px-4 sm:px-0 leading-relaxed text-foreground/85 font-medium">
        Creating{" "}
        <span className="text-primary font-bold bg-primary/15 px-3 py-1 rounded-lg border border-primary/25 shadow-sm backdrop-blur-sm">
          elegant
        </span>{" "}
        and{" "}
        <span className="text-secondary font-bold bg-secondary/15 px-3 py-1 rounded-lg border border-secondary/25 shadow-sm backdrop-blur-sm">
          performant
        </span>{" "}
        web experiences with modern technologies and innovative solutions.
      </p>
      
      {/* Enhanced button section with better theme support */}
      <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 px-4 sm:px-0">
        <ResumeDownloadButton />
        <Button 
          variant="outline" 
          size="lg" 
          className="group relative overflow-hidden hover:shadow-xl border-2 border-primary/40 hover:border-primary/60 bg-background/90 backdrop-blur-md hover:bg-primary/5 w-full sm:w-auto transition-all duration-300 hover:scale-105 shadow-md" 
          asChild
        >
          <a href="#contact">
            {/* Enhanced button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            <Mail className="mr-2 h-4 w-4 transition-all duration-300 group-hover:scale-110 group-hover:text-primary relative z-10" />
            <span className="relative z-10 font-semibold">Contact Me</span>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
