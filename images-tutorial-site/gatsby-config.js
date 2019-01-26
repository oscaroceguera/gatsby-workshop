module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter'
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'dev-gatbsyjswp.pantheonsite.io',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ]
}
