import { cn } from "@/lib/utils";
import { ReactNode, CSSProperties } from "react";

interface BauhausCardProps {
  children: ReactNode;
  className?: string;
  /** Background swatch */
  variant?: "white" | "red" | "blue" | "yellow" | "black";
  /** Decorative corner shape */
  corner?: "circle" | "square" | "triangle" | "none";
  /** Color of the corner shape */
  cornerColor?: "red" | "blue" | "yellow" | "black";
  /** Hard-shadow size */
  shadow?: "sm" | "md" | "lg" | "xl" | "none";
  hover?: boolean;
  style?: CSSProperties;
  as?: "div" | "article" | "section";
}

const variantClasses: Record<NonNullable<BauhausCardProps["variant"]>, string> = {
  white: "bg-card text-card-foreground",
  red: "bg-[hsl(var(--primary))] text-primary-foreground",
  blue: "bg-[hsl(var(--secondary))] text-secondary-foreground",
  yellow: "bg-[hsl(var(--accent))] text-accent-foreground",
  black: "bg-foreground text-background",
};

const cornerColorClasses: Record<NonNullable<BauhausCardProps["cornerColor"]>, string> = {
  red: "bg-[hsl(var(--primary))]",
  blue: "bg-[hsl(var(--secondary))]",
  yellow: "bg-[hsl(var(--accent))]",
  black: "bg-foreground",
};

const shadowClasses = {
  none: "",
  sm: "shadow-bauhaus-sm",
  md: "shadow-bauhaus",
  lg: "shadow-bauhaus-lg",
  xl: "shadow-bauhaus-xl",
} as const;

const BauhausCard = ({
  children,
  className,
  variant = "white",
  corner = "circle",
  cornerColor = "red",
  shadow = "lg",
  hover = true,
  style,
  as: Tag = "div",
}: BauhausCardProps) => {
  return (
    <Tag
      className={cn(
        "relative border-2 md:border-4 border-foreground transition-transform duration-200 ease-out",
        variantClasses[variant],
        shadowClasses[shadow],
        hover && "hover:-translate-y-1",
        className,
      )}
      style={style}
    >
      {corner !== "none" && (
        <span
          aria-hidden="true"
          className={cn(
            "absolute -top-2 -right-2 md:-top-3 md:-right-3 w-4 h-4 md:w-5 md:h-5 border-2 border-foreground",
            cornerColorClasses[cornerColor],
            corner === "circle" && "rounded-full",
            corner === "triangle" && "clip-triangle border-0",
          )}
        />
      )}
      {children}
    </Tag>
  );
};

export default BauhausCard;
