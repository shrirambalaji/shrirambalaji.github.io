import emojiSupport from "detect-emoji-support";
import React, { Fragment } from "react";
import "./About.module.scss";

const About = ({ content: about }) => {
  const { emojis, bio } = about;
  return (
    <div className="about">
      <div className="image"></div>
      <div className="bio">
        <div>
          <Fragment>
            <p>{bio.join(" ∙ ")}</p>
            {emojiSupport() &&
              emojis.map((emoji, emojiIdx) => (
                <span
                  key={emojiIdx}
                  className="emoji"
                  role="img"
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
