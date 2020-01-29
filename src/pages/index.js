import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"

export default ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Layout>
      <span>{data.site.siteMetadata.title}</span>
      <Link to="/test">테스트로</Link>
    </Layout>
  )
}
