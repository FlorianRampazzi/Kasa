import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import banner from '../../assets/images/Header_Banner.png'
import accomodationList from '../../datas/accomodationList.json'
import './Home.css'

export default function Home() {
  return (
    <div className="kasa-root">
      <Banner src={banner} title="Chez vous, partout et ailleurs" />
      <div className="kasa-root-cards">
        {accomodationList.map(({ id, title, cover }) => (
          <Card key={id} id={id} title={title} cover={cover} />
        ))}
      </div>
    </div>
  )
}
