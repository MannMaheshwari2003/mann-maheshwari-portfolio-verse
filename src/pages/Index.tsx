import { useState, useEffect } from "react";
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

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(100, progress));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider defaultTheme="light">
      <div className="relative flex flex-col min-h-screen bg-background text-foreground transition-colors duration-200">
        <Navbar />

        {/* Scroll progress — sits below the fixed navbar */}
        <div
          className="fixed top-16 md:top-20 left-0 right-0 h-1 md:h-1.5 bg-background z-40 border-b-2 border-foreground"
          aria-hidden="true"
        >
          <div
            className="h-full bg-[hsl(var(--primary))] transition-[width] duration-100 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <main className="flex flex-col flex-grow relative">
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
