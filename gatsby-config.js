module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "content",
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-twemoji-shortcut`,
          },
        ],
      },
    },
  ],
  siteMetadata: {
    title: "Shriram Balaji",
    firstName: "Shriram",
    lastName: "Balaji",
    description:
      "Software Engineer dabbling with things on the interwebs",
    keywords:
      "full stack engineer,software engineer, developer, portfolio",
    url: "https://shrirambalaji.dev",
  },
};
