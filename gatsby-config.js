require('dotenv').config('./.env');

module.exports = {
  siteMetadata: {
    title: `RTI Latina`,
    siteUrl: `https://stage.rtitec.com/rtitec/`,
    description: `Maestros en Sistemas. Artesanos de la Informática Mercantil.`,
  },
  plugins: [
  
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/blog`,
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
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
        name: `content`,
        path: `${__dirname}/content/blog`,
      },
    },
  ],
};
