import React from "react";
import Link from "next/link";
import styles from "./QuickNav.module.css";

const QuickNavAbout = ({ href, label, handleOpen }) => {
  return (
    <Link
      onClick={(e) => {
        e.preventDefault();
        handleOpen();
      }}
      href={!href ? "" : href}
      className={styles.link}
    >
      <p>{label}</p>
      <div className={styles.line}></div>
    </Link>
  );
};

export default QuickNavAbout;
