import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import About from "../components/Sidebar/About";
import Links from "../components/Sidebar/Links";
import Layout from "../components/layout";
import emojiSupport from "detect-emoji-support";

import "typeface-inter";
import "./style.scss";

const App = (props) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={(data) => {
        const {
          title,
          description,
        } = data.site.siteMetadata;
        return (
          <Layout location={props.location}>
            <div className="page">
              <div className="main">
                <h2 className="intro">
                  <span>Hi!&nbsp;</span>
                  <div className="greeting">
                    <span>
                      I'm&nbsp;
                      <strong className="bold">
                        {title}
                      </strong>
                    </span>
                    {emojiSupport() && (
                      <span
                        role="img"
                        aria-label="hand-wave-emoji"
                      >
                        &nbsp;👋&nbsp;
                      </span>
                    )}
                  </div>
                </h2>
                <h4 className="bold summary">
                  {description}
                </h4>
                <Experience />
                <Projects />
              </div>

              <div className="aside">
                <div className="top center-md">
                  <About />
                </div>
                <div className="bottom">
                  <Links />
                </div>
              </div>
            </div>
          </Layout>
        );
      }}
    />
  );
};

export default App;
