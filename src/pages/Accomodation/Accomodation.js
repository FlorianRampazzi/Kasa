import { useParams, Navigate } from 'react-router-dom'
import accomodationList from '../../datas/accomodationList.json'
import Collapse from '../../components/Collapse/Collapse'
import Rating from '../../components/Rating/Rating'
import Tag from '../../components/Tag/Tag'
import Slideshow from '../../components/Slideshow/Slideshow'
import Host from '../../components/Host/Host'
import './Accomodation.css'

export default function Accomodation() {
  const params = useParams()

  let accomodation = accomodationList.filter(
    (objectJson) => objectJson.id === params.id
  )

  accomodation = accomodation.length !== 0 ? accomodation[0] : false
  if (accomodation === false) {
    return <Navigate to="/notfound" replace />
  }

  return (
    <div className="kasa-accomodation">
      <div className="kasa-accomodation-nameNtags-slideshow">
        <Slideshow slides={accomodation.pictures} alt={accomodation.title} />
      </div>

      <div className="kasa-accomodation-header">
        <div className="kasa-accomodation-header-nameTags">
          <h1 className="kasa-accomodation-header-nameTags-title">
            {accomodation.title}
          </h1>
          <p className="kasa-accomodation-header-nameTags-location">
            {accomodation.location}
          </p>
          <div className="kasa-accomodation-header-nameTags-tags">
            <Tag content={accomodation.tags} />
          </div>
        </div>

        <div className="kasa-accomodation-header-ratingHost">
          <Rating
            className="kasa-accomodation-header-ratingHost-rating"
            value={accomodation.rating}
          />
          <Host
            className="kasa-accomodation-header-ratingHost-host"
            host={accomodation.host}
          />
        </div>
      </div>

      <div className="kasa-accomodation-collapses">
        <Collapse title="Description" content={accomodation.description} />
        <Collapse title="Équipement" content={accomodation.equipments} />
      </div>
    </div>
  )
}
