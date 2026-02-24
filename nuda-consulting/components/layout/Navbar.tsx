"use client";
import { motion } from "framer-motion";

export const Navbar = ({ visible }: { visible: boolean }) => {
  return (
    <div className="fixed top-6 left-0 w-full flex justify-center z-50 pointer-events-none">
      <motion.nav
        initial={{ opacity: 0, y: -40 }}
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
        className="
          pointer-events-auto
          flex items-center justify-between
          w-[90%] max-w-[600px] 
          px-8 py-3
          bg-nuda-dark/40 backdrop-blur-md
          border border-nuda-light/10
          rounded-full
          shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]
        "
      >
        {/* Identidad Mini */}
        <div className="text-nuda-light font-mono text-[10px] tracking-tighter">
          N / A
        </div>

        {/* Links de Navegación */}
        <ul className="flex gap-6">
          {["Lógica", "Sistemas", "Contacto"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-[9px] uppercase tracking-[0.25em] text-nuda-muted hover:text-nuda-light transition-colors duration-500"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
};