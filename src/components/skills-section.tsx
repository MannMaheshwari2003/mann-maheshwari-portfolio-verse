
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Section from "./section";
import SkillProgress from "./skill-progress";

const technicalSkills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "PHP", level: 75 },
  { name: "Java", level: 70 },
  { name: "SQL", level: 85 },
  { name: "Python", level: 65 },
  { name: "MS Office", level: 95 },
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
  return (
    <Section id="skills" className="bg-background">
      <h2 className="section-title">Skills</h2>
      
      <Tabs defaultValue="technical" className="mt-8">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="technical">Technical Skills</TabsTrigger>
          <TabsTrigger value="soft">Soft Skills</TabsTrigger>
        </TabsList>
        
        <TabsContent value="technical">
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {technicalSkills.map((skill, index) => (
                  <SkillProgress
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={index}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="soft">
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {softSkills.map((skill, index) => (
                  <SkillProgress
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={index}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Section>
  );
};

export default SkillsSection;
