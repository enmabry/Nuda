// components/ui/ScrollIndicator.tsx
import { motion } from "framer-motion";

export const ScrollIndicator = ({ targetId, label }: { targetId: string, label: string }) => {
  const scrollTo = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }} // Aparece después de que el texto se asiente
      onClick={scrollTo}
      className="flex flex-col items-center gap-2 cursor-pointer group mt-20"
    >
      <span className="text-[#a31d1d] font-mono text-[10px] tracking-[0.3em] uppercase opacity-60 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
      
      {/* La flechita con animación de rebote sutil */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="text-[#a31d1d] text-lg font-light"
      >
        ↓
      </motion.div>
    </motion.div>
  );
};