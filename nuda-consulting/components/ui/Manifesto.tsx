"use client";
import { motion } from "framer-motion";
import styles from "@/styles/manifesto.module.scss";
import { GlowText } from "@/components/ui/GlowText";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Tiempo entre el título, párrafo 1 y párrafo 2
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
  <section id="home" className="min-h-screen w-full flex flex-col items-center justify-center px-6 text-center">
    <motion.div className="space-y-4 md:space-y-8">
      <span className="text-[#a31d1d] font-mono text-[10px] md:text-xs tracking-[0.5em] uppercase">
        Manifiesto Noúmeno
      </span>
      <h1 className="text-7xl md:text-9xl font-bold text-white tracking-tighter leading-none">
        NUDA
      </h1>
      <h2 className="text-[#a31d1d] font-mono text-sm md:text-2xl tracking-[0.2em] uppercase">
        Soluciones Tecnológicas
      </h2>
      <p className="text-xs md:text-lg text-white/60 max-w-[300px] md:max-w-2xl mx-auto leading-relaxed uppercase font-mono mt-8">
        El software hoy está lleno de capas. <br />
        <span className="text-[#a31d1d]">Marketing, ruido, promesas vacías.</span>
        <br className="hidden md:block" /> Es el 'fenómeno' de Kant: una fachada que nos impide ver la realidad.
      </p>
    </motion.div>
  </section>
);