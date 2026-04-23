import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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

const cornerShapes = [
  { cls: "rounded-full bg-[hsl(var(--primary))]" },
  { cls: "bg-[hsl(var(--secondary))]" },
  { cls: "clip-triangle bg-[hsl(var(--accent))]" },
];

const headerBg = [
  "bg-[hsl(var(--accent))] text-foreground",
  "bg-[hsl(var(--secondary))] text-secondary-foreground",
];

const ProjectCard = ({ title, description, technologies, longDescription, features, index = 0 }: ProjectCardProps) => {
  const corner = cornerShapes[index % cornerShapes.length];
  const header = headerBg[index % headerBg.length];

  return (
    <Card className="relative h-full flex flex-col bg-card text-card-foreground border-2 md:border-4 border-foreground rounded-none shadow-bauhaus-lg lift-hover overflow-visible p-0">
      {/* Corner decoration */}
      <span aria-hidden="true" className={`absolute -top-3 -right-3 w-6 h-6 border-2 border-foreground ${corner.cls}`} />

      {/* Top color block — index */}
      <div className={`flex items-center justify-between px-5 py-3 border-b-2 md:border-b-4 border-foreground ${header}`}>
        <span className="text-[10px] font-bold uppercase tracking-[0.25em]">Project / {String(index + 1).padStart(2, "0")}</span>
        <Code className="h-4 w-4" strokeWidth={2.75} />
      </div>

      <CardHeader className="space-y-3 pt-5 pb-3">
        <CardTitle className="text-xl font-black uppercase tracking-tight leading-tight text-foreground">
          {title}
        </CardTitle>
        <CardDescription className="text-sm leading-relaxed text-muted-foreground font-medium">
          {description}
        </CardDescription>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-0.5 border-2 border-foreground bg-card text-foreground text-[10px] font-bold uppercase tracking-widest"
            >
              {tech.name}
            </span>
          ))}
        </div>
      </CardHeader>

      <CardContent className="flex-grow pt-0 pb-4">
        {features && features.length > 0 && (
          <div className="border-2 border-foreground p-3 bg-muted/40">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] mb-2 text-foreground flex items-center gap-1.5">
              <span className="w-2 h-2 bg-[hsl(var(--primary))] border border-foreground" />
              Key Features
            </h4>
            <ul className="space-y-1.5">
              {features.slice(0, 3).map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-foreground font-medium leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 flex-shrink-0 bg-foreground" />
                  {f}
                </li>
              ))}
              {features.length > 3 && (
                <li className="pt-0.5 text-[10px] font-bold uppercase tracking-widest text-[hsl(var(--primary))]">
                  + {features.length - 3} more
                </li>
              )}
            </ul>
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-0 pb-5 px-5">
        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              className="press-effect focus-ring w-full inline-flex items-center justify-center gap-2 px-4 py-3 border-2 border-foreground bg-foreground text-background font-bold uppercase tracking-widest text-xs shadow-bauhaus-sm"
            >
              <Eye className="h-4 w-4" strokeWidth={2.75} />
              View Details
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[640px] max-h-[85vh] overflow-y-auto border-2 md:border-4 border-foreground rounded-none shadow-bauhaus-xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-black uppercase tracking-tight">{title}</DialogTitle>
            </DialogHeader>
            <DialogDescription asChild>
              <div className="space-y-5 mt-4">
                <p className="text-sm text-foreground leading-relaxed font-medium">{longDescription}</p>
                {features && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      <ExternalLink className="h-3.5 w-3.5" strokeWidth={2.75} />
                      Features
                    </h4>
                    <div className="space-y-1.5">
                      {features.map((f, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-foreground font-medium p-2 border-2 border-foreground bg-muted/40">
                          <span className="mt-2 w-1.5 h-1.5 flex-shrink-0 bg-[hsl(var(--primary))]" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {technologies.map((t, i) => (
                      <span key={i} className="px-2 py-0.5 border-2 border-foreground bg-card text-foreground text-[10px] font-bold uppercase tracking-widest">
                        {t.name}
                      </span>
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
