import React from "react";
import { motion } from "framer-motion";
import { useTransform } from "framer-motion";
import Image from "next/image";
import styles from "./second.module.css";

const Second = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div style={{ scale, rotate }} className={styles.none_sticky}>
      <Image
        src="/assets/images/portrait-2.jpg"
        layout="fill"
        alt="portrait 1"
        className="object-cover"
      />
    </motion.div>
  );
};

export default Second;
