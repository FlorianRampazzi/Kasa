import React, { useState, useRef, useEffect } from 'react'
import Chevron from '../../assets/images/Chevron.svg'
import './Collapse.css'

/* Création du composant Collapse qui permet au clic de reveler ou non les informations du contenu.*/
export default function Collapse({ title, content }) {
  const [toggle, setToggle] = useState(false)
  const [heightEl, setHeightEl] = useState()

  // Initialise l'état de toggle sur true.
  const toggleState = () => {
    setToggle(!toggle)
  }

  // Récupère l'élément de référence
  const refHeight = useRef()

  // Défini la hauteur de l'élément par rapport à la taille du contenu de référence
  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight + 5}px`)
  }, [])

  /* Lors du clic, la fonction toggleState est appelée et défini toggle sur true.
  Si toggle est true :
    On applique la classe rotate sur le chevron pour le faire pivoter.
    On applique la classe animate sur la div toggle afin de la faire apparaitre.
  Dans la div toggle on compare le contenu afin de savoir s'il s'agit d'un paragraphe ou d'une liste et on lui applique la classe correspondante.
  */
  return (
    <div className="kasa-collapse">
      <div onClick={toggleState} className="kasa-collapse-visible">
        <h2>{title}</h2>
        <img className={toggle ? 'rotate' : null} src={Chevron} alt="Chevron" />
      </div>

      <div
        className={
          toggle ? 'kasa-collapse-toggle animate' : 'kasa-collapse-toggle'
        }
        style={{ height: toggle ? `${heightEl}` : '0px' }}
      >
        {typeof content === typeof '' ? (
          <p
            ref={refHeight}
            aria-hidden={toggle ? 'true' : 'false'}
            className="kasa-collapse-toggle-content"
          >
            {content}
          </p>
        ) : (
          <ul ref={refHeight} className="kasa-collapse-toggle-content">
            {content.map((equipmentElem) => (
              <li
                key={equipmentElem.toString()}
                className="kasa-collapse-toggle-content-list"
                aria-hidden={toggle ? 'true' : 'false'}
              >
                {equipmentElem}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
