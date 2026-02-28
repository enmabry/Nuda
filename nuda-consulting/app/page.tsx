"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// UI Atoms & Molecules
import { Navbar } from "@/components/layout/Navbar";
import { FixedBackground } from "@/components/layout/FixedBackground";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { Footer } from "@/components/layout/Footer";

// Sections (Organisms)
import { IntroSection } from "@/components/sections/IntroSection";
import { ManifestoText } from "@/components/ui/Manifesto";
import { LogicSection } from "@/components/sections/LogicSection";
import { SystemsSection } from "@/components/sections/SystemSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  const [isInside, setIsInside] = useState(false);
  const [isInternal, setIsInternal] = useState(false);

  useEffect(() => {
    if (!isInside) return;
    const handleScroll = () => setIsInternal(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInside]);

  return (
    <main className="relative w-full bg-black scroll-smooth">
      <FixedBackground isInternal={isInternal} isInside={isInside} />
      <Navbar visible={isInside} isInternal={isInternal} />

      <div className="relative z-10 w-full">
        <AnimatePresence mode="wait">
          {!isInside ? (
            <IntroSection onEnter={() => setIsInside(true)} />
          ) : (
            <motion.div 
              key="experience-flow" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="flex flex-col items-center"
            >
              
              {/* HERO: MANIFIESTO */}
              <section 
                id="home" 
                className="relative h-screen w-full flex flex-col items-center justify-center px-6"
              >
                {/* <SectionLabel>Manifiesto Noúmeno</SectionLabel> */}
                
                {/* Contenedor principal del texto */}
                <div className="flex-1 flex items-center justify-center">
                  <ManifestoText />
                </div>
                
                {/* AJUSTE TÉCNICO: 
                  Posicionamos el indicador de forma absoluta al fondo 
                  y le damos más aire en móvil para evitar el choque visual.
                */}
                <div className="absolute bottom-8 md:bottom-12 w-full flex justify-center pointer-events-none">
                  <div className="pointer-events-auto scale-75 md:scale-100 opacity-60 hover:opacity-100 transition-opacity">
                    <ScrollIndicator targetId="logica" label="Bajar a la visión" />
                  </div>
                </div>
              </section>

              {/* FLUJO DE INGENIERÍA */}
              {/* TIP: Si LogicSection sigue muy pegada arriba en móvil, 
                puedes añadirle un 'pt-20' extra dentro de su propio componente.
              */}
              <LogicSection /> 
              <SystemsSection />
              <ContactSection />
              
              <Footer />

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}