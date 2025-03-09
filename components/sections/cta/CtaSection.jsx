import React from "react";
import styles from "./cta.module.css";

const CtaSection = () => {
  return (
    <section className={styles.cta_section}>
      <div className={styles.main_content}>
        <div className={styles.label_container}>
          <p className={styles.label}>
            — Ready to turn your vision into a masterpiece?
          </p>
        </div>
        <div className={styles.p_container}>
          <p className={styles.p}>
            Let’s collaborate and create something extraordinary together — get
            in touch today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
