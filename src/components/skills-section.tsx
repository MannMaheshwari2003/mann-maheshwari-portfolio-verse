import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Section from "./section";
import SectionHeader from "./ui/section-header";
import SkillProgress from "./skill-progress";
import { Code, BrainCircuit } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const technicalSkills = [
  { name: "React.js", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "SQL", level: 85 },
  { name: "Node.js", level: 70 },
  { name: "Java", level: 70 },
  { name: "PHP", level: 75 },
  { name: "Supabase", level: 75 },
  { name: "AI Tools/Automation", level: 75 },
  { name: "Data Structures", level: 70 },
  { name: "MS Office Suite", level: 95 },
  { name: "Google Sheets", level: 90 },
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
  const { ref: headerRef, inView: headerInView } = useScrollAnimation({ threshold: 0.3 });
  const { ref: tabsRef, inView: tabsInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <Section id="skills" className="bg-background relative overflow-hidden" compact>
      {/* Subtle gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/10"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-secondary/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <div 
          ref={headerRef}
          className={`transition-all duration-700 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <SectionHeader
            title="Skills & Expertise"
            subtitle="A comprehensive overview of my technical proficiency and professional capabilities."
            variant="default"
          />
        </div>
        
        <div 
          ref={tabsRef}
          className={`transition-all duration-700 ease-out ${
            tabsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Tabs defaultValue="technical" className="w-full max-w-5xl mx-auto">
            <div className="flex justify-center mb-8 px-4">
              <TabsList className="p-1.5 h-auto bg-muted/50 backdrop-blur-sm border border-border/50 rounded-xl">
                <TabsTrigger 
                  value="technical" 
                  className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm py-2.5 px-5 flex items-center gap-2 text-sm font-medium transition-all duration-200 rounded-lg"
                >
                  <Code className="h-4 w-4" />
                  <span>Technical</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="soft" 
                  className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm py-2.5 px-5 flex items-center gap-2 text-sm font-medium transition-all duration-200 rounded-lg"
                >
                  <BrainCircuit className="h-4 w-4" />
                  <span>Soft Skills</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="technical" className="mt-0 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 sm:px-0">
                {technicalSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`transition-all duration-500 ease-out ${
                      tabsInView 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 40}ms` }}
                  >
                    <SkillProgress
                      name={skill.name}
                      level={skill.level}
                      index={index}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="soft" className="mt-0 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 sm:px-0">
                {softSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`transition-all duration-500 ease-out ${
                      tabsInView 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 40}ms` }}
                  >
                    <SkillProgress
                      name={skill.name}
                      level={skill.level}
                      index={index}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Section>
  );
};

export default SkillsSection;
