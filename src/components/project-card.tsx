
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Eye, Code, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: { name: string }[];
  longDescription: string;
  features?: string[];
  index?: number;
}

const ProjectCard = ({ title, description, technologies, longDescription, features, index = 0 }: ProjectCardProps) => {
  return (
    <Card className="group h-full flex flex-col bg-card/80 border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-foreground/[0.03] overflow-hidden">
      <CardHeader className="pb-3 space-y-3">
        <CardTitle className="text-lg font-semibold text-foreground leading-tight font-heading">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {technologies.map((tech, i) => (
            <Badge key={i} variant="secondary" className="text-[11px] px-2 py-0.5 bg-muted/50 text-muted-foreground border-border/50 font-normal">
              {tech.name}
            </Badge>
          ))}
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow pt-0 pb-4">
        {features && features.length > 0 && (
          <div className="bg-muted/30 rounded-lg p-3 border border-border/30">
            <h4 className="font-medium text-foreground mb-2 flex items-center text-xs uppercase tracking-wider text-muted-foreground">
              <Code className="h-3 w-3 mr-1.5" />
              Key Features
            </h4>
            <ul className="space-y-1">
              {features.slice(0, 3).map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="w-1 h-1 rounded-full bg-primary/50 mt-1.5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
              {features.length > 3 && (
                <li className="text-xs text-primary/70 font-medium pt-0.5">
                  +{features.length - 3} more
                </li>
              )}
            </ul>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="pt-0">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full text-sm border-border/50 hover:border-primary/25 hover:bg-primary/5">
              <Eye className="w-3.5 h-3.5 mr-2" />
              View Details
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-heading">{title}</DialogTitle>
            </DialogHeader>
            <DialogDescription asChild>
              <div className="space-y-4 mt-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{longDescription}</p>
                {features && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground text-sm flex items-center gap-2">
                      <ExternalLink className="h-3.5 w-3.5 text-primary" />
                      Features
                    </h4>
                    <div className="space-y-1.5">
                      {features.map((f, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground p-2 rounded-md bg-muted/30">
                          <span className="w-1 h-1 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div>
                  <h4 className="font-medium text-foreground text-sm mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {technologies.map((t, i) => (
                      <Badge key={i} variant="outline" className="text-xs font-normal">{t.name}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
