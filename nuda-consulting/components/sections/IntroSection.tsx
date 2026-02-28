// components/sections/IntroSection.tsx
import { motion } from "framer-motion";
import { HeroHeader } from "@/components/layout/HeroHeader";
import { ActionButton } from "@/components/ui/Button";

interface IntroProps {
  onEnter: () => void;
}

export const IntroSection = ({ onEnter }: IntroProps) => (
  <motion.div
    key="intro"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ 
      opacity: 0, 
      scale: 1.1, // Cambio a 1.1 para efecto de "zoom in" al entrar
      filter: "blur(10px)",
      transition: { duration: 0.8 } 
    }}
    // pt-20 para dar espacio al notch/isla dinámica del iPhone
    className="flex flex-col items-center justify-center min-h-[100dvh] p-6 relative"
  >
    <div className="flex flex-col items-center gap-12 md:gap-16">
      <HeroHeader title="NUDA" subtitle="Servicios tecnológicos" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <ActionButton
          label="Entrar en la esencia"
          onClick={onEnter}
        />
      </motion.div>
    </div>

    {/* Decoración técnica opcional para el fondo de la intro */}
    <div className="absolute bottom-10 font-mono text-[7px] text-white/10 uppercase tracking-[1em]">
      System_Ready // v.1.0.2
    </div>
  </motion.div>
);