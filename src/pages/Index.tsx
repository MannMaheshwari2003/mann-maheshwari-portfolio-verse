
import AboutSection from "@/components/about-section";
import AchievementsSection from "@/components/achievements-section";
import ContactSection from "@/components/contact-section";
import EducationSection from "@/components/education-section";
import ExperienceSection from "@/components/experience-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import FloatingOrbs from "@/components/floating-orbs";
import { ThemeProvider } from "@/components/theme-provider";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="system">
      <div className="flex flex-col min-h-screen transition-colors duration-300 relative overflow-x-hidden">
        {/* Optimized background with better performance */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
          
          {/* Reduced number of background elements for better performance */}
          <div className="absolute top-0 left-1/4 w-96 h-96 
                          bg-gradient-radial from-primary/8 via-primary/4 to-transparent 
                          rounded-full blur-3xl animate-pulse opacity-60" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 
                          bg-gradient-radial from-secondary/6 via-secondary/3 to-transparent 
                          rounded-full blur-3xl animate-pulse opacity-50" 
               style={{ animationDelay: '2s' }} />
        </div>

        <FloatingOrbs />
        <Navbar />
        
        <main className="flex flex-col flex-grow relative z-10">
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <AchievementsSection />
          <ContactSection />
        </main>
        
        <Footer />

        {/* Improved scroll progress indicator */}
        <div className="fixed top-0 left-0 w-full h-0.5 bg-border/30 z-50">
          <div 
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-150 ease-out"
            style={{
              width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
            }}
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
