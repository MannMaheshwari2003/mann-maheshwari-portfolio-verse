
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
    default: "bg-card/90 border-border/20 shadow-lg hover:bg-card/95",
    primary: "bg-primary/8 border-primary/20 shadow-primary/10 hover:bg-primary/12 hover:border-primary/30",
    secondary: "bg-secondary/8 border-secondary/20 shadow-secondary/10 hover:bg-secondary/12 hover:border-secondary/30",
    accent: "bg-accent/8 border-accent/20 shadow-accent/10 hover:bg-accent/12 hover:border-accent/30",
    premium: "bg-gradient-to-br from-primary/5 via-card/95 to-secondary/5 border-primary/15 shadow-xl hover:from-primary/8 hover:to-secondary/8"
  };

  const blurClasses = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md", 
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  };

  const glowEffects = {
    default: "shadow-card/30 hover:shadow-card/40",
    primary: "shadow-primary/15 hover:shadow-primary/25",
    secondary: "shadow-secondary/15 hover:shadow-secondary/25", 
    accent: "shadow-accent/15 hover:shadow-accent/25",
    premium: "shadow-primary/10 hover:shadow-primary/20"
  };

  return (
    <div className="relative group">
      {/* Enhanced glow effect */}
      {glow && (
        <div className={cn(
          "absolute inset-0 rounded-xl blur-xl opacity-0 transition-all duration-500",
          glowEffects[variant],
          "group-hover:opacity-100 group-hover:scale-105"
        )} />
      )}
      
      <div 
        className={cn(
          "relative border rounded-xl transition-all duration-300 overflow-hidden",
          blurClasses[blur],
          variants[variant],
          hover && "hover:shadow-xl hover:-translate-y-0.5",
          interactive && "cursor-pointer hover:scale-[1.01] active:scale-[0.99]",
          className
        )}
        style={style}
      >
        {/* Refined inner gradient */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-background/10 via-transparent to-background/5 pointer-events-none opacity-60" />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
        
        {/* Subtle shimmer effect */}
        {interactive && (
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none 
                          bg-gradient-to-r from-transparent via-primary/5 to-transparent 
                          animate-[shimmer_2s_ease-in-out_infinite]" />
        )}
      </div>
    </div>
  );
};

export default GlassCard;
