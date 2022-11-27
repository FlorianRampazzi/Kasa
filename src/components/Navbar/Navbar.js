import * as React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from '../../assets/images/Logo_Kasa_Orange.svg'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className='kasa-navbar'>
            <Link to='/'><img className="kasa-navbar-logo" src={logo} alt="Logo Kasa"/></Link>
            <div className='kasa-navbar-menu'>   
                <NavLink to='/'>Accueil</NavLink>
                <NavLink to='/about'>À propos</NavLink>
            </div>
        </nav>
    )
}