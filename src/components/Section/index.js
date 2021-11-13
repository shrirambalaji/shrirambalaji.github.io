import React from "react";

import styles from "./Section.module.scss";

const Section = ({ title, children }) => {
  return (
    <div className={styles.section}>
      <h5 className={`bold ${styles.sectionTitle}`}>{title}</h5>
      <div className={styles.sectionUnits}>{children}</div>
    </div>
  );
};

export default Section;
