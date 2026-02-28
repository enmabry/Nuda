"use client";
import { motion } from "framer-motion";
import styles from "@/styles/manifesto.module.scss";
import { GlowText } from "@/components/ui/GlowText";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: "easeOut" as const }
  }
};

export const ManifestoText = () => (
  <motion.section 
    // Ajuste de padding: menos py en móvil para ganar espacio vertical
    className="flex flex-col items-center justify-center py-10 md:py-20 px-4 text-center"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {/* Título y Subtítulo */}
    <motion.header variants={itemVariants} className="mb-8 md:mb-12 flex flex-col items-center">
      {/* Ajuste Crítico: 
          - text-5xl en móvil para que no empuje el resto del contenido.
          - md:text-8xl para mantener la fuerza en escritorio.
      */}
      <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white leading-[0.85] m-0">
        NUDA
      </h1>
      
      {/* Subtítulo: 
          - text-[10px] en móvil para que quepa en una sola línea con el tracking ancho.
      */}
      <h2 className="text-[10px] md:text-lg lg:text-xl text-[#a31d1d] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] mt-4 md:mt-2">
        Soluciones Tecnológicas
      </h2>
    </motion.header>

    <div className="flex flex-col gap-6 items-center">
      {/* Párrafos: 
          - text-[11px] en móvil para que el bloque de texto no sea tan alto.
          - max-w-[280px] para que no toque los bordes del iPhone.
      */}
      <motion.p variants={itemVariants} className="text-[11px] md:text-base lg:text-lg text-white/80 font-medium leading-relaxed max-w-[280px] md:max-w-xl font-mono">
        El software hoy está lleno de capas.{" "}
        <GlowText>Marketing, ruido, promesas vacías.</GlowText> Es el &apos;fenómeno&apos; de Kant: una fachada que nos impide ver la realidad.
      </motion.p>

      <motion.p variants={itemVariants} className="text-[11px] md:text-base lg:text-lg text-white/80 font-medium leading-relaxed max-w-[280px] md:max-w-xl italic font-mono">
        Buscamos el <GlowText>noúmeno</GlowText>, la cosa en sí. Una ingeniería que no necesita vestirse para ser perfecta, porque su valor reside en su propia esencia,{" "}
        <GlowText>es casi una experiencia nudista.</GlowText>
      </motion.p>
    </div>
  </motion.section>
);