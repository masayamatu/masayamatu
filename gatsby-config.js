module.exports = {
  siteMetadata: {
    siteUrl: "https://masayamatumain.gtsb.io",
    title: "Masayamatu's Tech Labo",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `tech`,
        path: `${__dirname}/tech`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `diary`,
        path: `${__dirname}/diary`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-theme-ui",
      options: {
        preset: require("@theme-ui/preset-funk"),
      },
    },
    "babel-preset-gatsby",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
            resolve: "gatsby-remark-prismjs-title",
          },
        ],
      },
    },
  ],
};
