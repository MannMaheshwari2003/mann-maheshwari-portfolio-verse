
const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute w-[300px] h-[300px] rounded-full opacity-20 blur-[100px] bg-primary/10"
        style={{ top: '15%', left: '10%', animation: 'floatOrb 30s ease-in-out infinite' }}
      />
      <div
        className="absolute w-[250px] h-[250px] rounded-full opacity-15 blur-[100px] bg-accent/8"
        style={{ top: '60%', right: '10%', animation: 'floatOrb 35s ease-in-out infinite', animationDelay: '10s' }}
      />
    </div>
  );
};

export default FloatingOrbs;
