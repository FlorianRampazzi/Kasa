import banner from '../../assets/images/About_Banner.png'
import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'

function About() {
    return (
        <div>
            <Banner src={banner} />
            <h1>A propos 🧮</h1>
            <Collapse title='Respect' content='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' />
        </div>
    )
}

 export default About