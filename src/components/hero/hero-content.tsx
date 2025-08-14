
import { Button } from "@/components/ui/button";
import { Mail, Sparkles } from "lucide-react";
import ResumeDownloadButton from "./resume-download-button";
import InteractiveBadge from "@/components/ui/interactive-badge";

const HeroContent = () => {
  return (
    <div className="text-center lg:text-left max-w-3xl relative">
      {/* Enhanced floating badge with superior design */}
      <div className="flex justify-center lg:justify-start mb-8">
        <InteractiveBadge 
          variant="gradient" 
          size="md" 
          glow={true}
          animate={true}
          className="glass-premium shadow-xl border-2 border-primary/20 hover:border-primary/40 px-6 py-3"
        >
          <Sparkles className="w-5 h-5 text-primary animate-pulse" />
          <span className="font-semibold text-foreground/90">Full Stack Developer | Future Tech Leader</span>
        </InteractiveBadge>
      </div>
      
      {/* Enhanced name section with improved typography */}
      <div className="relative mb-10">
        <h1 className="relative z-10 font-heading">
          <span className="block text-foreground mb-4 tracking-tight font-black hover:scale-[1.02] transition-transform duration-500">
            Mann
          </span>
          <span className="block text-gradient animate-gradient-x tracking-tight font-black hover:scale-[1.02] transition-transform duration-500">
            Maheshwari
          </span>
        </h1>
        
        {/* Enhanced multi-layered glow effects with superior visual impact */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-secondary/15 to-accent/15 blur-3xl -z-10 opacity-70 animate-breathe"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl -z-20 opacity-80 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-conic from-primary/5 via-secondary/5 to-accent/5 blur-xl -z-30 opacity-60 animate-spin-slow"></div>
      </div>
      
      {/* Enhanced description with superior readability and design */}
      <div className="mb-10 max-w-2xl mx-auto lg:mx-0">
        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-foreground/85 font-medium mb-6">
          Creating innovative web experiences with modern technologies
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
          <span className="inline-flex items-center px-4 py-2 rounded-xl bg-primary/10 text-primary font-semibold border border-primary/20 shadow-sm backdrop-blur-sm hover:bg-primary/15 hover:border-primary/30 transition-all duration-300 hover:scale-105">
            Elegant Design
          </span>
          <span className="inline-flex items-center px-4 py-2 rounded-xl bg-secondary/10 text-secondary font-semibold border border-secondary/20 shadow-sm backdrop-blur-sm hover:bg-secondary/15 hover:border-secondary/30 transition-all duration-300 hover:scale-105">
            Performance
          </span>
          <span className="inline-flex items-center px-4 py-2 rounded-xl bg-accent/10 text-accent font-semibold border border-accent/20 shadow-sm backdrop-blur-sm hover:bg-accent/15 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            Innovation
          </span>
        </div>
      </div>
      
      {/* Enhanced button section with superior design */}
      <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6">
        <ResumeDownloadButton />
        <Button 
          variant="outline" 
          size="lg" 
          className="group relative overflow-hidden hover:shadow-2xl border-2 border-primary/30 hover:border-primary/50 glass hover:glass-premium w-full sm:w-auto transition-all duration-500 hover:scale-105 shadow-lg focus-ring" 
          asChild
        >
          <a href="#contact" className="flex items-center justify-center">
            {/* Enhanced button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/15 to-secondary/15 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 animate-shimmer"></div>
            <Mail className="mr-3 h-5 w-5 transition-all duration-300 group-hover:scale-110 group-hover:text-primary relative z-10" />
            <span className="relative z-10 font-semibold text-base">Contact Me</span>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
