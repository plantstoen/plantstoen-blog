/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `POST_IT`,
    description: `18살 고등학생 기획자의 개인블로그 입니다.`,
    author: `Sangmin Kim`,
  },
  plugins: [
    `gatsby-plugin-sass`, //NOTE sass
    {
      //NOTE post filesystem
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/src/data/post`,
      },
    },
    {
      //NOTE image filesystem
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `image`,
        path: `${__dirname}/src/data/post/image`,
      },
    },
    {
      //NOTE thumbanil filesystem
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `thumbnail`,
        path: `${__dirname}/src/data/post/thumbnail`,
      },
    },
    {
      // NOTE project filesystem
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project`,
        path: `${__dirname}/src/data/project`,
      },
    },
    `gatsby-transformer-sharp`, //NOTE transformer-sharp
    `gatsby-plugin-sharp`, //NOTE plugin-sharp
    {
      //NOTE remark-image
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2000,
            },
          },
        ],
      },
    },
    `gatsby-plugin-offline`, //NOTE offline
    {
      //NOTE manifest
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`, //NOTE react-helmet
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            },
          },
        ],
      },
    },
  ],
  /* Your site config here */
}
