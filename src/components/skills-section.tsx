import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Section from "./section";
import SkillProgress from "./skill-progress";
import { Code, BrainCircuit, Languages, FileCode } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

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
  const { ref: headerRef, inView: headerInView } = useScrollAnimation({ threshold: 0.3 });
  const { ref: tabsRef, inView: tabsInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <Section id="skills" className="bg-background relative overflow-hidden" compact>
      {/* Enhanced gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-tr from-card/30 via-background to-primary/5"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-0 w-48 sm:w-60 h-48 sm:h-60 bg-gradient-conic from-primary/20 via-primary/5 to-transparent rounded-full filter blur-3xl animate-float-orb"></div>
        <div className="absolute bottom-10 right-0 w-56 sm:w-72 h-56 sm:h-72 bg-gradient-conic from-secondary/20 via-secondary/5 to-transparent rounded-full filter blur-3xl animate-float-orb" style={{ animationDelay: '6s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-radial from-accent/15 via-accent/5 to-transparent rounded-full filter blur-3xl animate-breathe"></div>
      </div>
      
      <div className="relative z-10">
        <div 
          ref={headerRef}
          className={`transition-all duration-1000 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-title mb-8 sm:mb-10 text-center">
            My Skills
          </h2>
        </div>
        
        <div 
          ref={tabsRef}
          className={`transition-all duration-1000 ease-out ${
            tabsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Tabs defaultValue="technical" className="w-full max-w-6xl mx-auto">
            <div className="flex justify-center mb-6 sm:mb-8 px-4">
              <TabsList className="glass p-1 h-auto grid w-full max-w-md grid-cols-2 sm:flex sm:w-auto bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-md">
                <TabsTrigger 
                  value="technical" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground py-2 px-3 sm:px-4 flex items-center gap-2 text-xs sm:text-sm transition-all duration-300"
                >
                  <Code className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Technical Skills</span>
                  <span className="sm:hidden">Technical</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="soft" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-secondary data-[state=active]:to-accent data-[state=active]:text-primary-foreground py-2 px-3 sm:px-4 flex items-center gap-2 text-xs sm:text-sm transition-all duration-300"
                >
                  <BrainCircuit className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Soft Skills</span>
                  <span className="sm:hidden">Soft</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="technical" className="mt-0">
              <div className="mb-4 text-center px-4">
                <div className="inline-flex items-center glass px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-md">
                  <FileCode className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-primary" />
                  <span className="text-xs sm:text-sm font-medium">Development & Technical Proficiency</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 px-4 sm:px-0">
                {technicalSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`transition-all duration-600 ease-out ${
                      tabsInView 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
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
            
            <TabsContent value="soft" className="mt-0">
              <div className="mb-4 text-center px-4">
                <div className="inline-flex items-center glass px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-secondary/10 to-accent/10 backdrop-blur-md">
                  <Languages className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-secondary" />
                  <span className="text-xs sm:text-sm font-medium">Personal & Professional Attributes</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 px-4 sm:px-0">
                {softSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`transition-all duration-600 ease-out ${
                      tabsInView 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
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
