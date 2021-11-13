import React, { Fragment, useEffect, useState } from "react";
// import Helmet from "react-helmet";
import favicon16 from "../../assets/favicons/favicon-16x16.png";
import favicon32 from "../../assets/favicons/favicon-32x32.png";
import profileImage from "../../assets/favicons/favicon.png";

import styles from "./Layout.module.scss";

export default ({ siteMetadata, children }) => {
  const [userAgent, setUserAgent] = useState(null);
  useEffect(() => {
    const ua =
      typeof window !== `undefined` ? window.navigator.userAgent : null;
    setUserAgent(ua);
  }, []);
  
  return (
    <div className="root" data-browser={userAgent}>
      {/* <Helmet
        title={siteMetadata.title}
        meta={[
          { name: "description", content: siteMetadata.description },
          { name: "keywords", content: siteMetadata.keywords },
          { property: "og:url", content: siteMetadata.url },
          { property: "og:image", content: profileImage },
          { property: "og:title", content: siteMetadata.title },
          {
            property: "og:description",
            content: siteMetadata.description,
          },
        ]}
        link={[
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: favicon16,
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: favicon32,
          },
        ]}
      /> */}
      <Fragment>{children}</Fragment>
    </div>
  );
};
