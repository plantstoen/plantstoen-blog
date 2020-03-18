import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import "./PostItem.scss"

const PostItem = ({ title, slug, data, excerpt, fluid }) => {
  return (
    <>
      <div className="item">
        <Link to={slug}>
          <Img className="item__image" fluid={fluid} />
          <h3 className="item__title">{title}</h3>
          <p className="item__excerpt">{excerpt}</p>
          <span>— {data}</span>
        </Link>
      </div>
    </>
  )
}

export default PostItem
