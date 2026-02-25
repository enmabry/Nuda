"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Importación de componentes de UI y Layout
import { ActionButton } from "@/components/ui/Button";
import { HeroHeader } from "@/components/layout/HeroHeader";
import { BackgroundLayer } from "@/components/layout/BackgroundLayer";
import { Navbar } from "@/components/layout/Navbar";
import { ManifestoText } from "@/components/ui/Manifesto";
import { HeroImage } from "@/components/ui/HeroImage";

// Importación del nuevo componente de sección
import { LogicSection } from "@/components/sections/LogicSection";

// Estilos
import styles from "@/styles/manifesto.module.scss";

// Activos
import ballerincaIcon from "@/images/ballerina.svg";

export default function Home() {
  const [isInside, setIsInside] = useState(false);
  const [isInternal, setIsInternal] = useState(false);

  // Detector de scroll para transformar el Navbar y apagar el fondo
  useEffect(() => {
    if (!isInside) return;

    const handleScroll = () => {
      // El umbral de 150px permite que el cambio ocurra cuando el Hero empieza a subir
      setIsInternal(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInside]);

  return (
    <main className="relative w-full bg-black">
      
      {/* --- CAPA FIJA (Fondo dinámico) --- */}
      <div className="fixed inset-0 z-0">
        {/* Animamos la opacidad del fondo: desaparece al entrar en Lógica */}
        <motion.div
          animate={{ opacity: isInternal ? 0 : 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full"
        >
          <BackgroundLayer active={isInside} />
        </motion.div>
        
        {/* Viñeta de profundidad fija */}
        {isInside && (
          <motion.div 
            animate={{ opacity: isInternal ? 0 : 1 }}
            className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.9)_100%)]" 
          />
        )}
      </div>

      {/* --- NAVEGACIÓN --- */}
      <Navbar visible={isInside} isInternal={isInternal} />

      {/* --- FLUJO DE CONTENIDO --- */}
      <div className="relative z-10 w-full">
        <AnimatePresence mode="wait">
          {!isInside ? (
            /* 1. PANTALLA DE ENTRADA */
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center justify-center min-h-screen p-6"
            >
              <HeroHeader title="NUDA" subtitle="Software en estado puro" />
              <ActionButton
                label="Entrar en la esencia"
                onClick={() => setIsInside(true)}
              />
            </motion.div>
          ) : (
            /* 2. EXPERIENCIA DE SCROLL */
            <motion.div
              key="experience-flow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center"
            >
              {/* SECCIÓN 01: MANIFIESTO (Hero a pantalla completa) */}
              <section className="h-screen w-full flex items-center justify-center">
                <div className={styles.experienceContainer}>
                  <div className={styles.textSection}>
                    <ManifestoText />
                  </div>
                  <div className={styles.imageSection}>
                    <HeroImage imageSrc={ballerincaIcon} />
                  </div>
                </div>
              </section>

              {/* SECCIÓN 02: LÓGICA (Nuevo Componente con fondo negro absoluto) */}
              <LogicSection />

              {/* SECCIÓN 03: SISTEMAS */}
              <section 
                id="sistemas" 
                className="w-full min-h-screen flex items-center justify-center bg-black"
              >
                 <h2 className="text-white/10 font-mono text-8xl lg:text-[12rem] tracking-tighter font-bold uppercase select-none">
                   Sistemas
                 </h2>
              </section>

              {/* FOOTER / CONTACTO */}
              <section id="contacto" className="h-[50vh] w-full flex items-center justify-center bg-black">
                <p className="text-[#a31d1d] font-mono text-xs tracking-widest uppercase">
                  N / A — 2024
                </p>
              </section>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}