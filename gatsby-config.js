module.exports = {
  siteMetadata: {
    title: `Nolan Hill Dental`,
    description: `Nolan Hill Dental Clinic Northwest Calgary`,
    author: `Ken Truong`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        // eslint-disable-next-line no-useless-escape
        fonts: [`Playfair Display\:900`, `Noto Sans`]
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    }
  ]
};
