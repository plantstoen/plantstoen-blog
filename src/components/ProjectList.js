// 이 컴포넌트는, props로 프로젝트 리스트를 받아 랜더링합니다.

import React from "react"
import "./ProjectList.scss"

const data = [
  {
    text: "a",
  },
  {
    text: "b",
  },
  {
    text: "c",
  },
  {
    text: "d",
  },
]

const ProjectList = ({ list }) => {
  return (
    <div>
      <h1>{list}</h1>
      <div className="test">
        {data.map(item => (
          <div className="test__item">{item.text}</div>
        ))}
      </div>
    </div>
  )
}

export default ProjectList
