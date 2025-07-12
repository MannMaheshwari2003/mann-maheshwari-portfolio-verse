
const HeroAvatar = () => {
  return (
    <div
      className="relative lg:ml-[-2rem] animate-fade-in"
      style={{ animationDelay: '0.8s' }}
    >
      {/* Avatar with enhanced decorative rings */}
      <div className="relative">
        <div 
          className="absolute -inset-8 rounded-full border border-dashed border-primary/40 animate-spin-slow"
        />
        <div 
          className="absolute -inset-12 rounded-full border border-dashed border-secondary/30"
          style={{ animation: 'spin-slow 30s linear infinite reverse' }}
        />
        
        <div className="w-64 h-64 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden border-4 border-gradient-to-r from-primary/30 to-secondary/30 glass shadow-2xl shadow-primary/20 hover:scale-105 transition-all duration-500 group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img 
            src="/lovable-uploads/331208d5-833a-4bdd-85f2-97e0ab0aabb1.png" 
            alt="Mann Maheshwari" 
            className="w-full h-full object-cover relative z-10"
          />
        </div>
        
        {/* Enhanced floating badges with better positioning */}
        <div 
          className="absolute -right-8 top-1/4 glass py-2 px-4 rounded-full text-xs font-medium shadow-lg animate-float bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/20 backdrop-blur-md"
        >
          React
        </div>
        
        <div 
          className="absolute -left-12 bottom-1/4 glass py-2 px-4 rounded-full text-xs font-medium shadow-lg animate-float bg-gradient-to-r from-secondary/20 to-secondary/10 border border-secondary/20 backdrop-blur-md"
          style={{ animationDelay: '1s', animationDuration: '4s' }}
        >
          JavaScript
        </div>
        
        <div 
          className="absolute -bottom-4 right-1/4 glass py-2 px-4 rounded-full text-xs font-medium shadow-lg animate-float bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/20 backdrop-blur-md"
          style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}
        >
          UI/UX
        </div>
      </div>
    </div>
  );
};

export default HeroAvatar;
