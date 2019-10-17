module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        cssLoaderOptions: {
          camelCase: false
        }
        // fonts: [`space mono\:300, 500, 600, 900`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "markdown-pages",
        path: `${__dirname}/src/markdown-pages`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-twemoji-shortcut`
          }
        ]
      }
    }
  ],
  siteMetadata: {
    title: "Shriram Balaji",
    description: "Software Engineer",
    keywords:
      "full stack, product enginner, software engineer, developer, cisco, netapp, portfolio, personal website",
    url: "https://shriram-balaji.github.io"
  }
};
