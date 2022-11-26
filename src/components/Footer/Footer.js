import { Link } from 'react-router-dom'
import logo from '../../assets/images/Logo_Kasa_Blanc.svg'
import './Footer.css'

export default function Footer() {
    return (
        <div className='kasa-footer'>
            <Link to='/'><img className='kasa-footer-logo' src={logo} alt='Logo Kasa blanc' /></Link>
            <p className='kasa-footer-text'>© 2022 Kasa. All rights reserved</p>
        </div>
    )
} 