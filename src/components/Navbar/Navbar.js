import * as React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from '../../assets/images/Logo_Kasa_Orange.svg'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className='kasa-navbar'>
            <Link to='/'><img className="kasa-navbar-logo" src={logo} alt="Logo Kasa"/></Link>
            <div className='kasa-navbar-menu'>   
                <NavLink to='/' className={({isActive}) => {
                    return isActive ? 'activeLink' : ''
                }}>Accueil</NavLink>
                <NavLink to='/about' className={({isActive}) => {
                    return isActive ? 'activeLink' : ''
                }}>À Propos</NavLink>
            </div>
        </nav>
    )
}