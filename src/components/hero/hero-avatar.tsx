
const HeroAvatar = () => {
  return (
    <div className="relative animate-fade-in" style={{ animationDelay: '0.6s' }}>
      <div className="relative">
        {/* Subtle decorative ring */}
        <div className="absolute -inset-4 rounded-full border border-dashed border-primary/20 animate-spin-slow" />
        
        <div className="w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-border/50 shadow-xl shadow-foreground/[0.05] hover:shadow-2xl transition-shadow duration-500">
          <img 
            src="/lovable-uploads/331208d5-833a-4bdd-85f2-97e0ab0aabb1.png" 
            alt="Mann Maheshwari - Full Stack Developer" 
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        
        {/* Minimal floating badges */}
        <div className="absolute -right-4 top-1/4 bg-card/90 backdrop-blur-sm py-1.5 px-3 rounded-full text-xs font-medium shadow-md border border-border/50 animate-float">
          React
        </div>
        <div className="absolute -left-6 bottom-1/3 bg-card/90 backdrop-blur-sm py-1.5 px-3 rounded-full text-xs font-medium shadow-md border border-border/50 animate-float" style={{ animationDelay: '1s' }}>
          Node.js
        </div>
      </div>
    </div>
  );
};

export default HeroAvatar;
