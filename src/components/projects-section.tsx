import Section from "./section";
import ProjectCard from "./project-card";
import SectionHeader from "./ui/section-header";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const projectsData = [
  {
    title: "Online Car Rental Service",
    description: "A web platform for browsing, selecting, and booking rental vehicles online.",
    technologies: [{ name: "PHP" }, { name: "MySQL" }, { name: "JavaScript" }, { name: "HTML/CSS" }],
    longDescription: "This online car rental service provides a comprehensive platform for users to browse, select, and rent vehicles for various durations. The application features a user-friendly interface with a secure booking system.",
    features: [
      "User registration and authentication system",
      "Car browsing with filtering options",
      "Booking management with date selection",
      "Admin dashboard for inventory management",
      "Payment processing integration",
    ],
  },
  {
    title: "Jewellery Store Management System",
    description: "A complete operations system for jewellery retailers — inventory, sales, and reporting.",
    technologies: [{ name: "Java" }, { name: "MySQL" }, { name: "Swing" }],
    longDescription: "The Jewellery Store Management System is designed to streamline operations for jewellery retailers. It provides comprehensive tools for inventory management, sales tracking, customer management, and reporting.",
    features: [
      "Inventory tracking with categorization",
      "Sales and purchase order management",
      "Customer relationship management",
      "Detailed reporting and analytics",
      "Employee performance tracking",
    ],
  },
];

const ProjectsSection = () => {
  const { ref: headerRef, inView: headerInView } = useScrollAnimation({ threshold: 0.3 });
  const { ref: gridRef, inView: gridInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <Section id="projects">
      <div ref={headerRef} className={`transition-all duration-500 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <SectionHeader number="04" accent="red" title="Projects" subtitle="Selected works built with intention." />
      </div>

      <div ref={gridRef} className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <ProjectCard {...project} index={index} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
