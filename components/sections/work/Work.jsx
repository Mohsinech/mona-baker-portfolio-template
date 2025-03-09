"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import styles from "./work.module.css";
import { Fifth, First, Forth, Second, Third } from "components/WorkImages";
import { AnimatedHeadings } from "components/ui";

const Work = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section id="work" ref={container} className={styles.work_section}>
      {/* Work sections */}
      <div className="flex flex-col">
        <First scrollYProgress={scrollYProgress} />
        <Second scrollYProgress={scrollYProgress} />
        <Third scrollYProgress={scrollYProgress} />
        <Forth scrollYProgress={scrollYProgress} />
        <Fifth scrollYProgress={scrollYProgress} />
      </div>
      <AnimatedHeadings />
    </section>
  );
};

export default Work;
