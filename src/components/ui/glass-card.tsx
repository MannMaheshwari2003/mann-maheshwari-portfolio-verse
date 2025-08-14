
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
    default: "bg-card/95 border-border/30 shadow-lg hover:bg-card/98 hover:border-border/40",
    primary: "bg-primary/10 border-primary/25 shadow-primary/15 hover:bg-primary/15 hover:border-primary/35 hover:shadow-primary/20",
    secondary: "bg-secondary/10 border-secondary/25 shadow-secondary/15 hover:bg-secondary/15 hover:border-secondary/35 hover:shadow-secondary/20",
    accent: "bg-accent/10 border-accent/25 shadow-accent/15 hover:bg-accent/15 hover:border-accent/35 hover:shadow-accent/20",
    premium: "bg-gradient-to-br from-primary/8 via-card/95 to-secondary/8 border-primary/20 shadow-xl hover:from-primary/12 hover:to-secondary/12 hover:border-primary/30"
  };

  const blurClasses = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md", 
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl"
  };

  const glowEffects = {
    default: "shadow-foreground/10 hover:shadow-foreground/15",
    primary: "shadow-primary/20 hover:shadow-primary/30",
    secondary: "shadow-secondary/20 hover:shadow-secondary/30", 
    accent: "shadow-accent/20 hover:shadow-accent/30",
    premium: "shadow-primary/15 hover:shadow-primary/25"
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
          hover && "hover:shadow-2xl hover:-translate-y-1",
          interactive && "cursor-pointer hover:scale-[1.02] active:scale-[0.98]",
          className
        )}
        style={style}
      >
        {/* Refined inner gradient for better theme support */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-background/5 via-transparent to-background/10 pointer-events-none opacity-40" />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
        
        {/* Subtle shimmer effect */}
        {interactive && (
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none 
                          bg-gradient-to-r from-transparent via-primary/8 to-transparent 
                          animate-[shimmer_2s_ease-in-out_infinite]" />
        )}
      </div>
    </div>
  );
};

export default GlassCard;
