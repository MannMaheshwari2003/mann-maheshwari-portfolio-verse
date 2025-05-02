
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Technology {
  name: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: Technology[];
  longDescription: string;
  features?: string[];
}

const ProjectCard = ({ title, description, technologies, longDescription, features }: ProjectCardProps) => {
  return (
    <Card className="project-card h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-secondary/20 text-secondary-foreground">
              {tech.name}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full" size="sm">Learn More</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{title}</DialogTitle>
              <DialogDescription>
                <div className="mt-4 space-y-4">
                  <p>{longDescription}</p>
                  {features && features.length > 0 && (
                    <>
                      <h4 className="font-semibold text-foreground">Key Features:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {technologies.map((tech, index) => (
                      <Badge key={index} variant="outline">
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
