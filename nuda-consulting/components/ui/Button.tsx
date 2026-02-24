// Indica que este componente se ejecuta en el cliente (Next.js)
"use client";
// Importa motion para animaciones en botones
import { motion } from "framer-motion";

// Define las props que recibe el botón
interface ButtonProps {
  label: string; // Texto del botón
  onClick: () => void; // Función que se ejecuta al hacer clic
}

// Componente ActionButton: botón animado reutilizable
export const ActionButton = ({ label, onClick }: ButtonProps) => (
  // motion.button permite animar la aparición/desaparición del botón
  <motion.button
    key="button"
    initial={{ opacity: 0 }} // El botón inicia invisible
    animate={{ opacity: 1 }} // Se vuelve visible al montar
    exit={{ opacity: 0, y: 10 }} // Desaparece con animación al desmontar
    onClick={onClick} // Ejecuta la función recibida al hacer clic
    className="mt-12 px-10 py-4 border border-nuda-light/20 hover:border-nuda-light text-nuda-light transition-all duration-700 text-[10px] uppercase tracking-[0.3em]"
  >
    {/* Muestra el texto recibido por props */}
    {label}
  </motion.button>
);