"use client";

import styles from "./nav.module.css";
import Lenis from "lenis";
import Link from "next/link";
import { useEffect, useRef } from "react";

const NavList = ({ social, href, offset = 0 }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const lenis = lenisRef.current;

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
      const targetPosition = target.offsetTop + offset;
      lenisRef.current.scrollTo(targetPosition);
    }
  };

  return (
    <button onClick={handleScroll} className={styles.link}>
      <Link href={href}>{social}</Link>
      <div className={`${styles.line} bg-dark/30 h-[2px] w-full`}></div>
    </button>
  );
};

export default NavList;
