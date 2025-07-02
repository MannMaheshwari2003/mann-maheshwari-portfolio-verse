
import { motion } from "framer-motion";

const BackgroundElements = () => {
  return (
    <>
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
      
      {/* Animated circles */}
      <motion.div 
        className="absolute w-[500px] h-[500px] rounded-full border border-primary/20 opacity-30"
        style={{ top: '50%', left: '50%', x: '-50%', y: '-50%' }}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 8, 
          ease: "easeInOut", 
          repeat: Infinity,
        }}
      />
      
      <motion.div 
        className="absolute w-[700px] h-[700px] rounded-full border border-secondary/20 opacity-20"
        style={{ top: '50%', left: '50%', x: '-50%', y: '-50%' }}
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ 
          duration: 12, 
          ease: "easeInOut", 
          repeat: Infinity,
          delay: 1
        }}
      />
    </>
  );
};

export default BackgroundElements;
