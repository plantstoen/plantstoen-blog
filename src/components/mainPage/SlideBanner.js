import React, { useState, useCallback, useEffect, useRef } from "react"
import testImage1 from "../../images/testImage1.jpg"
import testImage2 from "../../images/testImage2.jpg"
import testImage3 from "../../images/testImage3.png"
import "./SlideBanner.scss"

const SlideBanner = () => {
  const [counter, setCounter] = useState(1)
  const carouselSlide = useRef(null)
  const size = 1000
  useEffect(() => {
    console.log("마운트될 때만")
    carouselSlide.current.style.transform =
      "translateX(" + -size * counter + "px)"
    console.log(counter)
  }, [])

  const nextBtnClick = useCallback(e => {
    carouselSlide.current.style.transition = "transform 0.4s ease-in-out"
    setCounter(counter + 1)
    carouselSlide.current.style.transform =
      "translateX(" + -size * counter + "px)"
    console.log(counter)
  })

  const prevBtnClick = useCallback(e => {
    carouselSlide.current.style.transition = "transform 0.4s ease-in-out"
    setCounter(counter - 1)
    carouselSlide.current.style.transform =
      "translateX(" + -size * counter + "px)"
    console.log(counter)
  })
  return (
    <div>
      <div className="carousel-container">
        <div className="carousel-slide" ref={carouselSlide}>
          <img src={testImage3} id="lastClone" alt="" width="1000px" />
          <img src={testImage1} alt="" width="1000px" />
          <img src={testImage2} alt="" width="1000px" />
          <img src={testImage3} alt="" width="1000px" />
          <img src={testImage1} id="firstClone" alt="" width="1000px" />
        </div>
      </div>
      <button id="prevBtn" onClick={prevBtnClick}>
        Prev
      </button>
      <button id="nextBtn" onClick={nextBtnClick}>
        Next
      </button>
    </div>
  )
}

export default SlideBanner
