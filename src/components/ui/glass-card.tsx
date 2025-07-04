
import { cn } from "@/lib/utils";
import { ReactNode, CSSProperties } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "primary" | "secondary" | "accent";
  hover?: boolean;
  style?: CSSProperties;
}

const GlassCard = ({ children, className, variant = "default", hover = true, style }: GlassCardProps) => {
  const variants = {
    default: "bg-card/80 border-white/10",
    primary: "bg-primary/10 border-primary/20",
    secondary: "bg-secondary/10 border-secondary/20",
    accent: "bg-accent/10 border-accent/20"
  };

  return (
    <div 
      className={cn(
        "backdrop-blur-md border shadow-lg rounded-xl transition-all duration-300",
        variants[variant],
        hover && "hover:shadow-xl hover:-translate-y-1 hover:border-opacity-30",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlassCard;
