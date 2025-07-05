
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  compact?: boolean;
}

const Section = ({ id, className, children, compact = false }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        compact ? "py-12 md:py-16" : "py-16 md:py-20",
        "px-4 md:px-8 scroll-mt-20 relative",
        className
      )}
    >
      <div className="container mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;
