import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Rental from './pages/Rental/Rental'
import NotFound from './pages/NotFound/NotFound'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

export default function App() {
    return (
        <div className='kasa-app'>
            
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/apartment/:id' element={<Rental />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    )
}