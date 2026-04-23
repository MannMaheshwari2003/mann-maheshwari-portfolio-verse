import { Download } from "lucide-react";

const ResumeDownloadButton = () => {
  return (
    <a
      href="/resume-mann-maheshwari.pdf"
      download="Mann_Maheshwari_CV.pdf"
      className="press-effect focus-ring inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 border-2 border-foreground bg-[hsl(var(--primary))] text-primary-foreground font-bold uppercase tracking-widest text-xs md:text-sm shadow-bauhaus"
    >
      <Download className="h-4 w-4" strokeWidth={2.75} />
      Download CV
    </a>
  );
};

export default ResumeDownloadButton;
