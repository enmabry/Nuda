"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ActionButton } from "@/components/ui/Button";
import { HeroHeader } from "@/components/layout/HeroHeader";
import { BackgroundLayer } from "@/components/layout/BackgroundLayer";
import { HERO } from "@/constants/copy";

export default function Home() {
  const [isInside, setIsInside] = useState(false);

  return (
    <main className="relative min-h-screen bg-nuda-dark overflow-hidden flex flex-col items-center justify-center">
      
      {/* Capa de fondo con tus specs de 1080px */}
      <BackgroundLayer active={isInside} />

      {/* Capa de contenido con transición fluida */}
      <div className="relative z-10 text-center flex flex-col items-center p-6">
        
        <AnimatePresence mode="wait">
          {!isInside ? (
            // TODO ESTO DESAPARECE AL HACER CLIC
            <motion.div
              key="intro"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
              className="flex flex-col items-center"
            >
              <HeroHeader title="NUDA" subtitle={HERO.subtitle} />
              <ActionButton 
                label="Entrar en la esencia" 
                onClick={() => setIsInside(true)} 
              />
            </motion.div>
          ) : (
            // ESTO APARECE DESPUÉS
            <motion.div
              key="description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1.5 }}
              className="mt-12 max-w-md"
            >
              <p className="text-nuda-muted text-lg font-light leading-relaxed italic">
                {HERO.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Viñeta para suavizar los bordes del cuadrado de 1080px */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.8)_100%)]" />
    </main>
  );
}