import React, { useState, useEffect } from 'react'
import './home.scss'
import Card from '../../components/Card'
import Projects from '../../datas/projects.json'

function Home() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === Projects.length - 1 ? 0 : prevIndex + 1,
      )
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main>
      <div className="home-container">
        <section>
          <div className="social">
            <a
              href="https://github.com/Dosylia"
              target="_blank"
              rel="noreferrer"
              aria-label="Github Emma Montbarbon"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/emma-montbarbon-23098723a/"
              target="_blank"
              rel="noreferrer"
              aria-label="Linkedin Emma montbarbon"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div className="title">
            <h1>
              Développeuse <span>Full-Stack</span>
            </h1>
            <p>
              Création de sites web avec HTML, CSS/SASS, JavaScript, PHP, React,
              Node
            </p>
          </div>
          <div className="card-container">
            {Projects.map((project, index) => (
              <div
                key={project.id}
                style={{
                  display: index === currentProjectIndex ? 'block' : 'none',
                }}
              >
                <Card
                  key={project.id}
                  image={project.picture[0]}
                  title={project.title}
                  github={project.github}
                  hosting={project.hosting}
                  technologies={project.technologies}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home
