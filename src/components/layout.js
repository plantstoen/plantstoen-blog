import React from "react"
import "./layout.scss"
import Header from "./Header"

export default ({ children }) => (
  <>
    <div className="mainlayout">{children}</div>
  </>
)
