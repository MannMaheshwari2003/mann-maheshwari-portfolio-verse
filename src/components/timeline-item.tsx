
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
      "relative flex items-start gap-x-6 md:gap-x-8 pb-10 animate-fade-in group",
      "opacity-0"
    )}
    style={{ animationDelay: `${index * 0.15}s` }}>
      {/* Modern timeline line with subtle gradient */}
      <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-primary/40 via-border to-border/50">
        <div className="absolute top-1 -left-[6px] h-[14px] w-[14px] rounded-full bg-primary/20 border-[3px] border-primary group-hover:scale-125 group-hover:border-primary/80 transition-all duration-300">
          <div className="absolute inset-0 rounded-full bg-primary/40 animate-ping"></div>
        </div>
      </div>
      
      {/* Modern content container with card styling */}
      <div className="ml-8 md:ml-10 flex-1">
        <div className="glass border border-border hover:border-primary/20 rounded-lg p-4 md:p-5 transition-all duration-300 hover:shadow-md group-hover:translate-x-1">
          <span className="inline-block px-2.5 py-1 rounded-md bg-primary/10 text-primary font-medium text-xs md:text-sm mb-2">{year}</span>
          <h3 className="font-heading font-semibold text-base md:text-lg text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>
          {description && (
            <p className="mt-3 text-sm text-foreground/70 leading-relaxed border-l-2 border-primary/30 pl-3">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
