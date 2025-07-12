
import { useState } from "react";
import Section from "./section";
import ProjectCard from "./project-card";
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
  },
  {
    title: "Face Recognition Attendance System",
    description: "Automated attendance tracking using facial recognition",
    technologies: [{ name: "Python" }, { name: "OpenCV" }, { name: "MySQL" }, { name: "TensorFlow" }],
    longDescription: "This innovative attendance system uses facial recognition technology to automatically record student or employee presence. It eliminates the need for traditional attendance methods, reducing time spent and increasing accuracy.",
    features: [
      "Real-time face detection and recognition",
      "Automatic attendance marking",
      "Admin dashboard with attendance reports",
      "User management for adding new faces",
      "Export options for attendance data"
    ]
  }
];

const ProjectsSection = () => {
  const { ref: headerRef, inView: headerInView } = useScrollAnimation({ threshold: 0.3 });
  const { ref: gridRef, inView: gridInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <Section id="projects" className="bg-card/30 relative overflow-hidden" compact>
      {/* Enhanced gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 via-background to-secondary/5"></div>
      <div className="absolute top-20 right-0 w-60 h-60 bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl animate-float-orb"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-radial from-secondary/20 via-secondary/5 to-transparent rounded-full blur-3xl animate-float-orb" style={{ animationDelay: '12s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-radial from-accent/15 via-accent/5 to-transparent rounded-full blur-3xl animate-breathe"></div>
      
      <div className="relative z-10">
        <div 
          ref={headerRef}
          className={`transition-all duration-1000 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-title mb-10 text-center">
            Featured Projects
          </h2>
        </div>
        
        <div 
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-800 ease-out ${
                gridInView 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-10 scale-95'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
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
