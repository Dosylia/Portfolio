import { NavLink } from 'react-router-dom'
import Logo from '../../assets/img/logo-icon-white.png'
import './header.scss'

function Header() {
  return (
    <header>
      <NavLink to="/" activeclassname="active" exact="">
        <img src={Logo} alt="Logo Emma Montbarbon" />
      </NavLink>
      <nav>
        <NavLink to="/" activeclassname="active" exact="">
          <p>Accueil</p>
          <i className="fa-solid fa-house" aria-label="Accueil"></i>
        </NavLink>
        <NavLink to="/apropos" activeclassname="active" exact="">
          <p>A propos</p>
          <i className="fa-solid fa-address-card" aria-label="A propos"></i>
        </NavLink>
        <NavLink to="/formation" activeclassname="active" exact="">
          <p>Formation</p>
          <i className="fa-solid fa-school" aria-label="Formation"></i>
        </NavLink>
        <NavLink to="/projets" activeclassname="active" exact="">
          <p>Projets</p>
          <i className="fa-solid fa-folder" aria-label="Projets"></i>
        </NavLink>
        <NavLink to="/contact" activeclassname="active" exact="">
          <p>Contact</p>
          <i className="fa-solid fa-address-book" aria-label="Contact"></i>
        </NavLink>
      </nav>
      <div className="banner banner-top-left"></div>
      <div className="banner banner-top-right"></div>
      <div className="banner banner-bottom-left"></div>
      <div className="banner banner-bottom-right"></div>
    </header>
  )
}

export default Header
