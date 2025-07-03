
import { useEffect } from "react";
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
import { ThemeProvider } from "@/components/theme-provider";
import { soundManager } from "@/utils/soundManager";

const Index = () => {
  // Get current hour to determine initial theme
  const getCurrentHour = new Date().getHours();
  const initialTheme = getCurrentHour >= 18 || getCurrentHour < 6 ? "dark" : "light";

  useEffect(() => {
    // Initialize sound manager
    const handleUserInteraction = () => {
      // Start ambient sounds after first user interaction
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, []);

  return (
    <ThemeProvider defaultTheme={initialTheme}>
      <div className="flex flex-col min-h-screen transition-colors duration-300 gpu-accelerated">
        <Navbar />
        <main className="flex flex-col flex-grow">
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
      </div>
    </ThemeProvider>
  );
};

export default Index;
