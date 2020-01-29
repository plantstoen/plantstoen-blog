import React from "react"
import Layout from "../components/layout"
import ProjectList from "../components/ProjectList"
import { graphql } from "gatsby"

export default ({ data }) => {
  return (
    <Layout>
      <div>프로젝트 페이지 입니다</div>
      <h1>진행중인 프로젝트</h1>
      <ProjectList list="data.allMarkdownRemark.edges.node.id" />
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
