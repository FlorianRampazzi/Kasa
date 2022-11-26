import { useParams } from "react-router-dom"
import apartmentList from '../../datas/apartmentList.json'

export default function Rental() {
  const params = useParams()
  const apartment = apartmentList.filter((objectJson) => objectJson.id === params.id)[0]

  return (
    <div className='kasa-rental'>
      <p>{apartment.title}</p>
    </div>
  )
}
