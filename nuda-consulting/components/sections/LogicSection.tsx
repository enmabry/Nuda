"use client";
import { motion } from "framer-motion";
import styles from "@/styles/logic.module.scss"

export const LogicSection = () => {
  return (
    <section id="logica" className={styles.logicContainer}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className={styles.content}
      >
        <span className={styles.label}>01 // LÓGICA</span>
        
        <h2 className={styles.title}>
          Sistemas sin ruido, <br /> 
          <span className={styles.outline}>ingeniería pura.</span>
        </h2>
        
        <p className={styles.description}>
          La arquitectura técnica no debe esconderse tras capas de marketing. 
          En NUDA, el código es el diseño y la eficiencia es la estética.
        </p>
        
        <div className={styles.terminalDecoration}>
          <span>root@nuda:~/logica$ execution_perfect</span>
          <span className={styles.cursor}>_</span>
        </div>
      </motion.div>
    </section>
  );
};