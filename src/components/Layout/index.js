import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import profileImage from "../../../public/favicons/favicon.png";


export default ({ siteMetadata, children }) => {
  const [userAgent, setUserAgent] = useState(null);
  useEffect(() => {
    const ua =
      typeof window !== `undefined` ? window.navigator.userAgent : null;
    setUserAgent(ua);
  }, []);

  return (
    <div className="root" data-browser={userAgent}>
      <Head>
        <title>{siteMetadata.title}</title>
        <meta
          description={siteMetadata.description}
          keywords={siteMetadata.keywords}
        />
        <meta property="og:url" content={siteMetadata.url} />
        <meta prooerty="og:image" content={profileImage} />
        <meta prooerty="og:title" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicons/favicon-32x32.png"
        />
      </Head>
      <Fragment>{children}</Fragment>
    </div>
  );
};
