import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout';
import styles from '../components/products.module.css'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

const products = ({ data }) => {
    const {
        allContentfulProduct: {
            nodes: products
        }
    } = data
    console.log(products)
    return(
        <Layout>
            <section className={styles.page}>
                {products.map((product) => {
                    return(
                        <article key={product.id}>
                            <Image fluid={product.image.fluid} />
                            <h3>{product.title} <span>${product.price}</span></h3>
                            <Link to={`/products/${product.slug}`}>More Details</Link>
                        </article>
                    )
                })}
            </section>
        </Layout>
    )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        title
        price
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        slug
      }
    }
  }
`

export default products
