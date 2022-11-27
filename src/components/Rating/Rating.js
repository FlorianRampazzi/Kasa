import * as React from "react";
import OrangeStar from '../../assets/images/Star_Orange.svg'
import GreyStar from '../../assets/images/Star_Grey.svg'
import './Rating.css'

export default function Rating({value}) {
    const range =['1','2','3','4','5']

    return (
        <div className='kasa-rental-rating-star'>
            {range.map((rangeElem) => 
                value >= rangeElem ? (
                    <img key={`Star_${rangeElem.toString}/5`} src={OrangeStar} alt='Etoile orange'/>
                ) : (
                    <img key={`Star_${rangeElem.toString}/5`} src={GreyStar} alt='Etoile grise'/>
                )
            )}
        </div>
    )
}