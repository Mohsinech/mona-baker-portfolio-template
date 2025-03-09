import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const TestimonialsCard = ({
  icon,
  image,
  fallback,
  name,
  userName,
  description,
  userUrl,
}) => {
  return (
    <div
      className={`${styles.testimonial_card} shadow-lg shadow-dark/10 transition duration-200 hover:shadow-2xl`}
    >
      <div className={styles.flex_content}>
        <div className={styles.flex_col_data}>
          <div className={styles.fallback_div}>
            {fallback}
            <Image
              src={image}
              layout="fill"
              alt={userName}
              className={styles.image}
            />
          </div>
          <div className={styles.name_user_div}>
            <p className={styles.name}>{name}</p>
            <p className={styles.user}>{userName}</p>
          </div>
        </div>
        <div className={styles.twitter_icon}>
          {/* Add user post path on twitter */}
          <Link href={userUrl}>
            <Image src={icon} width={25} height={25} alt="Twitter" />
          </Link>
        </div>
      </div>
      <div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default TestimonialsCard;
