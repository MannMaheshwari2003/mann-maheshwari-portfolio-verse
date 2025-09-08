
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Eye, Code, ExternalLink, Sparkles } from "lucide-react";

interface Technology {
  name: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: Technology[];
  longDescription: string;
  features?: string[];
  index?: number;
}

const ProjectCard = ({ title, description, technologies, longDescription, features, index = 0 }: ProjectCardProps) => {
  return (
    <div
      className="h-full animate-fade-in hover-scale"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Card className="group relative overflow-hidden h-full flex flex-col glass-premium hover:glass-elegant transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/25 border border-primary/20 hover:border-primary/40">
        {/* Enhanced gradient backgrounds with better visual depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/12 via-transparent to-secondary/12 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-radial from-secondary/15 via-secondary/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-80 transition-all duration-1000" style={{ transitionDelay: '200ms' }}></div>
        
        <CardHeader className="relative z-10 pb-4">
          <div className="flex items-start justify-between gap-3 mb-4">
            <CardTitle className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-500 line-clamp-2 leading-tight">
              {title}
            </CardTitle>
            <div className="flex-shrink-0 p-2.5 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 group-hover:from-primary/25 group-hover:to-secondary/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <Sparkles className="h-5 w-5 text-primary group-hover:animate-pulse" />
            </div>
          </div>
          
          <CardDescription className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-500 line-clamp-3 leading-relaxed">
            {description}
          </CardDescription>
          
          <div className="flex flex-wrap gap-2.5 pt-4">
            {technologies.map((tech, techIndex) => (
              <Badge 
                key={techIndex} 
                variant="secondary" 
                className="text-xs px-3 py-1.5 bg-gradient-to-r from-secondary/20 to-accent/20 text-secondary hover:from-secondary/30 hover:to-accent/30 transition-all duration-300 border border-secondary/30 hover:border-secondary/50 hover:scale-105 backdrop-blur-sm"
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </CardHeader>
        
        <CardContent className="flex-grow relative z-10 pt-6 pb-6">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {longDescription}
            </p>
            
            {features && features.length > 0 && (
              <div className="bg-gradient-to-r from-card/50 to-card/30 rounded-xl p-4 border border-primary/10">
                <h4 className="font-semibold text-foreground mb-3 flex items-center text-sm">
                  <div className="p-1 rounded-lg bg-primary/15 mr-2">
                    <Code className="h-3 w-3 text-primary" />
                  </div>
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-xs">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                      <span className="text-muted-foreground leading-relaxed">{feature}</span>
                    </li>
                  ))}
                  {features.length > 3 && (
                    <li className="text-xs text-primary font-medium">
                      +{features.length - 3} more features...
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="relative z-10 pt-0">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full group relative overflow-hidden hover:text-primary hover:bg-primary/5 border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <span className="flex items-center relative z-10">
                  <Eye className="w-4 h-4 mr-2 group-hover:text-primary transition-colors duration-300" />
                  <span className="font-medium">View Details</span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
              </Button>
            </DialogTrigger>
            
            <DialogContent className="sm:max-w-[700px] max-h-[85vh] overflow-y-auto glass-premium border border-primary/20">
              <DialogHeader>
                <DialogTitle className="text-2xl font-heading flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-gradient">{title}</span>
                </DialogTitle>
              </DialogHeader>
              
              <DialogDescription>
                <div className="mt-6 space-y-6">
                  <div className="bg-gradient-to-r from-card/80 to-card/60 rounded-xl p-5 border border-primary/10">
                    <p className="text-base text-foreground/90 leading-relaxed">{longDescription}</p>
                  </div>
                  
                  {features && features.length > 0 && (
                    <div className="bg-gradient-to-br from-primary/5 via-card/50 to-secondary/5 rounded-xl p-6 border border-primary/15">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center text-lg">
                        <div className="p-2 rounded-xl bg-primary/15 mr-3">
                          <ExternalLink className="h-5 w-5 text-primary" />
                        </div>
                        Key Features & Capabilities
                      </h4>
                      <div className="grid gap-3">
                        {features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3 p-3 rounded-lg bg-card/30 border border-primary/10 hover:border-primary/20 transition-colors duration-300">
                            <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary mt-2 flex-shrink-0"></span>
                            <span className="text-sm text-foreground/85 leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="bg-gradient-to-r from-secondary/5 via-card/50 to-accent/5 rounded-xl p-6 border border-secondary/15">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center text-lg">
                      <div className="p-2 rounded-xl bg-secondary/15 mr-3">
                        <Code className="h-5 w-5 text-secondary" />
                      </div>
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline"
                          className="bg-gradient-to-r from-secondary/10 to-accent/10 hover:from-secondary/20 hover:to-accent/20 border-secondary/30 hover:border-secondary/50 text-secondary px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                        >
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
