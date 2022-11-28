import { useParams } from "react-router-dom"
import accomodationList from '../../datas/accomodationList.json'
import Collapse from "../../components/Collapse/Collapse"
import Rating from '../../components/Rating/Rating'
import Tag from '../../components/Tag/Tag'
import Slideshow from "../../components/Slideshow/Slideshow"
import Host from "../../components/Host/Host"
import './Accomodation.css'

export default function Accomodation() {
  const params = useParams()
  const accomodation = accomodationList.filter((objectJson) => objectJson.id === params.id)[0]
  
  return (
    <div className='kasa-accomodation'>
      <div className='kasa-accomodation-slideshow'>
        <Slideshow slides={accomodation.pictures} alt={accomodation.title} />
      </div>
      <h1 className='kasa-accomodation-title'>{accomodation.title}</h1>
      <p className='kasa-accomodation-location'>{accomodation.location}</p>
      <div className='kasa-accomodation-tags'>
        <Tag content={accomodation.tags} />
      </div>
      <div className='kasa-accomodation-ratingHost'>
        <Rating value={accomodation.rating} />
        <Host host={accomodation.host} />
      </div>
      <div className='kasa-accomodation-collapses'>
        <Collapse title='Description' content={accomodation.description} />
        <Collapse title='Équipement' content={accomodation.equipments} />
      </div>
    </div>
  )
}

