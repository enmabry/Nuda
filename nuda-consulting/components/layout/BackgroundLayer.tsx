// Indica que este componente se ejecuta en el cliente (Next.js)
"use client";
// Importa motion y AnimatePresence para animaciones
import { motion, AnimatePresence } from "framer-motion";
// Importa el componente Dither para el fondo animado
import Dither from "@/components/bits/Dither";

// Componente BackgroundLayer: capa de fondo animada (organismo)
export const BackgroundLayer = ({ active }: { active: boolean }) => (
  // Contenedor absoluto centrado, cubre toda la pantalla
  <div className="absolute inset-0 z-0 flex items-center justify-center">
    {/* AnimatePresence permite animar la entrada/salida del fondo */}
    <AnimatePresence>
      {/* Si active es true, muestra el fondo animado */}
      {active && (
        // motion.div para animar la opacidad del fondo
        <motion.div
          initial={{ opacity: 0 }} // Inicia invisible
          animate={{ opacity: 1 }} // Se vuelve visible
          transition={{ duration: 2 }} // Transición suave de 2 segundos
          className="w-full h-full" // Tamaño exacto solicitado
        >
          {/* Dither: fondo animado tipo "ruido" (átomo) */}
          <Dither
            waveColor={[0.5, 0.5, 0.5]} // Color gris medio
            disableAnimation={false} // Permite animación
            enableMouseInteraction={false}// Permite interacción con el mouse
            mouseRadius={0.3} // Radio de interacción del mouse
            colorNum={12} // Número de colores
            pixelSize={3} // Tamaño de píxel
            waveAmplitude={0.3} // Amplitud de la onda
            waveFrequency={2} // Frecuencia de la onda
            waveSpeed={0.03} // Velocidad de la onda
          />
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);