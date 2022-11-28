import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Accomodation from './pages/Accomodation/Accomodation'
import NotFound from './pages/NotFound/NotFound'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

/*  Appel des composants de navigation
    Création des routes Accueil, A Propos, Logement et UrlIntrouvable*/
export default function App() {
  return (
    <>
      <Navbar />
      <div className="kasa-app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accomodation/:id" element={<Accomodation />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}
