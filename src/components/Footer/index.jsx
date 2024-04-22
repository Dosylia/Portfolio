import Logo from '../../assets/img/logo-icon.png'
import './footer.scss'

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Logo Emma Montbarbon" />
      <p>© 2024 Emma Montbarbon. Tous droits réservés</p>
      <div className="banner banner-top-left">
        <div className="banner-children"></div>
      </div>
      <div className="banner banner-top-right"></div>
      <div className="banner banner-bottom-left"></div>
      <div className="banner banner-bottom-right"></div>
    </footer>
  )
}

export default Footer
