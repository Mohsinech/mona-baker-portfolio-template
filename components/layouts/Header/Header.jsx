import React from "react";
import Link from "next/link";
import { socials } from "constants/data";
import Image from "next/image";
import NavList from "components/ui/navlist/NavList";
import styles from "./header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1 className={styles.header_logo}>Mona Baker</h1>
      </Link>
      <div className={styles.local_career}>
        <p className={styles.local_career_title}>London, Uk</p>
        <p className={styles.local_career_title}>
          Photographer & Art Director
        </p>
      </div>
      <div className={styles.social_links}>
        {socials.map((link) => (
          <NavList key={link.social} {...link} />
        ))}
      </div>
      <div className={styles.profile_pic}>
        MB
        <Image
          src="/assets/images/avatar.jpg"
          layout="fill"
          alt="profile"
          className={styles.pic}
        />
      </div>
    </header>
  );
};

export default Header;
