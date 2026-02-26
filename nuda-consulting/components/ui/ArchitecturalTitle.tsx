"use client";
import { motion } from "framer-motion";

export const ArchitecturalTitle = () => {
  return (
    <div className="flex flex-col items-center text-center px-4">
      {/* Etiqueta superior */}
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-[#a31d1d] font-mono text-[10px] tracking-[0.5em] uppercase mb-12"
      >
        01 // Visión
      </motion.span>

      {/* Título Principal */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col leading-[0.85]"
      >
        <h2 className="text-white text-6xl md:text-9xl font-black tracking-tighter uppercase">
          LA ARQUITECTURA
        </h2>
        <h2 
          className="text-6xl md:text-9xl font-black tracking-tighter uppercase opacity-40"
          style={{ 
            WebkitTextStroke: "1px rgba(255, 255, 255, 0.8)", 
            color: "transparent" 
          }}
        >
          ES EL MENSAJE.
        </h2>
      </motion.div>

      {/* Subtexto descriptivo */}
<motion.p 
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 2 }}
  transition={{ delay: 0.6, duration: 1.2 }}
  className="max-w-2xl mt-12 text-gray-400 text-xs md:text-[13px] font-light leading-relaxed tracking-wide italic px-4"
>
  "En NUDA nos obsesiona la esencia y la originalidad del concepto. No nos escondemos tras fachadas innecesarias; desnudamos la complejidad para revelar una ingeniería que, al ser impecable, no necesita adornos."
</motion.p>

      {/* Terminal Prompt
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-14 font-mono text-[9px] text-[#a31d1d] opacity-70 tracking-widest uppercase"
      >
        root@nuda:~/logica$ execution_perfect <span className="animate-pulse">_</span>
      </motion.div> */}
    </div>
  );
};