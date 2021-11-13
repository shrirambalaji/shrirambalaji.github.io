import emojiSupport from "detect-emoji-support";
import React, { Fragment } from "react";
import styles from "./About.module.scss";

const About = ({ content: about }) => {
  const { emojis, bio } = about;
  return (
    <div className={styles.about}>
      <div className={styles.image}></div>
      <div className={styles.bio}>
        <div>
          <Fragment>
            <p>{bio.join(" ∙ ")}</p>
            {emojiSupport() &&
              emojis.map((emoji, emojiIdx) => (
                <span
                  key={emojiIdx}
                  className={styles.emoji}
                  rol={styles.img}
                  aria-label="sidelink-emoji"
                >
                  &nbsp;{emoji}&nbsp;
                </span>
              ))}
          </Fragment>
        </div>
      </div>
    </div>
  );
};

export default About;
