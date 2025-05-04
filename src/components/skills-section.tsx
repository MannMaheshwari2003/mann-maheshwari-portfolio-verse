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
  { name: "PHP", level: 75 },
  { name: "Java", level: 70 },
  { name: "SQL", level: 85 },
  { name: "Python", level: 65 },
  { name: "MS Office", level: 95 },
  { name: "Automation with AI", level: 75 },
  { name: "React", level: 85 },
];

const softSkills = [
  { name: "Leadership", level: 90 },
  { name: "Teamwork", level: 95 },
  { name: "Communication", level: 85 },
  { name: "Adaptability", level: 90 },
  { name: "Problem Solving", level: 85 },
  { name: "Time Management", level: 80 },
  { name: "Creativity", level: 75 },
  { name: "Critical Thinking", level: 80 },
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
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-secondary/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10"
      >
        <motion.h2 
          className="section-title mb-16 text-center"
          variants={fadeIn}
        >
          My Skills
        </motion.h2>
        
        <motion.div variants={fadeIn}>
          <Tabs defaultValue="technical" className="w-full max-w-4xl mx-auto">
            <div className="flex justify-center mb-10">
              <TabsList className="glass p-1 h-auto">
                <TabsTrigger 
                  value="technical" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2 px-4 flex items-center gap-2"
                >
                  <Code className="h-4 w-4" />
                  <span>Technical Skills</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="soft" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2 px-4 flex items-center gap-2"
                >
                  <BrainCircuit className="h-4 w-4" />
                  <span>Soft Skills</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="technical" className="mt-0">
              <div className="mb-6 text-center">
                <div className="inline-flex items-center glass px-4 py-2 rounded-full">
                  <FileCode className="h-5 w-5 mr-2 text-primary" />
                  <span className="text-sm font-medium">Development & Technical Proficiency</span>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
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
              <div className="mb-6 text-center">
                <div className="inline-flex items-center glass px-4 py-2 rounded-full">
                  <Languages className="h-5 w-5 mr-2 text-primary" />
                  <span className="text-sm font-medium">Personal & Professional Attributes</span>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
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
