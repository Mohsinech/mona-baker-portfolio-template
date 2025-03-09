import React from "react";
import { TestimonialData } from "constants/data";
import styles from "./testimonials.module.css";
import { TestimonialsCard } from "components/layouts";

const Testimonials = () => {
  return (
    <section className={styles.testimonials_section}>
      <div className={styles.flex_col_content}>
        <div className="w-full">
          <p className={styles.p}>
            — Through My Lens: Hear What My Clients Have to Say
            <span className={styles.p_hidden}>
              {" "}
              About Their Timeless Moments
            </span>
          </p>
        </div>
        <div className={styles.testimonials_grid}>
          {TestimonialData.map((card) => (
            <TestimonialsCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
