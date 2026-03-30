
const BackgroundElements = () => {
  return (
    <>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-[0.03]" aria-hidden="true" />
      
      {/* Single subtle ring */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full border border-border/10"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        aria-hidden="true"
      />
    </>
  );
};

export default BackgroundElements;
