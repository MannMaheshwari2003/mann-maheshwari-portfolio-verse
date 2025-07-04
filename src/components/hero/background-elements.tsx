
const BackgroundElements = () => {
  return (
    <>
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
      
      {/* Animated circles */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full border border-primary/20 opacity-30 animate-pulse"
        style={{ 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          animationDuration: '8s'
        }}
      />
      
      <div 
        className="absolute w-[700px] h-[700px] rounded-full border border-secondary/20 opacity-20 animate-pulse"
        style={{ 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          animationDuration: '12s',
          animationDelay: '1s'
        }}
      />
    </>
  );
};

export default BackgroundElements;
