
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const ResumeDownloadButton = () => {
  return (
    <Button 
      size="lg" 
      className="w-full sm:w-auto" 
      asChild
    >
      <a 
        href="/resume-mann-maheshwari.pdf" 
        download="Mann_Maheshwari_CV.pdf"
        className="flex items-center justify-center"
      >
        <Download className="mr-2 h-4 w-4" />
        <span className="font-medium text-sm">Download Resume</span>
      </a>
    </Button>
  );
};

export default ResumeDownloadButton;
