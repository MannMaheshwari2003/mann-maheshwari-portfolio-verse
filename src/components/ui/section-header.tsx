
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
  variant?: "default" | "large" | "elegant" | "minimal";
}

const SectionHeader = ({ 
  title, 
  subtitle, 
  className, 
  centered = true, 
  variant = "default" 
}: SectionHeaderProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "large":
        return "text-3xl md:text-5xl lg:text-6xl font-black";
      case "elegant":
        return "text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight";
      case "minimal":
        return "text-2xl md:text-3xl lg:text-4xl font-bold";
      default:
        return "text-2xl md:text-4xl lg:text-5xl font-bold";
    }
  };

  return (
    <div className={cn("mb-12 sm:mb-16", centered && "text-center", className)}>
      <h2 className={cn(
        "font-heading mb-4 text-foreground",
        getVariantStyles()
      )}>
        {title}
      </h2>
      
      {/* Clean accent line */}
      <div className={cn("flex items-center gap-1.5 mb-6", centered && "justify-center")}>
        <div className="w-8 h-0.5 bg-primary rounded-full" />
        <div className="w-2 h-2 bg-primary/60 rounded-full" />
        <div className="w-8 h-0.5 bg-primary/40 rounded-full" />
      </div>
      
      {subtitle && (
        <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
