import * as React from 'react'
import OrangeStar from '../../assets/images/Star_Orange.svg'
import GreyStar from '../../assets/images/Star_Grey.svg'
import './Rating.css'

/*  Création du composant Rating
    Permet d'afficher un système de notation de 1 à 5 représenté par des étoiles*/
export default function Rating({ value }) {
  const range = ['1', '2', '3', '4', '5']

  /* On récupère la valeur de l'élément parent via les propriétés
    Pour chaque étoile, on va comparer la valeur de l'élément parent avec la range.
    Tant que la valeur est supérieure ou égale à la range, on affiche une étoile orange.
    Sinon on affiche une étoile grise.*/
  return (
    <div className="kasa-accomodation-rating-star">
      {range.map((rangeElem, index) => (
        <img
          key={index}
          src={value >= rangeElem ? OrangeStar : GreyStar}
          alt={value >= rangeElem ? 'Étoile orange' : 'Étoile grise'}
        />
      ))}
    </div>
  )
}
