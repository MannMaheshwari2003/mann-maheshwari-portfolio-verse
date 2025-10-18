
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const ResumeDownloadButton = () => {
  return (
    <Button 
      size="lg" 
      className="btn-gradient group relative overflow-hidden transition-all duration-300 focus-ring" 
      asChild
    >
      <a 
        href="/resume-mann-maheshwari.pdf" 
        download="Mann_Maheshwari_CV.pdf"
        className="flex items-center justify-center"
      >
        <Download className="mr-2.5 h-4.5 w-4.5 transition-all duration-200 relative z-10" />
        <span className="relative z-10 font-medium text-sm">Download Resume</span>
      </a>
    </Button>
  );
};

export default ResumeDownloadButton;
