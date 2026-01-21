
import { useState } from "react";
import Section from "./section";
import ProjectCard from "./project-card";
import SectionHeader from "./ui/section-header";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const projectsData = [
  {
    title: "Online Car Rental Service",
    description: "A web-based car rental platform for booking vehicles online",
    technologies: [{ name: "PHP" }, { name: "MySQL" }, { name: "JavaScript" }, { name: "HTML/CSS" }],
    longDescription: "This online car rental service provides a comprehensive platform for users to browse, select, and rent vehicles for various durations. The application features a user-friendly interface with a secure booking system.",
    features: [
      "User registration and authentication system",
      "Car browsing with filtering options",
      "Booking management with date selection",
      "Admin dashboard for inventory management",
      "Payment processing integration"
    ]
  },
  {
    title: "Jewellery Store Management System",
    description: "A complete management solution for jewellery retailers",
    technologies: [{ name: "Java" }, { name: "MySQL" }, { name: "Swing" }],
    longDescription: "The Jewellery Store Management System is designed to streamline operations for jewellery retailers. It provides comprehensive tools for inventory management, sales tracking, customer management, and reporting.",
    features: [
      "Inventory tracking with categorization",
      "Sales and purchase order management",
      "Customer relationship management",
      "Detailed reporting and analytics",
      "Employee performance tracking"
    ]
  }
];

const ProjectsSection = () => {
  const { ref: headerRef, inView: headerInView } = useScrollAnimation({ threshold: 0.3 });
  const { ref: gridRef, inView: gridInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <Section id="projects" className="bg-background relative overflow-hidden" compact>
      {/* Subtle gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/10"></div>
      <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div 
          ref={headerRef}
          className={`transition-all duration-700 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <SectionHeader
            title="Featured Projects"
            subtitle="A selection of projects showcasing modern development practices and creative problem-solving."
            variant="elegant"
          />
        </div>
        
        <div 
          ref={gridRef}
          className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto"
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-600 ease-out ${
                gridInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ProjectCard {...project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProjectsSection;
