import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Postitem from "./PostItem"

export default ({ data }) => {
  const postList = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "post" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              category
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 6000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <>
      <h4>{postList.allMarkdownRemark.totalCount} Posts</h4>
      {postList.allMarkdownRemark.edges.map(node => (
        <Postitem
          key={node.node.id}
          title={node.node.frontmatter.title}
          slug={node.node.fields.slug}
          data={node.node.frontmatter.date}
          excerpt={node.node.excerpt}
          fluid={node.node.frontmatter.featuredImage.childImageSharp.fluid}
        />
      ))}
    </>
  )
}
