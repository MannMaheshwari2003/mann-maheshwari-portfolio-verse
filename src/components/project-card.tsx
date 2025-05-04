
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Eye, Code, ExternalLink, Github } from "lucide-react";

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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { delay: index * 0.1, duration: 0.5 }
        }
      }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full bg-card/70 backdrop-blur-sm border-primary/5 hover:border-primary/20 transition-all duration-300 flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-60 pointer-events-none"></div>
        
        <CardHeader className="relative z-10 border-b border-border/30">
          <CardTitle className="text-xl font-heading flex items-center">
            <div className="p-2 rounded-md bg-primary/10 mr-3">
              <Code className="h-4 w-4 text-primary" />
            </div>
            {title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-grow relative z-10 pt-6">
          <p className="text-sm text-foreground/80">{description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="bg-primary/5 hover:bg-primary/10 text-xs border-primary/20"
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="relative z-10 border-t border-border/30 bg-card/70 pt-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="ghost" 
                className="w-full group relative overflow-hidden hover:text-primary hover:bg-primary/5 border border-primary/10"
              >
                <span className="flex items-center">
                  <Eye className="w-4 h-4 mr-2 group-hover:text-primary" />
                  <span>View Details</span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Button>
            </DialogTrigger>
            
            <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto glass-card">
              <DialogHeader>
                <DialogTitle className="text-2xl font-heading flex items-center">
                  <span className="text-gradient">{title}</span>
                </DialogTitle>
              </DialogHeader>
              
              <DialogDescription>
                <div className="mt-4 space-y-4">
                  <p className="text-base text-foreground/90">{longDescription}</p>
                  
                  {features && features.length > 0 && (
                    <div className="bg-card/50 rounded-lg p-5">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <div className="p-1 rounded-md bg-primary/10 mr-2">
                          <ExternalLink className="h-4 w-4 text-primary" />
                        </div>
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {features.map((feature, index) => (
                          <li key={index} className="flex items-baseline gap-2 text-sm">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <Badge 
                          key={index} 
                          variant="outline"
                          className="bg-primary/5 hover:bg-primary/10 border-primary/20"
                        >
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-3 mt-6">
                    <Button variant="outline" size="sm" className="gap-2" disabled>
                      <Github className="h-4 w-4" />
                      <span>Repository</span>
                    </Button>
                    <Button size="sm" className="gap-2 btn-gradient" disabled>
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </Button>
                  </div>
                </div>
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
