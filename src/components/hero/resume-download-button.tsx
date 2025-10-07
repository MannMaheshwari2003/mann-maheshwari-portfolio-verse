
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const ResumeDownloadButton = () => {
  return (
    <Button 
      size="lg" 
      className="btn-gradient hover:shadow-2xl hover:shadow-primary/30 group relative overflow-hidden transition-all duration-500 hover:scale-105 focus-ring" 
      asChild
    >
      <a 
        href="/resume-mann-maheshwari.pdf" 
        download="Mann-Maheshwari-Resume.pdf"
        className="flex items-center justify-center"
      >
        {/* Enhanced button glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 animate-shimmer"></div>
        <Download className="mr-3 h-5 w-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 relative z-10" />
        <span className="relative z-10 font-semibold text-base">Download Resume</span>
      </a>
    </Button>
  );
};

export default ResumeDownloadButton;
