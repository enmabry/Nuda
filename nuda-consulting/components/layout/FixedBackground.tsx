// components/layout/FixedBackground.tsx
import { motion } from "framer-motion";
import { DarkVeilBackground } from "@/components/bits/DarkVeilAtmospher"; // Asegúrate de que la ruta sea correcta

export const FixedBackground = ({ isInternal, isInside }: { isInternal: boolean, isInside: boolean }) => (
  <div className="fixed inset-0 z-0 bg-black">
    {/* Solo renderizamos el efecto si estamos "inside" (después de la intro).
        isInternal controla la opacidad para que al hacer scroll a Lógica, 
        el velo se desvanezca suavemente a negro puro.
    */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isInside && !isInternal ? 1 : 0,
        scale: isInternal ? 1.05 : 1 // Un ligero zoom out al desaparecer da profundidad
      }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-full h-full"
    >
      <DarkVeilBackground />
    </motion.div>
    
    {/* Viñeta radial: mantiene el centro del Manifiesto iluminado 
        y los bordes oscuros, mejorando el contraste.
    */}
    {isInside && (
      <motion.div 
        animate={{ opacity: isInternal ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.9)_100%)]" 
      />
    )}
  </div>
);