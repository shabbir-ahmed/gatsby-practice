import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import img from '../images/image1.webp'
import Image from 'gatsby-image'

const getImages = graphql`
{
    fixed: file(relativePath: {eq: "image3.webp"}) {
      childImageSharp {
        fixed(width:300,height:400) {
            ...GatsbyImageSharpFixed
        }
      }
    }
    fluid:file(relativePath:{eq: "image3.webp"}) {
      childImageSharp{
        fluid{
            ...GatsbyImageSharpFluid
        }
      }
    }
}
  
`

const Images = () => {
    const data = useStaticQuery(getImages)
    // {fixed: {childImageSharp: {fixed}}}
    // console.log(data)
    return (
        <section className="images">
            <article className="single-image">
                <h3>Basic Image</h3>
                <img src={img} width="100%" />
                <h2>Content</h2>
            </article>
            <article className="single-image">
                <h3>Fixed Image/blur</h3>
                <Image fixed={data.fixed.childImageSharp.fixed} />
                <h2>Content</h2>
            </article>
            <article className="single-image">
                <h3>Fluid Image/svg</h3>
                <Image fluid={data.fluid.childImageSharp.fluid} />
                <div className="small">
                    <Image fluid={data.fluid.childImageSharp.fluid} />
                    <h2>Content</h2>
                </div>
            </article>
        </section>
    )
}

export default Images
