import { useEffect, useState } from "react";

interface SkillProgressProps {
  name: string;
  level: number;
  index: number;
  /** Color cycle: red / blue / yellow */
  variant?: "red" | "blue" | "yellow";
}

const fillBg = {
  red: "bg-[hsl(var(--primary))]",
  blue: "bg-[hsl(var(--secondary))]",
  yellow: "bg-[hsl(var(--accent))]",
};

const SkillProgress = ({ name, level, index, variant }: SkillProgressProps) => {
  const [progress, setProgress] = useState(0);
  const palette: Array<"red" | "blue" | "yellow"> = ["red", "blue", "yellow"];
  const v = variant ?? palette[index % 3];

  useEffect(() => {
    const t = setTimeout(() => setProgress(level), index * 60);
    return () => clearTimeout(t);
  }, [level, index]);

  return (
    <div className="bg-card border-2 md:border-[3px] border-foreground p-3 shadow-bauhaus-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold uppercase tracking-widest text-foreground truncate pr-2">{name}</span>
        <span className="text-xs font-black tabular-nums text-foreground">{progress}%</span>
      </div>
      {/* Hard segmented bar inside a black box */}
      <div className="relative h-3 border-2 border-foreground bg-background overflow-hidden">
        <div
          className={`absolute inset-y-0 left-0 ${fillBg[v]} transition-[width] duration-700 ease-out`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default SkillProgress;
