import { Link } from 'react-router-dom'
import './error.scss'

function Error() {
  return (
    <main>
      <p className="error-404">404</p>
      <p className="error-text">Cette page n'existe pas</p>
      <Link to="/" className="error-link-container">
        <p className="error-link">Retourner sur la page d'accueil</p>
      </Link>
    </main>
  )
}

export default Error
