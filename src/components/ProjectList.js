// 이 컴포넌트는, props로 프로젝트 리스트를 받아 랜더링합니다.

import React from "react"
import "./ProjectList.scss"
import projecttest from "./../images/projecttest.png"

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
      <a href="#testgg">이동</a>
      <br />
      <span>진행중인 프로젝트 입니다.</span>
      <div className="test">
        {data.map(item => (
          <div className="test__item">
            <div className="content">
              <img src={projecttest} alt="test" width="100%" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectList
