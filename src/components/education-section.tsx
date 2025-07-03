
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
      <div className="absolute top-40 right-10 sm:right-20 w-24 sm:w-40 h-24 sm:h-40 rounded-full bg-gradient-to-tr from-primary/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-20 left-10 sm:left-20 w-32 sm:w-60 h-32 sm:h-60 rounded-full bg-gradient-to-br from-secondary/10 to-transparent blur-3xl"></div>
      
      <div className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="section-title mb-12 sm:mb-16 text-center"
            variants={fadeIn}
          >
            Education
          </motion.h2>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-0">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                className="mb-8 sm:mb-16 last:mb-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Left side - Year */}
                  <div className="lg:w-1/4 flex flex-row lg:flex-col items-center lg:items-end">
                    <div className="glass rounded-lg py-2 px-3 sm:px-4 inline-flex items-center space-x-2">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                      <span className="font-medium text-sm sm:text-base">{item.year}</span>
                    </div>
                  </div>
                  
                  {/* Timeline connector - hidden on mobile */}
                  <div className="hidden lg:flex flex-col items-center">
                    <div className="h-full w-px bg-gradient-to-b from-primary/50 to-primary/10 relative">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary/20 border-2 border-primary"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right side - Content */}
                  <div className="lg:w-2/3 glass p-4 sm:p-6 rounded-xl hover:shadow-lg hover-translate w-full">
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 flex lg:hidden">
                        <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div className="p-2 rounded-lg bg-primary/10 hidden lg:flex">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2">{item.title}</h3>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                          <span className="text-sm sm:text-base">{item.subtitle}</span>
                        </div>
                        {item.description && (
                          <p className="text-xs sm:text-sm bg-primary/5 py-1 px-2 sm:px-3 rounded-full inline-block">
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
