import React from "react"
import "./Introduce.scss"

const Introduce = () => {
  return (
    <div className="selectBox">
      <span className="basicText">👋🏼 안녕하세요</span>
      <br />
      <div className="selectBox__selectLine">
        <span onClick={() => console.log("hi")}>디렉터</span>
        <span>엔지니어</span>
      </div>
    </div>
  )
}

export default Introduce
