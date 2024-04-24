import './card.scss'

function Card({ id, image, title, github, hosting, technologies }) {
  return (
    <article key={id}>
      <div className="image-container">
        <img src={require(`../../assets/img/projects/${image}`)} alt={title} />
      </div>
      <div className="link-container">
        <button>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </button>
        <button>
          <a href={hosting} target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-link"></i>
          </a>
        </button>
      </div>
      <div className="tech-container">
        {technologies.map((tech, index) => (
          <span key={index} className={tech}></span>
        ))}
      </div>
    </article>
  )
}

export default Card
