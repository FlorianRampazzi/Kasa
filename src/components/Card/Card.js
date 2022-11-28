import { Link } from 'react-router-dom'
import './Card.css'

/* Création du composant Card afin d'afficher tout les logements disponible selon leur id unique.*/
export default function Card({ id, title, cover }) {
  return (
    <div className="kasa-card">
      <Link to={`/accomodation/${id}`}>
        <div className="kasa-card-content">
          <img className="kasa-card-content-img" src={cover} alt={title} />
          <h2 className="kasa-card-content-title">{title}</h2>
        </div>
      </Link>
    </div>
  )
}
