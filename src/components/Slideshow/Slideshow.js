import React, { useState } from 'react'
import LeftArrow from '../../assets/images/Left_Arrow.svg'
import RightArrow from '../../assets/images/Right_Arrow.svg'
import './Slideshow.css'

/* Création du composant Slideshow.
    Affichage des images correspondantes à l'id de l'élément parent.
    Possibilité de défiler les image vers la gauche ou la droite. */
export default function Slideshow({ slides, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  /* La fonction goToPrevious permet de revenir à l'image précédente
    Vu que l'affichage des slides s'effectue avec l'index
    On vérifie si l'on est sur la première image.
    Si c'est le cas, on récupère le nombre total de slides et on lui enlève 1 (Index en base 0 et non 1) afin d'obtenir l'index correspondant à la dernière page.
    Sinon, on récupère l'index de la slide actuelle et on lui enlève 1 afin d'atteindre la slide précédente.
    On met à jour l'index avec la fontionc setCurrentIndex*/
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  /* La fonction goToNext permet d'atteindre la slide suivante.
  On vérifie si l'on est sur la dernière image.
  Si c'est le cas, on initialise l'index à 0 afin d'atteindre la première page.
  Sinon, on récupère l'index de la slide actuelle et on lui ajoute 1 afin d'atteindre la slide suivante.
  On met à jour l'index avec la fontionc setCurrentIndex*/
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
