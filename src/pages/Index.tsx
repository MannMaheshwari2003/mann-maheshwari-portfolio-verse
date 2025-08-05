
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
  // Get current hour to determine initial theme
  const getCurrentHour = new Date().getHours();
  const initialTheme = getCurrentHour >= 18 || getCurrentHour < 6 ? "dark" : "light";

  return (
    <ThemeProvider defaultTheme={initialTheme}>
      <div className="flex flex-col min-h-screen transition-all duration-300 relative overflow-x-hidden">
        {/* Enhanced background with animated gradients */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/30"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-secondary/10 via-secondary/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-accent/8 via-accent/3 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <FloatingOrbs />
        <Navbar />
        <main className="flex flex-col flex-grow relative z-10 space-y-0">
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

        {/* Subtle scroll progress indicator */}
        <div className="fixed top-0 left-0 w-full h-1 bg-muted/20 z-50">
          <div 
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300"
            style={{
              width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
            }}
          ></div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
