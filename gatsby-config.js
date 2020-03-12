require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Michael Leners Portfolio`,
    description: `A developer portfolio.`,
    author: `@micleners`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 100,
            },
          },
        ],
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-emotion`,
    // to setup contentful, run the following command in the terminal:
    // npm install gatsby-source-contentful
    // then navigate to `env.development` and follow the instructions there
    // then uncomment the block below
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: process.env.SPACE_ID,
    //     accessToken: process.env.API_KEY,
    //     host: process.env.HOST ? process.env.HOST : `cdn.contentful.com`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        // only import what you need to save on bundle size
        // you can import a single font: `Montserrat`
        // or multiple font weights: ``Montserrat\:400,400i,700`
        fonts: [`Oxygen Mono\:400,400i,600`, `Montserrat`],
        display: "swap",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/src/json`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
