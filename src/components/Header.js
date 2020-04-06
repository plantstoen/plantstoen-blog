import React from "react"
import "./Header.scss"
import { Link } from "gatsby"
import Layout from "./layout"

const Header = ({ history }) => {
  return (
    <div className="wrap">
      <Layout>
        <div className="wrap__item">
          <span className="title">POST_IT</span>
          <span className="name">@sangminKim</span>
        </div>
      </Layout>
    </div>
  )
}

export default Header
