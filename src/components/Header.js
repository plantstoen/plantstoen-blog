import React from "react"
import "./Header.scss"
import { Link } from "gatsby"

const Header = ({ history }) => {
  return (
    <div className="wrap">
      <div className="wrap__item">
        <span className="title">POST_IT</span>
        <span className="name">@sangminKim</span>
      </div>
    </div>
  )
}

export default Header
