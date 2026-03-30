
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
    <Section id="skills" className="bg-muted/20 relative">
      <div ref={headerRef} className={`transition-all duration-700 ease-out ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <SectionHeader title="Skills & Expertise" subtitle="A comprehensive overview of technical proficiency and professional capabilities." />
      </div>
      
      <div ref={tabsRef} className={`transition-all duration-700 ease-out ${tabsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <Tabs defaultValue="technical" className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="p-1 h-auto bg-muted/50 border border-border/50 rounded-lg">
              <TabsTrigger value="technical" className="data-[state=active]:bg-background data-[state=active]:shadow-sm py-2 px-4 flex items-center gap-2 text-sm rounded-md">
                <Code className="h-4 w-4" />
                Technical
              </TabsTrigger>
              <TabsTrigger value="soft" className="data-[state=active]:bg-background data-[state=active]:shadow-sm py-2 px-4 flex items-center gap-2 text-sm rounded-md">
                <BrainCircuit className="h-4 w-4" />
                Soft Skills
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="technical" className="mt-0">
            <div className="grid md:grid-cols-2 gap-3">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className={`transition-all duration-400 ease-out ${tabsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${index * 30}ms` }}>
                  <SkillProgress name={skill.name} level={skill.level} index={index} />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="soft" className="mt-0">
            <div className="grid md:grid-cols-2 gap-3">
              {softSkills.map((skill, index) => (
                <div key={skill.name} className={`transition-all duration-400 ease-out ${tabsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${index * 30}ms` }}>
                  <SkillProgress name={skill.name} level={skill.level} index={index} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Section>
  );
};

export default SkillsSection;
