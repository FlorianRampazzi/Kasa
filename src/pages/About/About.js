import banner from '../../assets/images/About_Banner.png'
import Banner from '../../components/Banner/Banner'

function About() {
    return (
        <div>
            <Banner src={banner} />
            <h1>A propos 🧮</h1>
        </div>
    )
}

 export default About