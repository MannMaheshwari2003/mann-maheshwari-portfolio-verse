
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Section from "./section";
import { CalendarIcon, MapPinIcon } from "lucide-react";

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
    <Section id="experience" className="bg-background">
      <h2 className="section-title">Experience</h2>
      <div className="grid gap-6 mt-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="overflow-hidden animate-fade-in opacity-0" style={{ animationDelay: `${index * 0.2}s` }}>
            <CardHeader className="bg-primary/5 pb-4">
              <div className="flex flex-wrap justify-between items-start gap-2">
                <div>
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  <p className="text-lg font-medium text-primary mt-1">{exp.company}</p>
                </div>
                <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="h-4 w-4 mr-1" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="list-disc pl-5 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
