import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default () => {
  return (
    <Layout>
      <div>
        <span>콘택트 페이지 입니다.</span>
      </div>
      <Link to="/">홈으로</Link>
    </Layout>
  )
}
