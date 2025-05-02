
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Section from "./section";
import { CalendarIcon, MapPinIcon, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Web Developer",
    company: "Labmentix",
    location: "Bengaluru",
    period: "Feb 2025 - Apr 2025",
    description: [
      "Managed client projects, ensuring timely delivery and high-quality outcomes",
      "Analyzed client requirements and executed web solutions to meet their specific needs",
      "Collaborated with cross-functional teams to ensure seamless implementation",
      "Utilized modern web technologies to develop robust and scalable applications"
    ]
  },
  {
    title: "Frontend Developer & Team Leader",
    company: "Future Core Innovations",
    location: "Delhi",
    period: "Jun 2024 - Sep 2024",
    description: [
      "Led a team of developers to create high-quality web applications",
      "Developed responsive user interfaces that ensured optimal display across devices",
      "Implemented best practices for cross-browser compatibility",
      "Facilitated team meetings and coordinated development efforts to meet project deadlines"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <Section id="experience" className="bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-40 h-40 rounded-full bg-gradient-to-tr from-primary/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-60 h-60 rounded-full bg-gradient-to-br from-secondary/10 to-transparent blur-3xl"></div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10"
      >
        <motion.h2 
          className="section-title mb-16 text-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          Work Experience
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="mb-12 last:mb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card className="glass-card overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300">
                <CardHeader className="pb-2 pt-6 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent"></div>
                  
                  <div className="ml-3">
                    <div className="flex flex-wrap justify-between items-start gap-4">
                      <div>
                        <div className="mb-1 flex items-center">
                          <div className="p-2 rounded-md bg-primary/10 mr-3">
                            <Briefcase className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-xl font-heading font-semibold">{exp.title}</h3>
                        </div>
                        <p className="text-lg text-gradient font-medium">{exp.company}</p>
                      </div>
                      
                      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center glass py-1 px-3 rounded-full">
                          <CalendarIcon className="h-3.5 w-3.5 mr-1.5 text-primary" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center glass py-1 px-3 rounded-full">
                          <MapPinIcon className="h-3.5 w-3.5 mr-1.5 text-primary" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-4">
                  <ul className="space-y-3 ml-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mt-2"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default ExperienceSection;
