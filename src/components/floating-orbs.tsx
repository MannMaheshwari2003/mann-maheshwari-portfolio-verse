
const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Primary orb */}
      <div
        className="absolute w-32 h-32 rounded-full bg-primary/10 blur-xl animate-float-orb"
        style={{ 
          top: '20%', 
          left: '10%',
          animationDuration: '20s',
          animationDelay: '0s'
        }}
      />
      
      {/* Secondary orb */}
      <div
        className="absolute w-24 h-24 rounded-full bg-secondary/8 blur-xl animate-float-orb"
        style={{ 
          top: '60%', 
          right: '15%',
          animationDuration: '25s',
          animationDelay: '5s'
        }}
      />
      
      {/* Accent orb */}
      <div
        className="absolute w-20 h-20 rounded-full bg-accent/6 blur-xl animate-float-orb"
        style={{ 
          bottom: '30%', 
          left: '50%',
          animationDuration: '30s',
          animationDelay: '10s'
        }}
      />
    </div>
  );
};

export default FloatingOrbs;
