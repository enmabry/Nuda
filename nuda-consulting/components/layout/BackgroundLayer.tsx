"use client";
import { motion, AnimatePresence } from "framer-motion";
// 1. Cambiamos la importación del Dither por el nuevo fondo
import { DarkVeilBackground } from "@/components/bits/DarkVeilAtmospher"; 

export const BackgroundLayer = ({ active }: { active: boolean }) => (
  <AnimatePresence>
    {active && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="fixed inset-0 z-0"
      >
        {/* 2. Usamos el nuevo componente de atmósfera */}
        <DarkVeilBackground />
      </motion.div>
    )}
  </AnimatePresence>
);