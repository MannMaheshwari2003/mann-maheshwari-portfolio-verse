
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
    description: "Completed a job simulation involving development and coding. Wrote a proposal for creating a dashboard.",
    featured: true
  }
];

const AchievementsSection = () => {
  return (
    <Section id="achievements" className="bg-card/30 relative overflow-hidden">
      {/* Enhanced decorative elements with breathing effect */}
      <div className="absolute top-0 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-primary/5 rounded-full filter blur-3xl animate-float-orb"></div>
      <div className="absolute bottom-0 right-1/4 w-24 sm:w-40 h-24 sm:h-40 bg-secondary/5 rounded-full filter blur-3xl animate-float-orb" style={{ animationDelay: '10s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 sm:w-32 h-20 sm:h-32 bg-accent/3 rounded-full filter blur-3xl animate-breathe"></div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10"
      >
        <motion.h2 
          className="section-title mb-12 sm:mb-16 text-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          Roles & Achievements
        </motion.h2>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-0">
          {/* First two achievements in a row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {achievements.slice(0, 2).map((achievement, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="glass-card border border-primary/10 p-6 sm:p-8 rounded-xl hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2 h-full animate-subtle-pulse">
                  <div className="absolute -top-3 sm:-top-5 left-6 sm:left-8 glass p-2 sm:p-3 rounded-xl border border-primary/20">
                    <Star className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  
                  <div className="pt-3 sm:pt-4">
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <Award className="h-4 w-4 sm:h-5 sm:w-5 text-secondary flex-shrink-0" />
                      <h3 className="text-lg sm:text-xl font-heading font-semibold">{achievement.title}</h3>
                    </div>
                    
                    <div className="glass inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs sm:text-sm mb-3 sm:mb-4">
                      <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary" />
                      <span className="font-medium">{achievement.event}</span>
                    </div>
                    
                    <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">{achievement.description}</p>
                    
                    <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border/30">
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i} 
                              className="w-1 sm:w-1.5 h-4 sm:h-6 rounded-full" 
                              style={{ 
                                background: `hsl(var(--${i < 3 ? 'primary' : 'secondary'}) / ${0.7 - i * 0.1})`,
                                transform: `scaleY(${1 - i * 0.15})`
                              }}
                            ></div>
                          ))}
                        </div>
                        
                        <motion.div
                          className="text-xs sm:text-sm text-primary font-medium"
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

          {/* Featured achievement centered */}
          <div className="flex justify-center">
            <motion.div
              className="relative max-w-2xl w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="glass-card border border-accent/20 p-6 sm:p-8 rounded-xl hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-2 h-full relative overflow-hidden">
                {/* Featured badge */}
                <div className="absolute -top-3 sm:-top-5 left-6 sm:left-8 glass p-2 sm:p-3 rounded-xl border border-accent/30 bg-accent/10">
                  <Star className="h-4 w-4 sm:h-6 sm:w-6 text-accent" />
                </div>
                
                {/* Subtle accent glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 rounded-xl animate-breathe"></div>
                
                <div className="pt-3 sm:pt-4 relative z-10">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <Award className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                    <h3 className="text-lg sm:text-xl font-heading font-semibold text-accent">{achievements[2].title}</h3>
                  </div>
                  
                  <div className="glass inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs sm:text-sm mb-3 sm:mb-4 border border-accent/20">
                    <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-accent" />
                    <span className="font-medium text-accent">{achievements[2].event}</span>
                  </div>
                  
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">{achievements[2].description}</p>
                  
                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border/30">
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className="w-1 sm:w-1.5 h-4 sm:h-6 rounded-full" 
                            style={{ 
                              background: `hsl(var(--accent) / ${0.8 - i * 0.1})`,
                              transform: `scaleY(${1 - i * 0.1})`
                            }}
                          ></div>
                        ))}
                      </div>
                      
                      <motion.div
                        className="text-xs sm:text-sm text-accent font-medium"
                        whileInView={{ scale: [1, 1.2, 1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, times: [0, 0.5, 1] }}
                      >
                        Featured
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default AchievementsSection;
