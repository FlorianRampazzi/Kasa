import { Link } from "react-router-dom";

export default function Apartment({ id, title, cover}){

    return (
        <Link to={`/apartment/${id}`}>
            <div className='kasa-root-rental-thumb'>
                <img src={cover} alt={title} />
                <h2>{title}</h2>     
            </div>  
        </Link>
    )
}