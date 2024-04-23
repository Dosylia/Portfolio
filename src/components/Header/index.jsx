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
          Accueil
        </NavLink>
        <NavLink to="/apropos" activeclassname="active" exact="">
          A propos
        </NavLink>
        <NavLink to="/formation" activeclassname="active" exact="">
          Formation
        </NavLink>
        <NavLink to="/projets" activeclassname="active" exact="">
          Projet
        </NavLink>
        <NavLink to="/contact" activeclassname="active" exact="">
          Contact
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
