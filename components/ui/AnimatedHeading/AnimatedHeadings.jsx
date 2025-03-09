import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./animate.module.css";

const AnimatedHeadings = () => {
  const content = useRef(null);
  const [headings, setHeadings] = useState([]);
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if (el && !headings.includes(el)) {
      setHeadings((prev) => [...prev, el]);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const animations = headings.map((heading) =>
      gsap.fromTo(
        heading,
        { yPercent: -100 },
        {
          yPercent: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        },
      ),
    );

    return () => {
      animations.forEach((animation) => animation.scrollTrigger?.kill());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [headings]);

  return (
    <div ref={content} className={styles.animate}>
      {["Capturing any", "moment as a", "Unique Story."].map((text, index) => (
        <div key={index} className="relative overflow-hidden">
          <h1 ref={addToRefs} className={styles.heading}>
            {index === 0 && <sup className={styles.sup}>‟</sup>}
            {text}
            {index === 2 && <sup className={styles.sup}>”</sup>}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default AnimatedHeadings;
