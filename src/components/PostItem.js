import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostItem = ({ title, slug, data, excerpt, fluid }) => {
  return (
    <>
      <div>
        <Link to={slug}>
          <Img fluid={fluid} />
          <h3>
            {title} <span>— {data}</span>
          </h3>
          <p>{excerpt}</p>
        </Link>
      </div>
    </>
  )
}

export default PostItem
