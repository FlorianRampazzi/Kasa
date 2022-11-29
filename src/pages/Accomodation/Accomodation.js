import { useParams, Navigate } from 'react-router-dom'
import accomodationList from '../../datas/accomodationList.json'
import Collapse from '../../components/Collapse/Collapse'
import Rating from '../../components/Rating/Rating'
import Tag from '../../components/Tag/Tag'
import Slideshow from '../../components/Slideshow/Slideshow'
import Host from '../../components/Host/Host'
import './Accomodation.css'

/* Création du composant Accomodation qui affiche toutes les infos d'un logement contenu dans la bdd (ici le JSON)
   et rédirige l'utilisateur vers la page NotFound si l'id n'est pas présent dans le JSON*/
export default function Accomodation() {
  const params = useParams()

  // Recherche dans le JSON de l'objet avec l'id correspondant à l'id présent en paramètre URI
  let accomodation = accomodationList.filter(
    (objectJson) => objectJson.id === params.id
  )

  /* Comparaison du résultat de la recherche précédente. 
    Si le tableau n'est pas vide, attribuer la valeur du premier élément du tableau dans la variable accomodation.
    Sinon, retourner le composant Navigate qui permet la redirection vers la page NotFound */
  accomodation = accomodation.length !== 0 ? accomodation[0] : false
  if (accomodation === false) {
    return <Navigate to="/notfound" replace />
  }

  return (
    <section className="kasa-accomodation">
      <section className="kasa-accomodation-nameNtags-slideshow">
        <Slideshow slides={accomodation.pictures} alt={accomodation.title} />
      </section>

      <section className="kasa-accomodation-header">
        <header className="kasa-accomodation-header-nameTags">
          <h1 className="kasa-accomodation-header-nameTags-title">
            {accomodation.title}
          </h1>
          <p className="kasa-accomodation-header-nameTags-location">
            {accomodation.location}
          </p>
          <div className="kasa-accomodation-header-nameTags-tags">
            <Tag content={accomodation.tags} />
          </div>
        </header>

        <aside className="kasa-accomodation-header-ratingHost">
          <Rating
            className="kasa-accomodation-header-ratingHost-rating"
            value={accomodation.rating}
          />
          <Host
            className="kasa-accomodation-header-ratingHost-host"
            host={accomodation.host}
          />
        </aside>
      </section>

      <section className="kasa-accomodation-collapses">
        <Collapse title="Description" content={accomodation.description} />
        <Collapse title="Équipement" content={accomodation.equipments} />
      </section>
    </section>
  )
}
