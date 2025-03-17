import AboutUrls from "components/ui/AboutUrls/AboutUrls";
import { BackToTop, CurrentTime } from "components/ui";
import { AboutLinks } from "constants/data";
import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer id="index" className={styles.footer}>
      <div className={styles.main_container}>
        {/*  */}
        <div className={styles.top_row}>
          <div className={styles.flex_col_rows}>
            <div className={styles.heading_labels}>
              <h1 className={styles.h1}>Have a vision?</h1>
              <h1 className={styles.h1}>Let’s bring it to life.</h1>
            </div>
            <button className={`${styles.mail_button} transition duration-300`}>
              Monabacker@contact.me
            </button>
            <div className={styles.about_urls_flex}>
              {AboutLinks.slice(0, 4).map((link) => (
                <AboutUrls key={link.label} {...link} />
              ))}
            </div>
          </div>
        </div>
        {/*  */}
        <div className={styles.footer_bottom}>
          <div className={styles.content}>
            <div className={styles.content_lef}>
              <p className={styles.copyright}>&copy;2024</p>
              <CurrentTime />
            </div>
            <div className={styles.content_ri}>
              <BackToTop label="Back To Top" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
