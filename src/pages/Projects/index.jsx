import './projects.scss'
import BlackHeader from '../../components/BlackHeader'
import ProjectsData from '../../datas/projects.json'
import Card from '../../components/Card'
import Contact from '../../components/Contact'

function Projects() {
  return (
    <main>
      <BlackHeader />
      <section className="projects">
        <h1>Mes projets</h1>
        <div className="projects-container">
          {ProjectsData.map((project, index) => (
            <div className="card-and-description" key={index}>
              <h2>{project.title}</h2>
              <Card
                className="project-cards"
                key={project.id}
                image={project.picture[0]}
                title={project.title}
                github={project.github}
                hosting={project.hosting}
                technologies={project.technologies}
              />
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Contact />
    </main>
  )
}

export default Projects
