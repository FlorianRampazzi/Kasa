import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import banner from '../../assets/images/Header_Banner.png'
import accomodationList from '../../datas/accomodationList.json'
import './Home.css'

/* Création du composant Home
  Intégration du composant Banner
  Affichage des différentes Cards présentes dans l'application */
export default function Home() {
  return (
    <section className="kasa-home">
      <Banner src={banner} title="Chez vous, partout et ailleurs" />
      <div className="kasa-home-cards">
        {accomodationList.map(({ id, title, cover }) => (
          <Card key={id} id={id} title={title} cover={cover} />
        ))}
      </div>
    </section>
  )
}
