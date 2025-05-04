
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  description?: string;
  index: number;
}

const TimelineItem = ({ year, title, subtitle, description, index }: TimelineItemProps) => {
  return (
    <div className={cn(
      "relative flex items-start gap-x-6 md:gap-x-8 pb-12 animate-fade-in",
      "opacity-0"
    )}
    style={{ animationDelay: `${index * 0.2}s` }}>
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-[1px] bg-border">
        <div className="absolute top-1 -left-[5px] h-[10px] w-[10px] rounded-full bg-secondary border-4 border-background"></div>
      </div>
      
      {/* Content container */}
      <div className="ml-8 md:ml-10">
        <span className="block font-medium text-secondary text-sm md:text-base">{year}</span>
        <h3 className="font-heading font-semibold text-lg md:text-xl mt-1">{title}</h3>
        <p className="text-muted-foreground mt-1">{subtitle}</p>
        {description && <p className="mt-2 text-sm">{description}</p>}
      </div>
    </div>
  );
};

export default TimelineItem;
