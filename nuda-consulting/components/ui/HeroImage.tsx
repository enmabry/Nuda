// Componente HeroImage: muestra una imagen animada para la sección principal (hero)
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Props del componente HeroImage
interface HeroImageProps {
  imageSrc: any; // Fuente de la imagen a mostrar
  direction?: "left" | "right"; // Dirección de entrada de la animación
}

// HeroImage: imagen animada con framer-motion y estilos personalizados
export const HeroImage = ({ imageSrc }: HeroImageProps) => (
  <motion.div 
    initial={{ opacity: 0, x: 100, scale: 0.95 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ delay: 0.8, duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
    className="relative w-full h-auto select-none pointer-events-none"
  >
    <div className="grayscale brightness-125 contrast-150 opacity-90">
      <Image 
        src={imageSrc} 
        alt="Esencia Nuda"
        priority
        className="w-full h-auto object-right"
      />
    </div>
  </motion.div>
);