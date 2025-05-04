
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const Section = ({ id, className, children }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-32 px-4 md:px-8 scroll-mt-24 relative",
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
