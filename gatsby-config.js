/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Gatsby Tutorial',
    description: 'Some random description',
    author: '@EnvyTheme',
    data: ['item 1', 'item 2'],
    person: { name: "Shabbir", age: 29}
  },
  /* Your site config here */
  plugins: [`gatsby-plugin-styled-components`],
}
