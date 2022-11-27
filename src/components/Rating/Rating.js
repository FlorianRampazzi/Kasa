import * as React from "react";
import OrangeStar from '../../assets/images/Star_Orange.svg'
import GreyStar from '../../assets/images/Star_Grey.svg'
import './Rating.css'

export default function Rating({value}) {
    const range = ['1','2','3','4','5']

    return (
        <div className='kasa-rental-rating-star'>
            {range.map((rangeElem, index) => 
                <img key={index} src={value >= rangeElem ? OrangeStar : GreyStar} alt={value >= rangeElem ? 'Étoile orange' : 'Étoile grise'} />
            )}
        </div>
    )
}