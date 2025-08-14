
const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Primary orb with enhanced theme support */}
      <div
        className="absolute w-36 h-36 rounded-full opacity-40 blur-3xl animate-float-orb bg-gradient-radial from-primary/12 via-primary/6 to-transparent"
        style={{ 
          top: '20%', 
          left: '10%',
          animationDuration: '20s',
          animationDelay: '0s'
        }}
      />
      
      {/* Secondary orb with different timing */}
      <div
        className="absolute w-28 h-28 rounded-full opacity-35 blur-3xl animate-float-orb bg-gradient-radial from-secondary/10 via-secondary/5 to-transparent"
        style={{ 
          top: '60%', 
          right: '15%',
          animationDuration: '25s',
          animationDelay: '5s'
        }}
      />
      
      {/* Accent orb with unique animation */}
      <div
        className="absolute w-24 h-24 rounded-full opacity-30 blur-2xl animate-float-orb bg-gradient-radial from-accent/8 via-accent/4 to-transparent"
        style={{ 
          bottom: '30%', 
          left: '50%',
          animationDuration: '30s',
          animationDelay: '10s'
        }}
      />
      
      {/* Additional micro orbs for depth */}
      <div
        className="absolute w-16 h-16 rounded-full opacity-25 blur-xl animate-float-orb bg-gradient-radial from-primary/6 via-primary/3 to-transparent"
        style={{ 
          top: '45%', 
          left: '80%',
          animationDuration: '18s',
          animationDelay: '2s'
        }}
      />
      
      <div
        className="absolute w-20 h-20 rounded-full opacity-30 blur-2xl animate-float-orb bg-gradient-radial from-secondary/5 via-secondary/2 to-transparent"
        style={{ 
          bottom: '55%', 
          right: '75%',
          animationDuration: '22s',
          animationDelay: '8s'
        }}
      />
    </div>
  );
};

export default FloatingOrbs;
