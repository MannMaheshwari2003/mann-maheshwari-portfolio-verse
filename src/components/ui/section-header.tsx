
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

const SectionHeader = ({ title, subtitle, className, centered = true }: SectionHeaderProps) => {
  return (
    <div className={cn("mb-12 sm:mb-16", centered && "text-center", className)}>
      <h2 className="section-title mb-4">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
