module.exports = {
  siteMetadata: {
    title: `Time.to`,
    description: `Odliczanie czasu do wakacji, ferii zimowych, przerwy świątecznej, sylwestra, egzaminów i wiele innych liczników na sezon 2019/2020!`,
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
        icon: `src/utils/imgs/favicon.png`, // This path is relative to the root of the site.
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
