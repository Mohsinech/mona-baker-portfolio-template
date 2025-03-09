import React from "react";
import styles from "./data.module.css";

const DataContent = ({ label, desc }) => {
  return (
    <div className={styles.flex_data}>
      <h1 className={styles.label}>{label}</h1>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
};

export default DataContent;
