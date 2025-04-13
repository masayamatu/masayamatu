module.exports = {
  siteMetadata: {
    siteUrl: "https://masayamatu.netlify.app/",
    title: "Masayamatu's Tech Labo",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`, // 画像ファイルのディレクトリ
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          "gatsby-remark-prismjs-title",
          "gatsby-remark-prismjs",
        ],
      },
    },
/*    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `tech`,
        path: `${__dirname}/tech`,
      },
    },
*/
/*    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `diary`,
        path: `${__dirname}/diary`,
      },
    },
*/
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `article`,
        path: `${__dirname}/article`,
      },
    },
    "gatsby-plugin-sitemap",

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
    'gatsby-plugin-postcss',
  ],
};
