import logo from '../../assets/images/Logo_Kasa.svg'
// import '../header.css'

export default function Header() {
    return (
        <nav className='kasa-navbar'>
            <img className="kasa-navbar-logo" src={logo} alt="Logo Kasa"/>
            <ul className='kasa-navbar-menu'>
                <li>Accueil</li>
                <li>A propos</li>
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