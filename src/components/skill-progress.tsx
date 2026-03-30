
import { useEffect, useRef, useState } from "react";
import { Progress } from "@/components/ui/progress";

interface SkillProgressProps {
  name: string;
  level: number;
  index: number;
}

const SkillProgress = ({ name, level, index }: SkillProgressProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(level), index * 80);
    return () => clearTimeout(timer);
  }, [level, index]);

  return (
    <div className="p-3.5 rounded-lg bg-card/50 border border-border/40 hover:border-primary/15 transition-colors duration-200">
      <div className="flex justify-between mb-2 items-center">
        <span className="font-medium text-sm text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground tabular-nums font-mono">{progress}%</span>
      </div>
      <Progress 
        value={progress} 
        className="h-1.5 bg-muted/40" 
        indicatorClassName="bg-primary/80 transition-all duration-700 ease-out"
      />
    </div>
  );
};

export default SkillProgress;
