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
    }
  ],
  siteMetadata: {
    title: "Shriram Balaji",
    description: "Software Engineer",
    keywords:
      "full stack, product enginner, software engineer, developer, cisco, netapp, portfolio, personal website",
    url: "https://www.shriram-balaji.github.io",
    experience: [
      {
        company: "NetApp",
        duration: "Oct 2018 - Present",
        description:
          "Built web applications and microservices tailored towards designing and sizing NetApp Storage Solutions."
      },
      {
        company: "Cisco",
        duration: "June 2017 - Oct 2018",
        description:
          "Built scalable microservice architectures and reliable Message Queueing Systems as part of the Engineering Team in Team-One a cloud based messaging tool, now part of WebEx."
      }
    ]
  }
};
