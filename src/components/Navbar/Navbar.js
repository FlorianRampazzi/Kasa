import * as React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/Logo_Kasa_Orange.svg'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className='kasa-navbar'>
            <Link to='/'><img className="kasa-navbar-logo" src={logo} alt="Logo Kasa"/></Link>
            <div className='kasa-navbar-menu'>
                    <Link to='/'>Accueil</Link>
                    <Link to='/about'>À propos</Link>
            </div>
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