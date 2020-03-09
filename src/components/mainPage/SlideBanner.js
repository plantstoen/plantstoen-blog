import React, { useState, useCallback, useEffect, useRef } from "react"
import testImage1 from "../../images/testImage1.jpg"
import testImage2 from "../../images/testImage2.jpg"
import testImage3 from "../../images/testImage3.png"
//import useClientWidth from "./useClientWidth"
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md"
import "./SlideBanner.scss"

const SlideBanner = () => {
  let isSlideDone = 0
  let counter = 1
  const carouselSlide = useRef(null)
  const testImage = useRef() // 얘가 안됨
  const size = 1200 // 이미지 크기 받아와서 여기다 넣어야함
  useEffect(() => {
    carouselSlide.current.style.transform =
      "translateX(" + -size * counter + "px)"
    console.log(size)
  }, [])

  const nextBtnClick = useCallback(e => {
    if (isSlideDone === 0) {
      isSlideDone = 1
      carouselSlide.current.style.transition = "transform 0.4s ease-in-out"
      counter++
      carouselSlide.current.style.transform = ``
      "translateX(" + -size * counter + "px)"
      console.log(counter)
    }
  })

  const prevBtnClick = useCallback(e => {
    if (isSlideDone === 0) {
      isSlideDone = 1
      carouselSlide.current.style.transition = "transform 0.4s ease-in-out"
      counter--
      carouselSlide.current.style.transform =
        "translateX(" + -size * counter + "px)"
      console.log(counter)
    }
  })

  const transitionEnd = useCallback(e => {
    isSlideDone = 0
    if (counter === 0) {
      carouselSlide.current.style.transition = "none"
      counter = 3
      carouselSlide.current.style.transform =
        "translateX(" + -size * counter + "px)"
    }
    if (counter === 4) {
      carouselSlide.current.style.transition = "none"
      counter = 1
      carouselSlide.current.style.transform =
        "translateX(" + -size * counter + "px)"
    }
  })

  return (
    <div>
      <div className="carousel-container">
        <MdKeyboardArrowLeft id="prevBtn" onClick={prevBtnClick} />
        <MdKeyboardArrowRight id="nextBtn" onClick={nextBtnClick} />
        <div
          className="carousel-slide"
          ref={carouselSlide}
          onTransitionEnd={transitionEnd}
        >
          <img
            className="bannerimage"
            ref={testImage}
            src={testImage3}
            id="lastClone"
            alt=""
          />
          <img className="bannerimage" src={testImage1} alt="" />
          <img className="bannerimage" src={testImage2} alt="" />
          <img className="bannerimage" src={testImage3} alt="" />
          <img
            className="bannerimage"
            src={testImage1}
            id="firstClone"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default SlideBanner
