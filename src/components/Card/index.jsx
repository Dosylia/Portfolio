import './card.scss'

function Card({ id, image, title, github, hosting, technologies }) {
  return (
    <div className="card">
      <article key={id}>
        <div className="image-container">
          <img
            src={require(`../../assets/img/projects/${image}`)}
            alt={title}
          />
        </div>
        <div className="link-container">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <button>
              <i className="fa-brands fa-github"></i>
            </button>
          </a>
          <a href={hosting} target="_blank" rel="noopener noreferrer">
            <button>
              <i className="fa-solid fa-link"></i>
            </button>
          </a>
        </div>
        <div className="tech-container">
          {technologies.map((tech, index) => (
            <span key={index} className={tech}></span>
          ))}
        </div>
      </article>
    </div>
  )
}

export default Card
