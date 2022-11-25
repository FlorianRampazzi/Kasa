import Banner from '../../components/Banner/Banner'
import Thumb from '../../components/Thumb/Thumb'
import banner from '../../assets/images/Header_Banner.png'
import apartmentList from '../../datas/apartmentList.json'

export default function Home() {
  return (
    <div className='kasa-root'>
      <Banner src={banner}/>
      <h1>Chez vous, partout et ailleurs</h1>
      <div className='kasa-root-rental'>
        {apartmentList.map(({ id, title, cover}) =>
        <div key={id}>
          <Thumb title={title} cover={cover} />
        </div>
        )}
      </div>
    </div>
  )
}
