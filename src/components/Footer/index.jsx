import Logo from '../../assets/img/logo-icon.png'
import './footer.scss'

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Logo Emma Montbarbon" />
      <div className="footer-content"></div>
      <p>© 2024 Emma Montbarbon. All rights reserved</p>
    </footer>
  )
}

export default Footer
