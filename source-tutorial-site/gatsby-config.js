module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-pixabay',
      options: {
        key: '9930131-7a0f49254a3c357f8bd24e56c',
        q: 'yellow flowers'
      }
    }
  ]
}
