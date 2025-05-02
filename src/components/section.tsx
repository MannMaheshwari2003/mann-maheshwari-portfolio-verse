
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const Section = ({ id, className, children }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24 px-4 md:px-8 scroll-mt-20", className)}
    >
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
