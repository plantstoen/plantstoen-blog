import React from "react"
import { graphql, Link } from "gatsby"
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
        <div className="topbanner__back">
          <div className="topbanner__forab">
            <Link to="/" className="backtext">
              ╳
            </Link>
          </div>
        </div>
        <div className="topbanner__data">
          <div className="topbanner__abs">
            <SEO title={post.frontmatter.title} description={post.excerpt} />
            <h1 className="topbanner__title">{post.frontmatter.title}</h1>
            <span className="topbanner__sub">
              {post.frontmatter.category} · {post.frontmatter.date}
            </span>
          </div>
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
