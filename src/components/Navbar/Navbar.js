import * as React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/images/Logo_Kasa_Orange.svg'
import './Navbar.css'

/* Création du composant Navbar qui permet la navigation entre les différentes pages
    L'utilisation des composants React Router Link et NavLink permet l'utilisation de liens.
    Les Navlinks permettent d'indiquer si l'élément est actif grace à la propriété isActive 
    et de lui appliquer une class le cas échéant.*/
export default function Navbar() {
  return (
    <header className="kasa-navbar">
      <Link to="/">
        <img className="kasa-navbar-logo" src={logo} alt="Logo Kasa" />
      </Link>
      <nav className="kasa-navbar-menu">
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? 'activeLink' : ''
          }}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => {
            return isActive ? 'activeLink' : ''
          }}
        >
          À Propos
        </NavLink>
      </nav>
    </header>
  )
}
