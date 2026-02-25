"use client";
import { motion } from "framer-motion";
import LogoLoop from '@/components/LogoLoop';

export const TechStack = ({ logos }: { logos: any[] }) => (
  // 1. Añadimos overflow-hidden aquí para proteger el layout global
  <div className="w-full mt-40 border-t border-white/5 pt-20 overflow-hidden">
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex flex-col items-center">
      <span className="text-gray-600 font-mono text-[9px] uppercase tracking-[0.5em] mb-16">
        Stack Tecnológico
      </span>
      
      {/* 2. Añadimos overflow-hidden y aseguramos el ancho máximo */}
      <div 
        className="w-full h-[120px] relative brightness-150 overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)'
        }}
      >
        <LogoLoop logos={logos} speed={30} direction="left" logoHeight={45} gap={110} scaleOnHover fadeOut={false} />
      </div>
    </motion.div>
  </div>
);