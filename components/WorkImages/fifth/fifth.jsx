import React from "react";
import { motion } from "framer-motion";
import { useTransform } from "framer-motion";
import Image from "next/image";
import styles from "./fifth.module.css";

const Fifth = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);

  return (
    <motion.div style={{ scale, rotate }} className={styles.sticky_container}>
      <Image
        src="/assets/images/portrait-5.jpg"
        layout="fill"
        alt="portrait 1"
        className="object-cover"
      />
    </motion.div>
  );
};

export default Fifth;
