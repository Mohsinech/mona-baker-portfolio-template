"use client";

import { DropdownData } from "constants/data";
import React, { useState } from "react";
import styles from "./services.module.css";
import { DropDownService } from "components/ui";

const Services = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleOpen = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className={styles.services_section}>
      <div className={styles.main_content}>
        <div className={styles.left_col}>
          <p className={styles.left_col_label}>— What can I provide?</p>
          <div className={styles.paragraph_container}>
            <p className={styles.p}>
              A passion for capturing the raw beauty of nature, the richness of
              cultures, and the timeless elegance of black-and-white portraits.
              Each photograph tells a story, blending emotion, authenticity, and
              artistry.
            </p>
          </div>
        </div>
        <div className="flex h-full w-sixty flex-1 flex-col gap-8 max-blg:w-full max-blg:gap-10 max-sm:gap-4">
          {DropdownData.map((data) => (
            <DropDownService
              key={data.id}
              {...data}
              isOpen={openDropdown === data.id}
              handleOpen={() => handleOpen(data.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
