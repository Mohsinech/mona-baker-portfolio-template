"use client";

import React from "react";
import { aboutData, easyNavigation } from "constants/data";
import styles from "./hero.module.css";
import { QuickNav, QuickNavAbout } from "components/ui";

const Hero = ({ handleOpen }) => {
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero_div_label}>
        <h1 className={styles.name_label}>Mona Backer.</h1>
      </div>
      <div className={styles.right_content}>
        <h2 className={styles.quote}>
          “To see in color is a delight for the eye but to see in black and
          white is a delight for the soul.”
          <span className={styles.author}>— Andri Cauldwell</span>
        </h2>
        <div className={styles.navigation_flex}>
          <div className={styles.nav_flex_col}>
            <p className={styles.nav_label}>
              <sup>/ </sup> Scroll to:
            </p>
            <div className={styles.quick_nav}>
              {easyNavigation.map((nav) => (
                <QuickNav key={nav.label} {...nav} />
              ))}
            </div>
          </div>
          <div className={styles.nav_flex_col}>
            <p className={styles.nav_label}>
              <sup>/ </sup> Read:
            </p>
            <div className={styles.quick_nav}>
              {aboutData.map((nav) => (
                <QuickNavAbout
                  handleOpen={handleOpen}
                  key={nav.label}
                  {...nav}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
