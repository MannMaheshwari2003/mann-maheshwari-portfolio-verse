
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";

const ResumeDownloadButton = () => {
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);

  useEffect(() => {
    const getResumeUrl = async () => {
      try {
        const { data, error } = await supabase.storage
          .from('portfolio')
          .createSignedUrl('Mann_Maheshwari_Resume.pdf', 60 * 60); // 1 hour expiry

        if (error) {
          console.error('Error getting resume URL:', error);
          return;
        }

        setResumeUrl(data.signedUrl);
      } catch (error) {
        console.error('Error fetching resume:', error);
      }
    };

    getResumeUrl();
  }, []);

  return (
    <Button 
      size="lg" 
      className="btn-gradient hover:shadow-lg hover:shadow-primary/20 group" 
      asChild={!!resumeUrl}
      disabled={!resumeUrl}
    >
      {resumeUrl ? (
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
          <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          Download Resume
        </a>
      ) : (
        <>
          <Download className="mr-2 h-4 w-4" />
          Loading Resume...
        </>
      )}
    </Button>
  );
};

export default ResumeDownloadButton;
