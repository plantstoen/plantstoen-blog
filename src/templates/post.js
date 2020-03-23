import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import "./post.scss"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <div className="topbanner">
        <Img
          className="image"
          fluid={post.frontmatter.banner.childImageSharp.fluid}
        />
        <div className="topbanner__data">
          <SEO title={post.frontmatter.title} description={post.excerpt} />
          <h1 className="topbanner__title">{post.frontmatter.title}</h1>
        </div>
      </div>
      <div className="textarea">
        <div
          className="realtext"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        category
        banner {
          childImageSharp {
            fluid(maxWidth: 6000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      excerpt
    }
  }
`
