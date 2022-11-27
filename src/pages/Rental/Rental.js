import { useParams } from "react-router-dom"
import apartmentList from '../../datas/apartmentList.json'
import Rating from '../../components/Rating/Rating'
import Tag from '../../components/Tag/Tag'

export default function Rental() {
  const params = useParams()
  const apartment = apartmentList.filter((objectJson) => objectJson.id === params.id)[0]
  

  return (
    <div className='kasa-rental'>
      <p>{apartment.title}</p>

      <div className='kasa-rental-rating'>
        <Rating value={apartment.rating}/>
      </div>
      
      <div className='kasa-rental-tags'>
        <Tag content={apartment.tags} />
      </div>
      
    </div>
  )
}

