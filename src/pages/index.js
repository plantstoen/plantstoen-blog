import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/Header"
import PostList from "../components/PostList"
import SlideBanner from "../components/mainPage/SlideBanner"

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
    <>
      <Header />
      <SlideBanner />
      <Layout></Layout>
    </>
  )
}
