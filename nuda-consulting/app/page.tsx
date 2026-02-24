"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ActionButton } from "@/components/ui/Button";
import { HeroHeader } from "@/components/layout/HeroHeader";
import { BackgroundLayer } from "@/components/layout/BackgroundLayer";
import { Navbar } from "@/components/layout/Navbar";
import { ManifestoText } from "@/components/ui/Manifesto";
import { HeroImage } from "@/components/ui/HeroImage";
import styles from "@/styles/manifesto.module.scss";

// Tu importación actual
import ballerincaIcon from "@/images/ballerina.svg";

export default function Home() {
  const [isInside, setIsInside] = useState(false);

  return (
    <main className="relative min-h-screen bg-nuda-dark overflow-hidden flex flex-col items-center justify-center">
      <Navbar visible={isInside} />
      <BackgroundLayer active={isInside} />

      <div className="relative z-10 w-full">
        <AnimatePresence mode="wait">
          {!isInside ? (
            <motion.div
              key="intro"
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center p-6"
            >
              <HeroHeader title="NUDA" subtitle="Software en estado puro" />
              <ActionButton
                label="Entrar en la esencia"
                onClick={() => setIsInside(true)}
              />
            </motion.div>
          ) : (
            <motion.div
              key="experience"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              // Esto asegura que al terminar, el navegador trate al div como un elemento estático y nítido
              style={{ opacity: 1, backfaceVisibility: "hidden" }}
              className={styles.experienceContainer}
            >
              <div className={styles.textSection}>
                <ManifestoText />
              </div>

              <div className={styles.imageSection}>
                <HeroImage imageSrc={ballerincaIcon} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Efecto de profundidad final */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.9)_100%)]" />
    </main>
  );
}
