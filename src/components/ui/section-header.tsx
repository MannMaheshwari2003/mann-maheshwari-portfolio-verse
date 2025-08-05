
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
        return "text-4xl md:text-6xl lg:text-7xl font-black";
      case "elegant":
        return "text-3xl md:text-5xl lg:text-6xl font-light tracking-wide";
      case "minimal":
        return "text-2xl md:text-3xl lg:text-4xl font-medium";
      default:
        return "text-3xl md:text-5xl lg:text-6xl font-bold";
    }
  };

  return (
    <div className={cn("mb-12 sm:mb-16 lg:mb-20", centered && "text-center", className)}>
      <div className="relative inline-block">
        <h2 className={cn(
          "relative z-10 font-heading mb-4 sm:mb-6",
          "bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent",
          "drop-shadow-sm",
          getVariantStyles()
        )}>
          {title}
        </h2>
        
        {/* Decorative underline */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full opacity-80"></div>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-xl -z-10 opacity-30"></div>
      </div>
      
      {subtitle && (
        <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mt-4 sm:mt-6 leading-relaxed font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
