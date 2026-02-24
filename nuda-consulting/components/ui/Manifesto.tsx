import styles from "@/styles/manifesto.module.scss";

export const ManifestoText = () => (
  <section className={styles.manifestoWrapper}>
    
    <header className={styles.headerGroup}>
      <h1 className={styles.title}>NUDA</h1>
      <h2 className={styles.subtitle}>Soluciones Tecnológicas</h2>
    </header>

    <div className={styles.bodyContent}>
      <p className={styles.paragraph}>
        El software hoy está lleno de capas. 
        <span className={styles.highlight}> Marketing, ruido, promesas vacías.</span> 
        Es el &apos;fenómeno&apos; de Kant: una fachada que nos impide ver la realidad.
      </p>

      <p className={`${styles.paragraph} ${styles.italic}`}>
        Buscamos el <span className={styles.highlight}>noúmeno</span>, la cosa en sí. 
        Una ingeniería que no necesita vestirse para ser perfecta, porque su valor reside en su propia esencia, 
        <span className={styles.highlight}> es casi una experiencia nudista.</span>
      </p>
    </div>

  </section>
);