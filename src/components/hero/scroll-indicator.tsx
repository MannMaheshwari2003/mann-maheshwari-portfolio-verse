
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const ScrollIndicator = () => {
  return (
    <motion.div 
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      <span className="text-sm text-foreground/60 mb-2">Scroll to explore</span>
      <motion.div
        className="glass p-2 rounded-full"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="w-5 h-5 text-primary" />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
