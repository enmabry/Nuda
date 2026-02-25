"use client";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/navbar.module.scss";

interface NavbarProps {
  visible: boolean;
  isInternal: boolean; // TRUE cuando haces clic en una opción o cambias de vista
}

export const Navbar = ({ visible, isInternal }: NavbarProps) => {
  return (
    <div className={styles.navWrapper}>
      <motion.nav
        initial={{ opacity: 0, y: -40 }}
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        // Aplicamos la clase dinámicamente según el estado
        className={`${styles.navBar} ${isInternal ? styles.isExpanded : styles.isCentered}`}
      >
        
        {/* Logo que aparece solo en estado Expandido */}
        <AnimatePresence>
          {isInternal && (
            <motion.div 
              key="logo"
              initial={{ width: 0, opacity: 0, x: -20 }}
              animate={{ width: "auto", opacity: 1, x: 0 }}
              exit={{ width: 0, opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className={styles.logoWrapper}
            >
              <span className={styles.brand}>NUDA</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Links de Navegación (Framer Motion animará su posición automáticamente) */}
        <ul className={styles.navList}>
          {["Lógica", "Sistemas", "Contacto"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className={styles.navLink}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
};