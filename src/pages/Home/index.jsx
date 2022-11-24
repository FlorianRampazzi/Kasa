import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Apartments from '../Apartments'

export default function Home() {
  return (
    <div className='kasa-root'>
      <Header />
      <Banner />
      <Apartments />
    </div>
  )
}
