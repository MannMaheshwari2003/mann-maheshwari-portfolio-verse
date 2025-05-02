
import Section from "./section";
import { ArrowRight, Award, Calendar } from "lucide-react";

const achievements = [
  {
    title: "Coordinator",
    event: "Surkshetra 2k23",
    description: "Led a team in organizing and managing the technical fest, ensuring smooth execution of various events."
  },
  {
    title: "Core Coordinator",
    event: "TECHSPAN 2k24",
    description: "Played a key role in planning and implementing the annual tech symposium, coordinating with multiple department heads."
  }
];

const AchievementsSection = () => {
  return (
    <Section id="achievements" className="bg-muted/30">
      <h2 className="section-title">Roles & Achievements</h2>
      
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {achievements.map((achievement, index) => (
          <div 
            key={index} 
            className="p-6 border rounded-lg bg-card shadow-sm animate-fade-in opacity-0 transition-all hover:shadow-md hover:border-primary/30"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Award className="h-5 w-5 text-secondary" />
              <h3 className="text-xl font-semibold">{achievement.title}</h3>
            </div>
            <p className="font-medium text-primary mb-2 flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {achievement.event}
            </p>
            <p className="text-muted-foreground">{achievement.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default AchievementsSection;
