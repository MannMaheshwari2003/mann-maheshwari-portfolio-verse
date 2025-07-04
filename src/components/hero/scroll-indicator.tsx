
import { ArrowDown } from "lucide-react";

const ScrollIndicator = () => {
  return (
    <div 
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in"
      style={{ animationDelay: '2s' }}
    >
      <span className="text-sm text-foreground/60 mb-2">Scroll to explore</span>
      <div className="glass p-2 rounded-full animate-bounce">
        <ArrowDown className="w-5 h-5 text-primary" />
      </div>
    </div>
  );
};

export default ScrollIndicator;
