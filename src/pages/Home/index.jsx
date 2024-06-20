import './home.scss'
import Social from '../../components/Social'
import Emma from '../../assets/img/picture-emma.webp'

function Home() {
  return (
    <main>
      <div className="home-container">
        <section className="home-section">
          <Social />
          <div className="title">
            <h1>
              Développeuse <span>Full-Stack</span>
            </h1>
            <p>
              Création de sites web avec HTML, CSS/SASS, JavaScript, PHP, React,
              Node
            </p>
          </div>
          <div className="image-container">
            <img src={Emma} alt="Emma Montbarbon" />
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home
