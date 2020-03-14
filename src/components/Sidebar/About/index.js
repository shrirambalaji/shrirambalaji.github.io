import emojiSupport from "detect-emoji-support";
import { graphql, StaticQuery } from "gatsby";
import React, { Fragment } from "react";
import "./style.scss";

const About = () => {
  return (
    <div className="about">
      <div className="image"></div>
      <div className="bio">
        <div>
          <StaticQuery
            query={graphql`
              query LinkEmojiQuery {
                markdownRemark {
                  frontmatter {
                    about {
                      bio
                      emojis
                    }
                  }
                }
              }
            `}
            render={data => {
              const { about } = data.markdownRemark.frontmatter;
              const { bio, emojis } = about;
              return (
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
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
