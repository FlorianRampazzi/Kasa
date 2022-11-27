import { useParams } from "react-router-dom"
import apartmentList from '../../datas/apartmentList.json'
import Collapse from "../../components/Collapse/Collapse"
import Rating from '../../components/Rating/Rating'
import Tag from '../../components/Tag/Tag'
import Slideshow from "../../components/Slideshow/Slideshow"
import Host from "../../components/Host/Host"

export default function Rental() {
  const params = useParams()
  const apartment = apartmentList.filter((objectJson) => objectJson.id === params.id)[0]
  

  return (
    <div className='kasa-rental'>

      <Slideshow slides={apartment.pictures} alt={apartment.title} />

      <h1>{apartment.title}</h1>

      <Rating value={apartment.rating}/>

      <Host host={apartment.host}/>
      
      <div className='kasa-rental-tags'>
        <Tag content={apartment.tags} />
      </div>
      
      <Collapse title='Équipement' content={apartment.equipments} />

    </div>
  )
}

