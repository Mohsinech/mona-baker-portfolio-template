"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "./preloader.module.css";

const Preloader = ({ onComplete }) => {
  const preloaderRef = useRef(null);
  const childRefs = useRef([]);
  const wordRef = useRef(null);
  const [currentWord, setCurrentWord] = useState("Hallo");

  // Array of themes/words to cycle through
  const words = ["Memory", "Moments", "Story", "Dreams", "Capture", "Timeless"];

  useEffect(() => {
    // Change the word every 1.5 seconds
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 150); // Change word every 1.5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        onComplete && onComplete();
      },
    });

    // Set initial opacity of the words to 0
    gsap.set(wordRef.current, { opacity: 0 });

    // Preloader animations
    timeline
      .to(wordRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power3.inOut",
      })
      .to(wordRef.current, {
        opacity: 0,
        delay: 2,
      })
      .fromTo(
        childRefs.current,
        {
          yPercent: 0,
        },
        {
          yPercent: -100,
          stagger: 0.1,
          ease: "power3.out",
          duration: 1,
        },
      )

      .to(
        preloaderRef.current,
        {
          opacity: 0,
          duration: 0.5,
          ease: "power3.inOut",
        },
        "-=0.3",
      );
  }, [onComplete]);

  return (
    <main className={styles.preloader} ref={preloaderRef}>
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className={styles.child}
          ref={(el) => (childRefs.current[index] = el)}
        ></div>
      ))}
      <div className={styles.heading_overflow}>
        <h1 className={styles.heading} ref={wordRef}>
          &bull; {currentWord} &bull;
        </h1>
      </div>
    </main>
  );
};

export default Preloader;
