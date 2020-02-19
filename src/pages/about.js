import React from "react"
import Layout from "../components/layout"
import Introduce from "../components/Introduce"
import Nowido from "../components/Nowido"
import ProjectList from "../components/ProjectList"
import { graphql } from "gatsby"

export default ({ data }) => {
  return (
    <Layout>
      <Introduce />
      {/*<Nowido />*/}
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
