import './about.scss'
import Emma from '../../assets/img/picture-emma.jpg'
import Contact from '../../components/Contact'
import BlackHeader from '../../components/BlackHeader'

function About() {
  return (
    <main>
      <BlackHeader />
      <section className="apropos">
        <img src={Emma} alt="Emma Montbarbon, jeune développeuse web" />
        <div className="apropos-container">
          <h1>A propos de moi</h1>
          <p>
            <span>N</span>ée près de Lyon en 1998, j'ai suivi une scolarité
            jusqu'au niveau du baccalauréat en littérature. Cependant, ma
            passion pour la programmation a pris racine bien plus tôt, lorsque,
            en tant que joueur, j'ai commencé à jouer à Minecraft et que j'ai
            souhaité posséder mon propre serveur. Pour concrétiser ce projet,
            j'ai dû apprendre le JAVA et commencer à écrire des plugins. Je me
            souviens encore de mon tout premier "Hello World".
          </p>

          <p>
            <span>A</span>près mes études, désireuse d'acquérir mon indépendance
            financière, j'ai commencé à travailler dès que possible, en
            effectuant divers petits boulots. J'ai même eu l'opportunité
            incroyable de devenir professeure d'anglais pour des enfants, ce qui
            m'a permis d'améliorer considérablement mon anglais. C'est pourquoi
            je suis aujourd'hui presque bilingue. Malheureusement, ce poste
            n'était que temporaire, et j'ai dû trouver une nouvelle voie. C'est
            alors que j'ai créé ma propre entreprise en tant que designer,
            utilisant Photoshop pour des clients privés en ligne (création de
            logos, bannières, etc.).
          </p>

          <p>
            <span>L</span>a pandémie de Covid-19 a compliqué la gestion de mon
            entreprise, et je ne pouvais plus continuer à exercer ce métier.
            J'ai donc décidé d'entamer une reconversion professionnelle, d'abord
            en tant que secrétaire comptable. J'appréciais beaucoup la
            comptabilité, mais le volet secrétariat ne me satisfaisait pas car
            je désirais davantage de responsabilités. C'est alors que j'ai
            choisi de me réorienter vers mon métier de rêve : développeuse web.
          </p>
        </div>
      </section>
      <Contact />
    </main>
  )
}

export default About
