import React from "react"
import "./Header.scss"
import { Link } from "gatsby"

const navlist = [
  {
    text: "ABOUT",
    path: "about",
  },
  {
    text: "PROJECT",
    path: "project",
  },
]

const Header = ({ history }) => {
  return (
    <div className="wrap">
      <Link to="/">
        <div className="namebox">
          <span className="namebox__nametext">Plantstoen</span>
        </div>
      </Link>
      {window.innerWidth > 750 ? (
        <div className="navlist">
          {navlist.map(n => (
            <Link
              key={n.path}
              to={`/${n.path}`}
              className="navlist__navitem"
              activeClassName={`${n.path}`}
            >
              {n.text}
            </Link>
          ))}
        </div>
      ) : (
        <div className="navbox">
          <span>모바일뷰 준비중 입니다</span>
        </div>
      )}
    </div>
  )
}

export default Header
