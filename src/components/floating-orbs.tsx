
const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Primary orb with enhanced gradients */}
      <div
        className="absolute w-40 h-40 rounded-full opacity-60 blur-2xl animate-float-orb bg-gradient-radial from-primary/15 via-primary/8 to-transparent"
        style={{ 
          top: '15%', 
          left: '8%',
          animationDuration: '25s',
          animationDelay: '0s'
        }}
      />
      
      {/* Secondary orb with different timing */}
      <div
        className="absolute w-32 h-32 rounded-full opacity-50 blur-2xl animate-float-orb bg-gradient-radial from-secondary/12 via-secondary/6 to-transparent"
        style={{ 
          top: '65%', 
          right: '12%',
          animationDuration: '30s',
          animationDelay: '7s'
        }}
      />
      
      {/* Accent orb with unique animation */}
      <div
        className="absolute w-28 h-28 rounded-full opacity-40 blur-xl animate-float-orb bg-gradient-radial from-accent/10 via-accent/5 to-transparent"
        style={{ 
          bottom: '25%', 
          left: '45%',
          animationDuration: '35s',
          animationDelay: '14s'
        }}
      />
      
      {/* Additional micro orbs for depth */}
      <div
        className="absolute w-16 h-16 rounded-full opacity-30 blur-lg animate-float-orb bg-gradient-radial from-primary/8 via-primary/4 to-transparent"
        style={{ 
          top: '40%', 
          left: '75%',
          animationDuration: '20s',
          animationDelay: '3s'
        }}
      />
      
      <div
        className="absolute w-20 h-20 rounded-full opacity-35 blur-xl animate-float-orb bg-gradient-radial from-secondary/6 via-secondary/3 to-transparent"
        style={{ 
          bottom: '50%', 
          right: '70%',
          animationDuration: '28s',
          animationDelay: '11s'
        }}
      />
    </div>
  );
};

export default FloatingOrbs;
