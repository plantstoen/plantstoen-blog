import React from "react"
import Layout from "../components/layout"
import ProjectList from "../components/ProjectList"
import Testnav from "../components/testnav"
import { graphql } from "gatsby"

export default ({ data }) => {
  return (
    <Layout>
      <ProjectList list="data.allMarkdownRemark.edges.node.id" />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <h1>{node.frontmatter.projectname}</h1>
      ))}
      <Testnav />
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
