
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
      className="h-full animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Card className="group relative overflow-hidden h-full flex flex-col glass border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <CardHeader className="relative z-10 pb-4 space-y-3">
          <div className="flex items-start justify-between gap-3">
            <CardTitle className="text-lg sm:text-xl font-semibold text-foreground line-clamp-2 leading-tight">
              {title}
            </CardTitle>
            <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors duration-300">
              <Sparkles className="h-4 w-4 text-primary/80" />
            </div>
          </div>
          
          <CardDescription className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {description}
          </CardDescription>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {technologies.map((tech, techIndex) => (
              <Badge 
                key={techIndex} 
                variant="secondary" 
                className="text-xs px-2.5 py-1 bg-muted/50 text-foreground/70 hover:bg-muted hover:text-foreground transition-colors duration-200 border border-border/50"
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </CardHeader>
        
        <CardContent className="flex-grow relative z-10 pt-4 pb-4">
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground/80 leading-relaxed">
              {longDescription}
            </p>
            
            {features && features.length > 0 && (
              <div className="bg-muted/30 rounded-lg p-3 border border-border/50">
                <h4 className="font-medium text-foreground mb-2 flex items-center text-sm">
                  <Code className="h-3.5 w-3.5 text-primary/80 mr-2" />
                  Key Features
                </h4>
                <ul className="space-y-1.5">
                  {features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-xs">
                      <span className="inline-block w-1 h-1 rounded-full bg-primary/60 mt-1.5 flex-shrink-0"></span>
                      <span className="text-muted-foreground/80 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                  {features.length > 3 && (
                    <li className="text-xs text-primary/80 font-medium pt-1">
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
                className="w-full group border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
              >
                <Eye className="w-4 h-4 mr-2 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                <span className="font-medium text-sm">View Details</span>
              </Button>
            </DialogTrigger>
            
            <DialogContent className="sm:max-w-[700px] max-h-[85vh] overflow-y-auto glass-elegant border border-border">
              <DialogHeader>
                <DialogTitle className="text-2xl font-heading flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Sparkles className="h-5 w-5 text-primary/80" />
                  </div>
                  <span className="text-foreground">{title}</span>
                </DialogTitle>
              </DialogHeader>
              
              <DialogDescription>
                <div className="mt-6 space-y-5">
                  <div className="bg-muted/30 rounded-lg p-4 border border-border/50">
                    <p className="text-base text-foreground/80 leading-relaxed">{longDescription}</p>
                  </div>
                  
                  {features && features.length > 0 && (
                    <div className="bg-card/50 rounded-lg p-5 border border-border/50">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center text-base">
                        <ExternalLink className="h-4 w-4 text-primary/80 mr-2" />
                        Key Features & Capabilities
                      </h4>
                      <div className="grid gap-2.5">
                        {features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-2.5 p-3 rounded-md bg-muted/30 border border-border/30">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 flex-shrink-0"></span>
                            <span className="text-sm text-foreground/75 leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="bg-card/50 rounded-lg p-5 border border-border/50">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center text-base">
                      <Code className="h-4 w-4 text-primary/80 mr-2" />
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline"
                          className="bg-muted/30 hover:bg-muted/50 border-border/50 text-foreground/70 px-3 py-1 text-sm font-normal transition-colors duration-200"
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
