
import { Button } from "@/components/ui/button";
import { Mail, Sparkles } from "lucide-react";
import ResumeDownloadButton from "./resume-download-button";
import InteractiveBadge from "@/components/ui/interactive-badge";

const HeroContent = () => {
  return (
    <div className="text-center lg:text-left max-w-3xl relative">
      {/* Refined professional badge */}
      <div className="flex justify-center lg:justify-start mb-8">
        <InteractiveBadge 
          variant="gradient" 
          size="md" 
          glow={false}
          animate={false}
          className="glass border border-primary/15 hover:border-primary/25 px-5 py-2.5 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-primary/80" />
          <span className="font-medium text-foreground/85">Full Stack Developer</span>
        </InteractiveBadge>
      </div>
      
      {/* Refined name section with elegant typography */}
      <div className="relative mb-10">
        <h1 className="relative z-10 font-heading">
          <span className="block text-foreground mb-4 tracking-tight font-extrabold">
            Mann
          </span>
          <span className="block text-gradient tracking-tight font-extrabold">
            Maheshwari
          </span>
        </h1>
        
        {/* Subtle ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/8 via-primary/6 to-accent/8 blur-3xl -z-10 opacity-50"></div>
      </div>
      
      {/* Refined description with clean design */}
      <div className="mb-10 max-w-2xl mx-auto lg:mx-0">
        <p className="text-lg sm:text-xl leading-relaxed text-foreground/75 font-normal mb-6">
          Creating innovative web experiences with modern technologies
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-primary/8 text-primary/90 font-medium border border-primary/15 backdrop-blur-sm hover:bg-primary/12 hover:border-primary/20 transition-all duration-200">
            Design
          </span>
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-secondary/8 text-foreground/80 font-medium border border-secondary/15 backdrop-blur-sm hover:bg-secondary/12 hover:border-secondary/20 transition-all duration-200">
            Performance
          </span>
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-accent/8 text-accent/90 font-medium border border-accent/15 backdrop-blur-sm hover:bg-accent/12 hover:border-accent/20 transition-all duration-200">
            Innovation
          </span>
        </div>
      </div>
      
      {/* Refined button section */}
      <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
        <ResumeDownloadButton />
        <Button 
          variant="outline" 
          size="lg" 
          className="group relative overflow-hidden hover:shadow-lg border border-border hover:border-primary/30 bg-background/50 hover:bg-background/80 w-full sm:w-auto transition-all duration-300 focus-ring" 
          asChild
        >
          <a href="#contact" className="flex items-center justify-center">
            <Mail className="mr-2.5 h-4.5 w-4.5 transition-all duration-200 group-hover:text-primary relative z-10" />
            <span className="relative z-10 font-medium text-sm">Contact Me</span>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
