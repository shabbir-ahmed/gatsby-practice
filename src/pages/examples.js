import React from 'react'
import Header from '../examples/Header'
import Layout from '../components/layout'
import ComponentName from '../examples/HeaderStatic'
import { graphql } from 'gatsby'

const examples = (props) => {
    console.log(props)
    return (
        <Layout>
            <h1>hello example js</h1>
            <Header />

            <ComponentName />
        </Layout>
    )
}

export const data = graphql`
query MyQuery{
    site {
      info: siteMetadata {
        person {
          name
          age
        }
        author
        data
        description
        title
      }
    }
}
`

export default examples
