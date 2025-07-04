
const HeroAvatar = () => {
  return (
    <div
      className="relative lg:ml-[-2rem] animate-fade-in"
      style={{ animationDelay: '0.8s' }}
    >
      {/* Avatar with decorative ring */}
      <div className="relative">
        <div 
          className="absolute -inset-10 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow"
        />
        <div 
          className="absolute -inset-14 rounded-full border-2 border-dashed border-secondary/20"
          style={{ animation: 'spin-slow 30s linear infinite reverse' }}
        />
        
        <div className="w-64 h-64 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden border-4 border-card glass shadow-xl shadow-primary/10 hover:scale-105 transition-all duration-300">
          <img 
            src="/lovable-uploads/331208d5-833a-4bdd-85f2-97e0ab0aabb1.png" 
            alt="Mann Maheshwari" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Floating badges */}
        <div 
          className="absolute -right-10 top-1/4 glass py-1 px-3 rounded-full text-xs font-medium shadow-lg animate-float"
        >
          React
        </div>
        
        <div 
          className="absolute -left-14 bottom-1/4 glass py-1 px-3 rounded-full text-xs font-medium shadow-lg animate-float"
          style={{ animationDelay: '1s', animationDuration: '4s' }}
        >
          JavaScript
        </div>
        
        <div 
          className="absolute -bottom-6 right-1/4 glass py-1 px-3 rounded-full text-xs font-medium shadow-lg animate-float"
          style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}
        >
          UI/UX
        </div>
      </div>
    </div>
  );
};

export default HeroAvatar;
