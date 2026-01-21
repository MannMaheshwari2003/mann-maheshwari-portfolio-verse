
import { useEffect, useRef, useState } from "react";
import { Progress } from "@/components/ui/progress";

interface SkillProgressProps {
  name: string;
  level: number;
  index: number;
}

const SkillProgress = ({ name, level, index }: SkillProgressProps) => {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(level);
    }, index * 100);
    
    return () => clearTimeout(timer);
  }, [level, index]);

  return (
    <div 
      ref={ref}
      className="group bg-card/50 border border-border/50 p-4 rounded-xl hover:border-primary/20 hover:bg-card/80 transition-all duration-300"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="flex justify-between mb-3 items-center">
        <span className="font-medium text-sm text-foreground">{name}</span>
        <span className="text-xs font-semibold text-muted-foreground tabular-nums">
          {progress}%
        </span>
      </div>
      <Progress 
        value={progress} 
        className="h-1.5 bg-muted/50" 
        indicatorClassName="bg-primary transition-all duration-700 ease-out"
      />
    </div>
  );
};

export default SkillProgress;
