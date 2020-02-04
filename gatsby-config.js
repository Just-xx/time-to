module.exports = {
  siteMetadata: {
    title: `Time.to`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Jakub Dreczkowski`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/utils/imgs`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0090ff`,
        theme_color: `#0090ff`,
        display: `minimal-ui`,
        icon: `src/utils/imgs/logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GRAPHCMS",
        fieldName: "graphcms",
        url: "https://api-euwest.graphcms.com/v1/ck5tujw4886im01fg4v7g3bqo/master"
      },
    }
  ],
}
