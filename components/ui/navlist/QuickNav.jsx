"use client";

import { useRef, useEffect } from "react";
import styles from "./nav.module.css";
import Lenis from "lenis";

const QuickNav = ({ label, href, handleOpen }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const handleScroll = (e) => {
    e.preventDefault();

    const target = document.querySelector(href);

    if (target && lenisRef.current) {
      lenisRef.current.scrollTo(target);
    }

    if (handleOpen) handleOpen();
  };

  return (
    <button onClick={handleScroll} className={styles.link}>
      <p>{label}</p>
      <div className={styles.line}></div>
    </button>
  );
};

export default QuickNav;
