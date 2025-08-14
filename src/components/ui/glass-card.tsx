
import { cn } from "@/lib/utils";
import { ReactNode, CSSProperties } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "primary" | "secondary" | "accent" | "premium";
  hover?: boolean;
  interactive?: boolean;
  glow?: boolean;
  blur?: "sm" | "md" | "lg" | "xl";
  style?: CSSProperties;
}

const GlassCard = ({ 
  children, 
  className, 
  variant = "default", 
  hover = true, 
  interactive = false,
  glow = false,
  blur = "lg",
  style 
}: GlassCardProps) => {
  const variants = {
    default: "glass border-border/40 shadow-xl hover:glass-premium hover:border-border/60 hover:shadow-2xl",
    primary: "bg-primary/8 border-primary/30 shadow-primary/20 hover:bg-primary/12 hover:border-primary/40 hover:shadow-primary/30",
    secondary: "bg-secondary/8 border-secondary/30 shadow-secondary/20 hover:bg-secondary/12 hover:border-secondary/40 hover:shadow-secondary/30",
    accent: "bg-accent/8 border-accent/30 shadow-accent/20 hover:bg-accent/12 hover:border-accent/40 hover:shadow-accent/30",
    premium: "glass-premium border-primary/25 shadow-2xl hover:border-primary/40 hover:shadow-primary/20"
  };

  const blurClasses = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md", 
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  };

  const glowEffects = {
    default: "shadow-foreground/10 hover:shadow-foreground/20",
    primary: "shadow-primary/25 hover:shadow-primary/40",
    secondary: "shadow-secondary/25 hover:shadow-secondary/40", 
    accent: "shadow-accent/25 hover:shadow-accent/40",
    premium: "shadow-primary/20 hover:shadow-primary/35"
  };

  return (
    <div className="relative group">
      {/* Enhanced glow effect with better performance */}
      {glow && (
        <div className={cn(
          "absolute -inset-1 rounded-2xl blur-xl opacity-0 transition-all duration-700",
          glowEffects[variant],
          "group-hover:opacity-100 group-hover:scale-105"
        )} />
      )}
      
      <div 
        className={cn(
          "relative border-2 rounded-2xl transition-all duration-500 overflow-hidden",
          blurClasses[blur],
          variants[variant],
          hover && "hover:shadow-2xl hover:-translate-y-2",
          interactive && "cursor-pointer hover:scale-[1.03] active:scale-[0.97] focus-ring",
          className
        )}
        style={style}
      >
        {/* Refined inner effects for better visual appeal */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-background/8 via-transparent to-background/12 pointer-events-none opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="relative z-10 p-6 sm:p-8">
          {children}
        </div>
        
        {/* Enhanced shimmer effect for interactive cards */}
        {interactive && (
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none 
                          bg-gradient-to-r from-transparent via-primary/8 to-transparent 
                          animate-shimmer" />
        )}
        
        {/* Subtle border highlight */}
        <div className="absolute inset-0 rounded-2xl border border-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </div>
  );
};

export default GlassCard;
