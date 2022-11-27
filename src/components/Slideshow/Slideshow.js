import React, { useState } from "react"
import LeftArrow from '../../assets/images/Left_Arrow.svg'
import RightArrow from '../../assets/images/Right_Arrow.svg'
import './Slideshow.css'

export default function Slideshow({slides, alt}) {
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
        <div className='kasa-rental-slideshow'>
            <img src={LeftArrow} className='kasa-rental-slideshow-arrowLeft' onClick={goToPrevious} alt='Fleche de gauche'/>
            <img src={slides[currentIndex]} className='kasa-rental-slideshow-slide' alt={`${alt[currentIndex]} - Interior ${currentIndex}`} />
            <img src={RightArrow} className='kasa-rental-slideshow-arrowRight' onClick={goToNext}alt='Fleche de gauche'/>
            <span className='kasa-rental-slideshow-slideIndicator'>{currentIndex + 1}/{slides.length}</span>
        </div>
    )
}