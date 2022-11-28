import React, { useState } from 'react'
import LeftArrow from '../../assets/images/Left_Arrow.svg'
import RightArrow from '../../assets/images/Right_Arrow.svg'
import './Slideshow.css'

export default function Slideshow({ slides, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="kasa-accomodation-slideshow">
      <img
        src={LeftArrow}
        className="kasa-accomodation-slideshow-arrowLeft"
        onClick={goToPrevious}
        alt="Fleche de gauche"
      />
      <img
        src={slides[currentIndex]}
        className="kasa-accomodation-slideshow-slide"
        alt={`${alt.toString()} - Interieur ${currentIndex}`}
      />
      <img
        src={RightArrow}
        className="kasa-accomodation-slideshow-arrowRight"
        onClick={goToNext}
        alt="Fleche de gauche"
      />
      <span className="kasa-accomodation-slideshow-slideIndicator">
        {currentIndex + 1}/{slides.length}
      </span>
    </div>
  )
}
