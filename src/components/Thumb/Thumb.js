import { Link } from "react-router-dom";
import './Thumb.css'

export default function Accomodation({ id, title, cover}){
    return (
        <div className="kasa-accomodation">
            <Link to={`/accomodation/${id}`}>
                <div className='kasa-accomodation-thumb'>
                    <img className='kasa-accomodation-thumb-img' src={cover} alt={title} />
                    <h2 className='kasa-accomodation-thumb-title'>{title}</h2>     
                </div>  
            </Link>
        </div>
    )
}