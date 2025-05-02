
import Section from "./section";
import { motion } from "framer-motion";
import { Calendar, GraduationCap, BookOpen } from "lucide-react";

const educationData = [
  {
    year: "2024 - 2026",
    title: "M.C.A - Master of Computer Applications",
    subtitle: "Guru Gobind Singh Indraprastha University",
    description: "Pursuing"
  },
  {
    year: "2024 - 2026",
    title: "P.G.D.M - Post Graduate Diploma in Management",
    subtitle: "Tecnia Institute of Advanced Studies, Delhi",
    description: "Pursuing"
  },
  {
    year: "2021 - 2024",
    title: "B.C.A - Bachelor of Computer Applications",
    subtitle: "Bharati Vidyapeeth University, Delhi",
    description: "CGPA: 7.81"
  },
  {
    year: "2021",
    title: "CBSE XII - Senior Secondary",
    subtitle: "DAV Public School",
    description: "Percentage: 65.4%"
  },
  {
    year: "2019",
    title: "CBSE X - Secondary",
    subtitle: "DAV Public School",
    description: "Percentage: 80.4%"
  }
];

const EducationSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Section id="education" className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 right-20 w-40 h-40 rounded-full bg-gradient-to-tr from-primary/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-60 h-60 rounded-full bg-gradient-to-br from-secondary/10 to-transparent blur-3xl"></div>
      
      <div className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="section-title mb-16 text-center"
            variants={fadeIn}
          >
            Education
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                className="mb-16 last:mb-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Left side - Year */}
                  <div className="md:w-1/4 flex flex-row md:flex-col items-center md:items-end">
                    <div className="glass rounded-lg py-2 px-4 inline-flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="font-medium">{item.year}</span>
                    </div>
                  </div>
                  
                  {/* Timeline connector */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className="h-full w-px bg-gradient-to-b from-primary/50 to-primary/10 relative">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-4 h-4 rounded-full bg-primary/20 border-2 border-primary"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right side - Content */}
                  <div className="md:w-2/3 glass p-6 rounded-xl hover:shadow-lg hover-translate">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 hidden md:flex">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-semibold">{item.title}</h3>
                        <div className="flex items-center mt-2 text-muted-foreground">
                          <BookOpen className="h-4 w-4 mr-2" />
                          <span>{item.subtitle}</span>
                        </div>
                        {item.description && (
                          <p className="mt-2 text-sm bg-primary/5 py-1 px-3 rounded-full inline-block">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default EducationSection;
