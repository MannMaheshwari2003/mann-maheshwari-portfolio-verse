
import { motion } from "framer-motion";

const HeroAvatar = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.7, ease: "easeOut" }
    })
  };

  return (
    <motion.div
      className="relative lg:ml-[-2rem]"
      variants={fadeIn}
      custom={4}
    >
      {/* Avatar with decorative ring */}
      <div className="relative">
        <motion.div 
          className="absolute -inset-10 rounded-full border-2 border-dashed border-primary/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        />
        <motion.div 
          className="absolute -inset-14 rounded-full border-2 border-dashed border-secondary/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        />
        
        <div className="w-64 h-64 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden border-4 border-card glass shadow-xl shadow-primary/10 hover:scale-105 transition-all duration-300">
          <img 
            src="/lovable-uploads/331208d5-833a-4bdd-85f2-97e0ab0aabb1.png" 
            alt="Mann Maheshwari" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Floating badges */}
        <motion.div 
          className="absolute -right-10 top-1/4 glass py-1 px-3 rounded-full text-xs font-medium shadow-lg"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          React
        </motion.div>
        
        <motion.div 
          className="absolute -left-14 bottom-1/4 glass py-1 px-3 rounded-full text-xs font-medium shadow-lg"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          JavaScript
        </motion.div>
        
        <motion.div 
          className="absolute -bottom-6 right-1/4 glass py-1 px-3 rounded-full text-xs font-medium shadow-lg"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          UI/UX
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroAvatar;
