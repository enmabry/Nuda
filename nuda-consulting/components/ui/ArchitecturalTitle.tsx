"use client";
import { motion } from "framer-motion";

export const ArchitecturalTitle = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      <span className="text-[#a31d1d] font-mono text-[10px] mb-4">01 // VISIÓN</span>
      <h2 className="flex flex-col leading-[0.85] tracking-tighter uppercase font-bold">
        <span className="text-5xl md:text-8xl lg:text-9xl text-white">
          La Arquitectura
        </span>
        <span
          className="text-5xl md:text-8xl lg:text-9xl text-transparent stroke-white"
          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
        >
          es el mensaje
        </span>
      </h2>
      <p className="mt-10 text-[10px] md:text-xs text-white/40 font-mono uppercase tracking-widest max-w-xs md:max-w-xl leading-loose">
        "En NUDA nos obsesiona la esencia y la originalidad del concepto. 
        Desnudamos la complejidad para revelar una ingeniería impecable."
      </p>
    </div>
  );
};