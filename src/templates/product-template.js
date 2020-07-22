import React from "react"
import { graphql, Link } from "gatsby"
import Image from 'gatsby-image'
import Layout from '../components/layout'

const productTemplate = ({data}) => {
    // console.log(data);
    const {
        product: {
            price, 
            title, 
            image: {
                fixed
            }, 
            info: {
                info
            }
        }
    } = data
    
    return (
        <Layout>
            <div style={{textAlign: 'center'}}>
                <Link to="/products">Back To Products</Link>
                <h1>Product Details : {title}</h1>
            </div>
            <section className="single-product">
                <article>
                    <Image fixed={fixed} alt={title} />
                </article>
                <article>
                    <h1>{title}</h1>
                    <h3>${price}</h3>
                    <p>{info}</p>
                    <button>Add to cart</button>
                </article>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query GetSingleProduct($slug: String) {
        product: contentfulProduct(slug: {eq: $slug}) {
            title
            price
            image {
                fixed(width: 300) {
                    ...GatsbyContentfulFixed
                }
            }
            info {
                info
            }
        }
    }
`

export default productTemplate
