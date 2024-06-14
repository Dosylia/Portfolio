import './training.scss'
import Contact from '../../components/Contact'
import Collapse from '../../components/Collapse'
import BlackHeader from '../../components/BlackHeader'
import ProjetFinalIntegration from '../../assets/img/integration-projet-final.png'
import RocketLauncher from '../../assets/img/rocket-launcher-js.png'
import Booki from '../../assets/img/projects/booki/booki-1.png'
import Kaza from '../../assets/img/projects/kaza/kaza-1.png'
import NinaCarducci from '../../assets/img/projects/nina-carducci/nina-carducci-1.png'
import MonVieuxGrimoire from '../../assets/img/projects/mon-vieux-grimoire/mon-vieux-grimoire-1.png'
import SophieBluel from '../../assets/img/projects/sophie-bluel/sophie-bluel-1.png'
import Formation from '../../assets/img/formation-developpement-webforce.jpeg'

function Training() {
  return (
    <main>
      <BlackHeader />
      <section className="training">
        <h1>Mes formations</h1>
        <img
          className="image-dev"
          src={Formation}
          alt="Développeur web codant sur son ordinateur portable"
        />
        <article className="3wacademy">
          <h2>3W Academy - Développeuse Full Stack</h2>
          <p>Juillet 2023 - Novembre 2023</p>
          <p>
            Ma formation avec la 3W Academy est composée de 3 axes principaux,
            l'intégration avec HTML/CSS/SASS, l'apprentissage de Javascript et
            enfin l'apprentrissage de PHP, SQL et Javascript asynchrone.
          </p>
          <Collapse collapseTitle={'Partie 1 : Intégration'}>
            <div className="tech">
              <i class="fa-brands fa-html5"></i>
              <i class="fa-brands fa-css3-alt"></i>
              <i class="fa-brands fa-sass"></i>
            </div>
            <p>
              Au début de cette formation, j'ai étudié le HTML et CSS en
              repartant des bases jusqu'à y ajouter des notions plus avancées et
              des optimisations comme le Emmet. J'ai réalisé des dizaines de
              pages web au cours de 5 modules chaque module ayant son propre
              projet finale avec un site web réaliste et moderne offrant du
              challenge. Lors du module 5, j'ai aussi été introduite à un
              nouveau language le SASS (SCSS).
            </p>
            <img
              src={ProjetFinalIntegration}
              alt="Page d'un site web de vente thé avec une thématique verte et un design moderne, le site web contient un carroussel."
            />
          </Collapse>
          <Collapse collapseTitle={'Partie 2 : Javascript'}>
            <div className="tech">
              <i class="fa-brands fa-js"></i>
            </div>
            <p>
              Tout d'abord j'ai dû acquérir des connaissances basiques sur
              Javascript tel que la syntaxe générale, puis les tableaux, les
              conditions, les boucles, les fonctions, la gestion du DOM etc.
              L'un des premiers exercices a été de réaliser une calculatrice
              complètement fonctionnelle.
            </p>
            <p>
              Une fois ces bases acquises, j'ai étudié la gestion du temps sur
              JS (TimeOut, Interval) et fait un chronomètre. Ensuite j'ai fais
              la découverte du canvas et j'ai réalisé un mini jeu original dont
              le but était d'éliminer des vagues de zombies en se déplaçant sur
              le canvas. En mélégeant la gestion du temps et le canvas, j'ai pu
              faire décoller une fusée dans l'espace grâce à Javascript
            </p>
            <img
              src={RocketLauncher}
              alt="Site web avec une fusée qui s'envole vers la lune suite à un compte a rebours atteignant 0."
            />
            <p>
              Enfin j'ai découverte le Javascript Object Oriented (Programming
              Object Oriented - POO)avec les classes, les constructor, les
              getters et setters etc. Ce fut un challenge pour moi étant une
              totale découverte.
            </p>
            <p>
              Pour cloturer la partie JS de cette formation, j'ai étudié les
              bases d'un framework Vue.JS
            </p>
            <div className="tech">
              <i class="fa-brands fa-vuejs"></i>
            </div>
          </Collapse>
          <Collapse
            collapseTitle={'Partie 3 - PHP, SQL et Javascript asynchrone'}
          >
            <div className="tech">
              <i class="fa-brands fa-js"></i>
              <i class="fa-brands fa-php"></i>
            </div>
            <p>
              J'ai commencé mon apprentissage avec un projet de robot où j'ai
              implémenté des fonctionnalités comme la génération de noms
              aléatoires, l'affichage de la date, l'inversion de noms, la
              création de phrases aléatoires et le changement d'état entre
              amical et diabolique. Ensuite, j'ai appris à connecter PHP à une
              base de données SQL via PhpMyAdmin et à authentifier des
              utilisateurs sur un site web.
            </p>
            <p>
              Par la suite, j'ai étudié la programmation orientée objet (POO) en
              PHP, en utilisant des classes, des getters, des setters, et des
              constructeurs. Une fois ces notions acquises, j'ai part
              <i class="fa-brands fa-github"></i>pé à un projet de groupe pour
              créer un site permettant l'ajout et la suppression d'objets dans
              une base de données SQL, avec une interface d'administration
              sécurisée.
            </p>
            <p>
              Après ce projet, j'ai appris à gérer l'asynchronisme en combinant
              JavaScript et PHP, et à comprendre le transfert de données entre
              ces deux langages. J'ai également appris à utiliser le
              localStorage en JavaScript pour créer un formulaire qui conserve
              les données même en cas d'erreur, avec une option de mode sombre.
            </p>
            <p>
              Enfin, j'ai réalisé un projet final, disponible sur mon Github
              <a
                href="https://github.com/Dosylia/RentYourDreamCar"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rent Your Dream Car
              </a>
              . J'ai créé un site de location de voitures de luxe en utilisant
              le modèle MVC (Model-View-Controller). Ce site comprend une
              vérification des formulaires en JavaScript et PHP pour les
              utilisateurs et les administrateurs, et présente un contenu
              différent en fonction des droits d'accès. Il est connecté à une
              base de données et utilise le localStorage pour gérer un panier
              avant de finaliser les articles dans la base de données. Ce
              projet, réalisé en une semaine, a intégré toutes les compétences
              acquises précédemment.
            </p>
          </Collapse>
        </article>
        <article className="openclassrooms">
          <h2>OpenClassrooms - Développeuse Full Stack</h2>
          <p>Février 2024 - Octobre 2024</p>
          <p>
            Ma formation OpenClassrooms est composée de 7 projets, chacun
            correspondant à une partie. Ce portfolio est le dernier projet et,
            une fois terminé, j'obtiendrai un Bac +2.
          </p>
          <Collapse collapseTitle={'Partie 1 - HTML/CSS'}>
            <div className="tech">
              <i class="fa-brands fa-html5"></i>
              <i class="fa-brands fa-css3-alt"></i>
            </div>
            <img
              src={Booki}
              alt="Site web de voyage au design moderne dans le thème bleu/blanc, avec des options d'hôtel et de lieux à visiter."
            />
            <p>
              J'ai commencé par retravailler le HTML et le CSS en réalisant la
              page d'accueil d'un site de voyage. Le projet est disponible sur
              mon GitHub :
              <a
                href="https://github.com/Dosylia/Booki"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </p>
          </Collapse>
          <Collapse collapseTitle={'Partie 2 - JavaScript / API REST'}>
            <div className="tech">
              <i class="fa-brands fa-js"></i>
            </div>
            <img
              src={SophieBluel}
              alt="Site web d'architecte au design moderne dans le thème vert/blanc, présentant les réalisations de Sophie Bluel dans une galerie de projets."
            />
            <p>
              J'ai rendu un site web dynamique en utilisant JavaScript et une
              API REST. Le projet est disponible sur mon GitHub :
              <a
                href="https://github.com/Dosylia/SophieBluel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </p>
          </Collapse>
          <Collapse collapseTitle={"Partie 3 - Optimisation d'un site web"}>
            <img
              src={NinaCarducci}
              alt="Site web de photographe au design moderne dans le thème orange/rose, présentant une réalisation de Nina Carducci avec sa description."
            />
            <p>
              J'ai optimisé les performances, l'accessibilité et le SEO d'un
              site web en utilisant des outils d'audit et de référencement. Le
              projet est disponible sur mon GitHub :
              <a
                href="https://github.com/Dosylia/NinaCarducci"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </p>
          </Collapse>
          <Collapse collapseTitle={'Partie 4 - React'}>
            <div className="tech">
              <i class="fa-brands fa-react"></i>
              <i class="fa-brands fa-sass"></i>
            </div>
            <img
              src={Kaza}
              alt="Site web de location d'appartements au design moderne dans le thème rouge/blanc, présentant différentes locations proposées."
            />
            <p>
              J'ai réalisé un site web frontend en utilisant React et SASS pour
              le design. Ce projet est une single page application utilisant une
              architecture basée sur les pages et les composants. Le projet est
              disponible sur mon GitHub :
              <a
                href="https://github.com/Dosylia/Kaza"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </p>
          </Collapse>
          <Collapse collapseTitle={'Partie 5 - Node/Express/MongoDB'}>
            <div className="tech">
              <i class="fa-brands fa-node"></i>
            </div>
            <img
              src={MonVieuxGrimoire}
              alt="Site web de notation de livres au design moderne dans le thème beige/blanc, présentant différents livres populaires avec leur type, leur auteur, leur date de publication et une note sur 5 étoiles."
            />
            <p>
              Pour ce projet, le frontend en React était déjà fourni. J'ai
              réalisé le backend en partant de zéro avec Node, Express et
              MongoDB. Le projet est disponible sur mon GitHub :
              <a
                href="https://github.com/Dosylia/Mon_Vieux_Grimoire"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </p>
          </Collapse>
          <Collapse collapseTitle={"Partie 6 - Planification d'un projet"}>
            <p>
              J'ai planifié le développement complet d'un projet en commençant
              par une veille technique avec un outil d'agrégation
              d'informations, en étudiant les spécifications techniques et en
              trouvant des solutions. J'ai ensuite créé un Kanban et décrit la
              méthodologie de développement, la durée du projet et les
              ressources nécessaires. Enfin, j'ai présenté tout cela au client
              Qwenta. Le projet est disponible sur mon GitHub :
            </p>
          </Collapse>
          <Collapse collapseTitle={'Partie 7 - Portfolio'}>
            <div className="tech">
              <i class="fa-brands fa-react"></i>
              <i class="fa-brands fa-sass"></i>
            </div>
            <p>
              Ce projet est le site web sur lequel vous êtes. La création était
              très libre, ce qui m'a permis d'exprimer ma créativité et de
              choisir les technologies de mon choix. J'ai opté pour React et
              SASS. Le projet est disponible sur mon GitHub :
              <a
                href="https://github.com/Dosylia/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </p>
          </Collapse>
        </article>
      </section>
      <Contact />
    </main>
  )
}

export default Training
