/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `http://www.eightpr.co.uk`, // add your site url here
    title: `Eight PR & Marketing - Creating Empathetic and Creative Experiences`,
    description: `EIGHT PR & Marketing is a specialist agency with a mission to blend business with pleasure in the realm of events and experience marketing. Our focus is empathetic marketing and creative campaigns that connect deeply with audiences. EIGHT is more than a number, it's a club, a network, and a promise of quality and connection.`,
    author: 'Jack Robertson',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eight PR & Marketing`,
        short_name: `EightPR`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#00c7ff`,
        display: `minimal-ui`,
        icon: `src/images/BodyImages/Favcon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-ZQBC3VQ4GZ`,
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        defer: false,
      },
    },

    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `http://www.eightpr.co.uk`,
        sitemap: `http://www.eightpr.co.uk/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ],
};
