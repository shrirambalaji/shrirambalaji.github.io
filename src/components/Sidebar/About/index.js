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
                allMarkdownRemark {
                  nodes {
                    frontmatter {
                      bio
                      misc {
                        emojis
                      }
                    }
                  }
                }
              }
            `}
            render={data => {
              const {
                misc,
                bio
              } = data.allMarkdownRemark.nodes[0].frontmatter;
              const { emojis } = misc[0];
              return (
                <Fragment>
                  <p>{bio}</p>
                  {emojis.map(emoji => (
                    <span
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
