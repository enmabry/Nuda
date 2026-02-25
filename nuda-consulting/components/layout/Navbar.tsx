"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "@/styles/navbar.module.scss";

interface NavbarProps {
  visible: boolean;
  isInternal: boolean; // TRUE cuando estás en una página como /sistemas o el menú está expandido
}

export const Navbar = ({ visible, isInternal }: NavbarProps) => {
  
  // Definimos los links con rutas absolutas para que funcionen desde cualquier lugar
  const navLinks = [
    { name: "Lógica", href: "/#logica" },
    { name: "Sistemas", href: "/sistemas" },
    { name: "Contacto", href: "/#contacto" },
  ];

  return (
    <div className={styles.navWrapper}>
      <motion.nav
        initial={{ opacity: 0, y: -40 }}
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`${styles.navBar} ${isInternal ? styles.isExpanded : styles.isCentered}`}
      >
        
        {/* Logo: Aparece solo cuando estamos en modo expandido / interno */}
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
              <Link href="/" className={styles.brand}>
                NUDA
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Links de Navegación */}
        <ul className={styles.navList}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className={styles.navLink}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
};