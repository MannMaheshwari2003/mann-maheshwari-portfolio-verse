
import { useState } from "react";
import Section from "./section";
import ProjectCard from "./project-card";

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
  return (
    <Section id="projects" className="bg-muted/30">
      <h2 className="section-title">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            className="animate-fade-in opacity-0" 
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
