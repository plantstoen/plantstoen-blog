import React from "react"
import "./Header.scss"
import { Link } from "gatsby"

const Header = ({ history }) => {
  return (
    <div className="wrap">
      <Link to="/">
        <div className="namebox">
          <span className="namebox__nametext">Plantstoen</span>
        </div>
      </Link>
      <div className="navlist">
        <Link
          to={"about"}
          className="navlist__navitem"
          activeClassName="isactive"
        >
          ABOUT
        </Link>
      </div>
    </div>
  )
}

export default Header
