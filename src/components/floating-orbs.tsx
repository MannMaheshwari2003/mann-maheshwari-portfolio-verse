
import { motion } from "framer-motion";

const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Primary orb */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-primary/10 blur-xl"
        initial={{ x: -100, y: -100 }}
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: '20%', left: '10%' }}
      />
      
      {/* Secondary orb */}
      <motion.div
        className="absolute w-24 h-24 rounded-full bg-secondary/8 blur-xl"
        initial={{ x: 100, y: 100 }}
        animate={{
          x: [0, -80, -40, 0],
          y: [0, -40, -80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        style={{ top: '60%', right: '15%' }}
      />
      
      {/* Accent orb */}
      <motion.div
        className="absolute w-20 h-20 rounded-full bg-accent/6 blur-xl"
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -60, 30, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10,
        }}
        style={{ bottom: '30%', left: '50%' }}
      />
    </div>
  );
};

export default FloatingOrbs;
