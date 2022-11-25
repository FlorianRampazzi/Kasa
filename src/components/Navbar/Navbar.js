import * as React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/Logo_Kasa.svg'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className='kasa-navbar'>
            <Link to='/'><img className="kasa-navbar-logo" src={logo} alt="Logo Kasa"/></Link>
            <ul className='kasa-navbar-menu'>
                <li>
                    <Link to='/'>Accueil</Link>
                </li>
                <li>
                    <Link to='/about'>À propos</Link>
                </li>
            </ul>
        </nav>
    )
}

// .kasa-navbar {
//     display: flex;
//     justify-content: space-between;
//   }
//   .kasa-navbar-logo {
//     height: 5vh;
//     width: auto;
//   }
//   .kasa-navbar-menu {
//     display: flex;
//     justify-content: flex-end;
//     gap: 10px;
//   }