import './social.scss'
import Links from '../../datas/links.json'

function Social() {
  return (
    <div className="social">
      <a
        href={Links[0].github}
        target="_blank"
        rel="noreferrer"
        aria-label="Github Emma Montbarbon"
      >
        <i className="fa-brands fa-github"></i>
      </a>
      <a
        href={Links[0].linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="Linkedin Emma montbarbon"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>
    </div>
  )
}

export default Social
