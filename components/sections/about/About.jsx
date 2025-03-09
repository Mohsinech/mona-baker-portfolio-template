import React, { useState, useRef, useEffect } from "react";
import { AboutContent } from "constants/data";
import Image from "next/image";
import { AboutLinks } from "constants/data";
import styles from "./about.module.css";
import { AboutUrls, DataContent } from "components/ui";

const About = ({ isOpen, handleClose }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.clientY);
    setScrollTop(containerRef.current.scrollTop);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const distance = e.clientY - startY;
    containerRef.current.scrollTop = scrollTop - distance;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);

      return () => {
        if (container) {
          container.removeEventListener("mousedown", handleMouseDown);
        }
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, startY, scrollTop]);

  return (
    <section
      className={`${styles.about_section} transition-all duration-500 ${
        isOpen
          ? "max-blg:w-[70%] w-[50%] opacity-100 max-sm:w-full"
          : "-right-8 w-0 opacity-0"
      }`}
    >
      {/* 1 */}
      <div className={styles.first_col}>
        <div className={styles.image_container}>
          <Image
            src="/assets/images/avatar.jpg"
            alt="Mona Backer"
            layout="fill"
            className={styles.image}
          />
        </div>
        <button
          className={`transition duration-300 ${styles.close_btn}`}
          onClick={handleClose}
        >
          Close
        </button>
      </div>

      {/* 2 */}
      <div
        ref={containerRef}
        className={styles.main_container}
        style={{
          maxHeight: "calc(100vh - 80px)",
          paddingRight: "15px",
        }}
      >
        {AboutContent.map((content) => (
          <DataContent key={content.id} {...content} />
        ))}
        <button className={`${styles.book_button} transition duration-300`}>
          Book a free call
        </button>
        <div className={styles.about_socials}>
          {AboutLinks.map((link) => (
            <AboutUrls key={link.label} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
