import { Link } from "react-router-dom";
import './Thumb.css'

export default function Apartment({ id, title, cover}){
    return (
        <div className="kasa-rental">
            <Link to={`/apartment/${id}`}>
                <div className='kasa-rental-thumb'>
                    <img className='kasa-rental-thumb-img' src={cover} alt={title} />
                    <h2 className='kasa-rental-thumb-title'>{title}</h2>     
                </div>  
            </Link>
        </div>
    )
}