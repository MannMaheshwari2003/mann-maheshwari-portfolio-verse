
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Section from "./section";
import SkillProgress from "./skill-progress";
import { motion } from "framer-motion";
import { Code, BrainCircuit, Languages, FileCode } from "lucide-react";

const technicalSkills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "Java", level: 70 },
  { name: "PHP", level: 75 },
  { name: "SQL", level: 85 },
  { name: "Python", level: 65 },
  { name: "MS Word", level: 95 },
  { name: "PowerPoint", level: 95 },
  { name: "Google Sheets", level: 90 },
  { name: "AI Tools/Automation", level: 75 },
  { name: "Data Structures", level: 70 },
  { name: "Programming", level: 80 },
  { name: "Supabase", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "React.js", level: 85 },
];

const softSkills = [
  { name: "Teamwork", level: 95 },
  { name: "Leadership", level: 90 },
  { name: "Problem Solving", level: 85 },
  { name: "Adaptability", level: 90 },
  { name: "Communication", level: 85 },
  { name: "Formal Communication", level: 80 },
  { name: "Planning", level: 85 },
  { name: "Software Development Processes", level: 80 },
];

const SkillsSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Section id="skills" className="bg-background relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-56 sm:w-80 h-56 sm:h-80 bg-secondary/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10"
      >
        <motion.h2 
          className="section-title mb-12 sm:mb-16 text-center"
          variants={fadeIn}
        >
          My Skills
        </motion.h2>
        
        <motion.div variants={fadeIn}>
          <Tabs defaultValue="technical" className="w-full max-w-6xl mx-auto">
            <div className="flex justify-center mb-8 sm:mb-10 px-4">
              <TabsList className="glass p-1 h-auto grid w-full max-w-md grid-cols-2 sm:flex sm:w-auto">
                <TabsTrigger 
                  value="technical" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2 px-3 sm:px-4 flex items-center gap-2 text-xs sm:text-sm"
                >
                  <Code className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Technical Skills</span>
                  <span className="sm:hidden">Technical</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="soft" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2 px-3 sm:px-4 flex items-center gap-2 text-xs sm:text-sm"
                >
                  <BrainCircuit className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Soft Skills</span>
                  <span className="sm:hidden">Soft</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="technical" className="mt-0">
              <div className="mb-4 sm:mb-6 text-center px-4">
                <div className="inline-flex items-center glass px-3 sm:px-4 py-2 rounded-full">
                  <FileCode className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-primary" />
                  <span className="text-xs sm:text-sm font-medium">Development & Technical Proficiency</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-0">
                {technicalSkills.map((skill, index) => (
                  <SkillProgress
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={index}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="soft" className="mt-0">
              <div className="mb-4 sm:mb-6 text-center px-4">
                <div className="inline-flex items-center glass px-3 sm:px-4 py-2 rounded-full">
                  <Languages className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-primary" />
                  <span className="text-xs sm:text-sm font-medium">Personal & Professional Attributes</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-0">
                {softSkills.map((skill, index) => (
                  <SkillProgress
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={index}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default SkillsSection;
