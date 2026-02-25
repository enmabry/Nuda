"use client";
import { motion } from "framer-motion";
import styles from "@/styles/manifesto.module.scss";
import { GlowText } from "@/components/ui/GlowText";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Tiempo entre el título, párrafo 1 y párrafo 2
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: "easeOut" as const }
  }
};

export const ManifestoText = () => (
  <motion.section 
    className={styles.manifestoWrapper}
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {/* Título y Subtítulo */}
    <motion.header variants={itemVariants} className={styles.headerGroup}>
      <h1 className={styles.title}>NUDA</h1>
      <h2 className={styles.subtitle}>Soluciones Tecnológicas</h2>
    </motion.header>

    <div className={styles.bodyContent}>
      {/* Párrafo 1 */}
      <motion.p variants={itemVariants} className={styles.paragraph}>
        El software hoy está lleno de capas.{" "}
        <GlowText>Marketing, ruido, promesas vacías.</GlowText> Es el &apos;fenómeno&apos; de Kant: una fachada que nos impide ver la realidad.
      </motion.p>

      {/* Párrafo 2 */}
      <motion.p variants={itemVariants} className={`${styles.paragraph} ${styles.italic}`}>
        Buscamos el <GlowText>noúmeno</GlowText>, la cosa en sí. Una ingeniería que no necesita vestirse para ser perfecta, porque su valor reside en su propia esencia,{" "}
        <GlowText>es casi una experiencia nudista.</GlowText>
      </motion.p>
    </div>
  </motion.section>
);