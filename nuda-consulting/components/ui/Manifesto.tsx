"use client";
import { motion } from "framer-motion";
import styles from "@/styles/manifesto.module.scss";

// 1. Definimos los "Variants"
// hidden: estado inicial | visible: estado final
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // Tiempo de espera entre la aparición de cada elemento hijo
      delayChildren: 0.2,    // Delay inicial antes de empezar la secuencia
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 12,                  // Empieza un poco más abajo
    filter: "blur(8px)"     // Empieza desenfocado para suavizar el contraste inicial
  },
  visible: { 
    opacity: 1, 
    y: 0,                   // Sube a su posición original
    filter: "blur(0px)",    // Se aclara por completo
    transition: { 
      duration: 1, 
      ease: [0.22, 1, 0.36, 1] // Un ease-out muy elegante (estilo Apple)
    } 
  }
};

export const ManifestoText = () => (
  <motion.section 
    className={styles.manifestoWrapper}
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    
    <motion.header variants={itemVariants} className={styles.headerGroup}>
      <h1 className={styles.title}>NUDA</h1>
      <h2 className={styles.subtitle}>Soluciones Tecnológicas</h2>
    </motion.header>

    <div className={styles.bodyContent}>
      {/* Cada p debe ser un motion.p para que respete el staggerChildren */}
      <motion.p variants={itemVariants} className={styles.paragraph}>
        El software hoy está lleno de capas. 
        <span className={styles.highlight}> Marketing, ruido, promesas vacías.</span> 
        Es el &apos;fenómeno&apos; de Kant: una fachada que nos impide ver la realidad.
      </motion.p>

      <motion.p 
        variants={itemVariants} 
        className={`${styles.paragraph} ${styles.italic}`}
      >
        Buscamos el <span className={styles.highlight}>noúmeno</span>, la cosa en sí. 
        Una ingeniería que no necesita vestirse para ser perfecta, porque su valor reside en su propia esencia, 
        <span className={styles.highlight}> es casi una experiencia nudista.</span>
      </motion.p>
    </div>

  </motion.section>
);