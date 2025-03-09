import React from "react";
import Link from "next/link";
import styles from "./about.module.css";

const AboutUrls = ({ href, label }) => {
  return (
    <Link href={!href ? "" : href} className={styles.link}>
      <p>{label}</p>
      <div className={styles.line}></div>
    </Link>
  );
};

export default AboutUrls;
