
import { useEffect, useRef, useState } from "react";
import { Progress } from "@/components/ui/progress";

interface SkillProgressProps {
  name: string;
  level: number;
  index: number;
}

const SkillProgress = ({ name, level, index }: SkillProgressProps) => {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setProgress(level);
      }, index * 100);
    }
  }, [show, level, index]);

  return (
    <div 
      ref={ref}
      className={`opacity-0 ${show ? "animate-fade-in" : ""}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
};

export default SkillProgress;
