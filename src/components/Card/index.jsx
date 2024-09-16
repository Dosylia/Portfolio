import React, { useState } from 'react'
import './card.scss'

function Card({
  id,
  image,
  title,
  github,
  hosting,
  technologies,
  description,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="card">
      <article key={id}>
        <div className="image-container" onClick={openModal}>
          <img
            src={require(`../../assets/img/projects/${image[0]}`)}
            alt={title}
          />
          <div className="image-hover">
            <h2>{title}</h2>
            <p>
              Voir plus <i className="fa-solid fa-arrow-right"></i>
            </p>
          </div>
        </div>
        <div className="link-container">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="direction github"
          >
            <button aria-label="boutton github">
              <i className="fa-brands fa-github"></i>
            </button>
          </a>
          {hosting !== '' && (
            <a
              href={hosting}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="direction rendu projet"
            >
              <button aria-label="boutton rendu site web">
                <i className="fa-solid fa-link"></i>
              </button>
            </a>
          )}
        </div>
        <div className="tech-container">
          {technologies.map((tech, index) => (
            <span key={index} className={tech}></span>
          ))}
        </div>
      </article>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="modal-pic-container">
              {image.map((picture, index) => (
                <img
                  key={index}
                  src={require(`../../assets/img/projects/${picture}`)}
                  alt={title}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Card
