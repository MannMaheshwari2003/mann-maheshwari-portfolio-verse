
import { cn } from "@/lib/utils";
import { ReactNode, CSSProperties } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "primary" | "secondary" | "accent" | "premium";
  hover?: boolean;
  interactive?: boolean;
  glow?: boolean;
  style?: CSSProperties;
}

const GlassCard = ({ 
  children, 
  className, 
  variant = "default", 
  hover = true, 
  interactive = false,
  glow = false,
  style 
}: GlassCardProps) => {
  const variants = {
    default: "bg-card/85 border-white/15 shadow-lg",
    primary: "bg-primary/12 border-primary/25 shadow-primary/10",
    secondary: "bg-secondary/12 border-secondary/25 shadow-secondary/10",
    accent: "bg-accent/12 border-accent/25 shadow-accent/10",
    premium: "bg-gradient-to-br from-primary/10 via-card/90 to-secondary/10 border-gradient-to-r border-primary/20 shadow-xl"
  };

  const glowEffects = {
    default: "shadow-card/50",
    primary: "shadow-primary/20",
    secondary: "shadow-secondary/20",
    accent: "shadow-accent/20",
    premium: "shadow-primary/15"
  };

  return (
    <div className="relative group">
      {/* Glow effect background */}
      {glow && (
        <div className={cn(
          "absolute inset-0 rounded-xl blur-xl opacity-0 transition-opacity duration-500",
          glowEffects[variant],
          "group-hover:opacity-100"
        )} />
      )}
      
      <div 
        className={cn(
          "relative backdrop-blur-xl border rounded-xl transition-all duration-500 overflow-hidden",
          variants[variant],
          hover && "hover:shadow-2xl hover:-translate-y-1 hover:border-opacity-40",
          interactive && "cursor-pointer hover:scale-[1.02] active:scale-[0.98]",
          glow && "hover:shadow-2xl",
          className
        )}
        style={style}
      >
        {/* Subtle inner glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
        
        {/* Animated border shimmer on hover */}
        {interactive && (
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
        )}
      </div>
    </div>
  );
};

export default GlassCard;
