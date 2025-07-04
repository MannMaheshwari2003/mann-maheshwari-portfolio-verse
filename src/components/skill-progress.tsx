
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
      className="glass p-4 rounded-xl hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 animate-fade-in hover-scale"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex justify-between mb-2 items-center">
        <span className="font-medium">{name}</span>
        <div className="glass text-sm font-bold py-1 px-2 rounded-md min-w-[40px] text-center">
          {progress}%
        </div>
      </div>
      <Progress 
        value={progress} 
        className="h-2 bg-muted/30" 
        indicatorClassName="bg-gradient-to-r from-primary to-secondary"
      />
    </div>
  );
};

export default SkillProgress;
