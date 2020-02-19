import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => {
  return (
    <Layout>
      프로젝트 페이지 입니다
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <h1>{node.frontmatter.projectname}</h1>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: { type: { eq: "project" }, status: { eq: "done" } }
      }
      sort: { fields: frontmatter___start, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            projectname
          }
        }
      }
    }
  }
`
