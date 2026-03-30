
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import ResumeDownloadButton from "./resume-download-button";

const HeroContent = () => {
  return (
    <div className="text-center lg:text-left max-w-2xl relative">
      {/* Status badge */}
      <div className="flex justify-center lg:justify-start mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-primary/8 text-primary border border-primary/15">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Available for opportunities
        </span>
      </div>
      
      {/* Name */}
      <div className="mb-8">
        <h1 className="font-heading leading-[1.05]">
          <span className="block text-foreground tracking-tight font-extrabold">
            Mann
          </span>
          <span className="block text-gradient tracking-tight font-extrabold">
            Maheshwari
          </span>
        </h1>
      </div>
      
      {/* Description */}
      <div className="mb-10 max-w-xl mx-auto lg:mx-0">
        <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
          Full Stack Developer crafting modern web experiences with clean code and thoughtful design.
        </p>
      </div>
      
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
        <ResumeDownloadButton />
        <Button 
          variant="outline" 
          size="lg" 
          className="group w-full sm:w-auto" 
          asChild
        >
          <a href="#contact" className="flex items-center justify-center">
            <Mail className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
            <span className="font-medium text-sm">Contact Me</span>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
