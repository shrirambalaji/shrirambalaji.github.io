import React from "react";
import styles from "./SectionItem.module.scss";

const SectionItem = ({ title, timeperiod, content, link, small }) => {
  return (
    <div
      role="presentation"
      className={`${styles.card} ${styles.sectionItem} ${
        small ? `${styles.smallCard} col-md` : "col-lg col-md-12"
      }`}
    >
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={`${styles["cardLink"]}`}
      >
        <div className={`${styles["cardContent"]}`}>
          <div className={`${styles.title} bold`}>{title}</div>
          <p className={styles.duration}>{timeperiod}</p>
          <p className={styles.content}>{content}</p>
        </div>
      </a>
    </div>
  );
};

export default SectionItem;
