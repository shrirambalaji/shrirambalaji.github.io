import { StaticQuery, graphql } from "gatsby";
import React, { Fragment, useEffect, useState } from "react";
import Helmet from "react-helmet";
import favicon16 from "../assets/favicons/favicon-16x16.png";
import favicon32 from "../assets/favicons/favicon-32x32.png";
import profileImage from "../assets/favicons/favicon.png";
import "./style.scss";

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
            keywords
            url
          }
        }
      }
    `}
    render={({ site }) => {
      const [userAgent, setUserAgent] = useState(null);
      useEffect(() => {
        const ua =
          typeof window !== `undefined` ? window.navigator.userAgent : null;
        setUserAgent(ua);
      }, []);
      return (
        <div className="root" data-browser={userAgent}>
          <Helmet
            title={site.siteMetadata.title}
            meta={[
              { name: "description", content: site.siteMetadata.description },
              { name: "keywords", content: site.siteMetadata.keywords },
              { property: "og:url", content: site.siteMetadata.url },
              { property: "og:image", content: profileImage },
              { property: "og:title", content: site.siteMetadata.title },
              {
                property: "og:description",
                content: site.siteMetadata.description
              }
            ]}
            link={[
              {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: favicon16
              },
              {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: favicon32
              }
            ]}
          />
          <Fragment>{children}</Fragment>
        </div>
      );
    }}
  />
);
