import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import styles from "./dropdown.module.css";

const DropDownService = ({
  serviceName,
  labelOne,
  labelOneDesc,
  labelTwo,
  btn1,
  btn2,
  btn3,
  btn4,
  btn5,
  isOpen,
  handleOpen,
}) => {
  const content = useRef();

  useEffect(() => {
    const animationDuration = 1;

    if (isOpen) {
      gsap.to(content.current, {
        opacity: 1,
        maxHeight: 1000,
        duration: animationDuration,
        ease: "power2.in",
      });
    } else {
      gsap.to(content.current, {
        opacity: 0,
        maxHeight: 0,
        duration: animationDuration,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdown_toggle} onClick={handleOpen}>
        <p className={styles.service_name}>{serviceName}</p>
      </div>
      <div
        ref={content}
        className={styles.dropdown_inner}
        style={{
          opacity: 0,
          maxHeight: 0,
        }}
      >
        <div className={styles.flex_col_labels}>
          <div className={styles.first_label_container}>
            <h3 className={styles.label_one}>{labelOne}</h3>
            <p className={styles.label_desc}>{labelOneDesc}</p>
          </div>
          <div className={styles.first_label_container}>
            <h3 className={styles.label_one}>{labelTwo}</h3>
            <div className={styles.btns_array}>
              {[btn1, btn2, btn3, btn4, btn5].map(
                (btn, index) =>
                  btn && (
                    <button key={index} className={styles.button}>
                      {btn}
                    </button>
                  ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDownService;
