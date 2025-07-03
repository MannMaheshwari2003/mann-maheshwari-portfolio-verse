import Section from "./section";
import { Award, Calendar, Star } from "lucide-react";
import { motion } from "framer-motion";

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
  },
  {
    title: "Technology Job Simulation",
    event: "Deloitte - Australia (Forage)",
    description: "Completed a job simulation involving development and coding. Wrote a proposal for creating a dashboard."
  }
];

const AchievementsSection = () => {
  return (
    <Section id="achievements" className="bg-card/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-secondary/5 rounded-full filter blur-3xl"></div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10"
      >
        <motion.h2 
          className="section-title mb-16 text-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          Roles & Achievements
        </motion.h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="glass-card border border-primary/10 p-8 rounded-xl hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute -top-5 left-8 glass p-3 rounded-xl border border-primary/20">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="pt-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="h-5 w-5 text-secondary" />
                      <h3 className="text-xl font-heading font-semibold">{achievement.title}</h3>
                    </div>
                    
                    <div className="glass inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-sm mb-4">
                      <Calendar className="h-3.5 w-3.5 text-primary" />
                      <span className="font-medium">{achievement.event}</span>
                    </div>
                    
                    <p className="text-foreground/80">{achievement.description}</p>
                    
                    <div className="mt-6 pt-6 border-t border-border/30">
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i} 
                              className="w-1.5 h-6 rounded-full" 
                              style={{ 
                                background: `hsl(var(--${i < 3 ? 'primary' : 'secondary'}) / ${0.7 - i * 0.1})`,
                                transform: `scaleY(${1 - i * 0.15})`
                              }}
                            ></div>
                          ))}
                        </div>
                        
                        <motion.div
                          className="text-sm text-primary font-medium"
                          whileInView={{ scale: [1, 1.2, 1] }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, times: [0, 0.5, 1] }}
                        >
                          Achievement
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default AchievementsSection;
