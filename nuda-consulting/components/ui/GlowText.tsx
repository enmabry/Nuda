// components/ui/GlowText.tsx
import { motion } from "framer-motion";

export const GlowText = ({ children }: { children: React.ReactNode }) => (
  <motion.span
    animate={{ 
      textShadow: [
        "0 0 5px rgba(163, 29, 29, 0)", 
        "0 0 15px rgba(163, 29, 29, 0.5)", 
        "0 0 5px rgba(163, 29, 29, 0)"
      ] 
    }}
    transition={{ 
      duration: 3, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }}
    className="text-[#a31d1d] font-bold"
  >
    {children}
  </motion.span>
);