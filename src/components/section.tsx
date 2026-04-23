import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  compact?: boolean;
  /** Add a thick black bottom divider — true for most sections */
  divider?: boolean;
}

const Section = ({ id, className, children, compact = false, divider = true }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        compact ? "py-12 md:py-16" : "py-16 md:py-24",
        "px-4 md:px-8 scroll-mt-24 relative",
        divider && "border-b-2 md:border-b-4 border-foreground",
        className,
      )}
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;
