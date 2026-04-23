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
    <Section id="skills" className="bg-[hsl(var(--accent))] text-foreground">
      {/* dot grid overlay */}
      <div className="absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(hsl(var(--foreground)) 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} />
      </div>

      <div ref={headerRef} className={`relative transition-all duration-500 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <SectionHeader number="05" accent="red" title="Skills" subtitle="The toolkit, broken into building blocks." />
      </div>

      <div ref={tabsRef} className={`relative transition-all duration-500 ${tabsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <Tabs defaultValue="technical" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-10">
            <TabsList className="p-0 h-auto bg-card border-2 md:border-4 border-foreground rounded-none shadow-bauhaus">
              <TabsTrigger
                value="technical"
                className="rounded-none border-r-2 md:border-r-4 border-foreground px-5 py-3 text-xs font-bold uppercase tracking-widest data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-none flex items-center gap-2"
              >
                <Code className="h-4 w-4" strokeWidth={2.75} />
                Technical
              </TabsTrigger>
              <TabsTrigger
                value="soft"
                className="rounded-none px-5 py-3 text-xs font-bold uppercase tracking-widest data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-none flex items-center gap-2"
              >
                <BrainCircuit className="h-4 w-4" strokeWidth={2.75} />
                Soft Skills
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="technical" className="mt-0">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {technicalSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`transition-all duration-400 ${tabsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${index * 25}ms` }}
                >
                  <SkillProgress name={skill.name} level={skill.level} index={index} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="soft" className="mt-0">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {softSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`transition-all duration-400 ${tabsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${index * 25}ms` }}
                >
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
