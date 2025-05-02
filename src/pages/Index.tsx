
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
  return (
    <ThemeProvider defaultTheme="light">
      <Navbar />
      <main className="flex flex-col">
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
    </ThemeProvider>
  );
};

export default Index;
