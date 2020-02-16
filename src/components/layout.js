import React from "react"
import "./layout.scss"
import Header from "./Header"

export default ({ children }) => (
  <>
    <Header />
    <div className="mainlayout">{children}</div>
  </>
)
