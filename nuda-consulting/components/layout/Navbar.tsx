"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "@/styles/navbar.module.scss";

interface NavbarProps {
  visible: boolean;
  isInternal: boolean; 
}

export const Navbar = ({ visible, isInternal }: NavbarProps) => {
  
  const navLinks = [
    { name: "Visión", href: "#logica" },
    { name: "Servicios", href: "#sistemas" },
    { name: "Contacto", href: "#contacto" },
  ];

  // Función para manejar el scroll suave sin recargar
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.navWrapper}>
      <motion.nav
        initial={{ opacity: 0, y: -40 }}
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`${styles.navBar} ${isInternal ? styles.isExpanded : styles.isCentered}`}
      >
        
        {/* Logo NUDA: Al hacer clic, scrollea al inicio (#home) */}
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
              <Link 
                href="#home" 
                onClick={(e) => handleScroll(e, "#home")}
                className={styles.brand}
              >
                NUDA
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Links de Navegación con IDs corregidos */}
        <ul className={styles.navList}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href} 
                onClick={(e) => handleScroll(e, link.href)}
                className={styles.navLink}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
};