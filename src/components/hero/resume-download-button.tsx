
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";

const ResumeDownloadButton = () => {
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getResumeUrl = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // First, let's check if the file exists
        const { data: fileList, error: listError } = await supabase.storage
          .from('portfolio')
          .list('', {
            limit: 100,
            offset: 0
          });

        if (listError) {
          console.error('Error listing files:', listError);
          setError('Error accessing storage');
          return;
        }

        console.log('Files in portfolio bucket:', fileList);
        
        // Look for the resume file (case insensitive)
        const resumeFile = fileList?.find(file => 
          file.name.toLowerCase().includes('resume') || 
          file.name === 'Mann_Maheshwari_Resume.pdf'
        );

        if (!resumeFile) {
          console.error('Resume file not found in bucket');
          setError('Resume file not found');
          return;
        }

        console.log('Found resume file:', resumeFile.name);

        // Create signed URL for the found file
        const { data, error } = await supabase.storage
          .from('portfolio')
          .createSignedUrl(resumeFile.name, 60 * 60); // 1 hour expiry

        if (error) {
          console.error('Error getting resume URL:', error);
          setError('Error loading resume');
          return;
        }

        setResumeUrl(data.signedUrl);
      } catch (error) {
        console.error('Error fetching resume:', error);
        setError('Error loading resume');
      } finally {
        setIsLoading(false);
      }
    };

    getResumeUrl();
  }, []);

  if (error) {
    return (
      <Button size="lg" className="btn-gradient opacity-50" disabled>
        <Download className="mr-2 h-4 w-4" />
        Resume Unavailable
      </Button>
    );
  }

  return (
    <Button 
      size="lg" 
      className="btn-gradient hover:shadow-lg hover:shadow-primary/20 group" 
      asChild={!!resumeUrl}
      disabled={isLoading || !resumeUrl}
    >
      {resumeUrl ? (
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
          <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          Download Resume
        </a>
      ) : (
        <>
          <Download className="mr-2 h-4 w-4" />
          {isLoading ? 'Loading Resume...' : 'Resume Unavailable'}
        </>
      )}
    </Button>
  );
};

export default ResumeDownloadButton;
