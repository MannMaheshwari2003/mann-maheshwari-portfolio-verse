
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
      <div className="relative inline-block group">
        {/* Enhanced main title with better gradient */}
        <h2 className={cn(
          "relative z-10 font-heading mb-4 sm:mb-6 transition-all duration-500",
          "bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent",
          "drop-shadow-sm group-hover:drop-shadow-md",
          "animate-fade-in",
          getVariantStyles()
        )}>
          {title}
        </h2>
        
        {/* Enhanced decorative elements */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          <div className="w-2 h-2 bg-gradient-to-r from-secondary to-accent rounded-full animate-pulse"></div>
          <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-secondary to-accent rounded-full"></div>
        </div>
        
        {/* Enhanced glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-2xl -z-10 opacity-0 group-hover:opacity-40 transition-all duration-500 scale-110"></div>
        
        {/* Subtle border glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-lg blur-sm opacity-0 group-hover:opacity-20 transition-all duration-500 -z-20"></div>
      </div>
      
      {subtitle && (
        <div className="relative mt-6 sm:mt-8">
          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-medium animate-fade-in backdrop-blur-sm">
            {subtitle}
          </p>
          
          {/* Subtle highlight for subtitle */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-lg blur-xl opacity-50"></div>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
