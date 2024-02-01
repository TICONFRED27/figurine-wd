import "./homePage.scss";
import Navbar from "../../components/Navbar/Navbar";

function HomePage() {
  return (
    <div className="contenu">
      <h1 className="title">Fallen Figurines game</h1>
      <Navbar />
      <div className="container">
        <img src="src/assets/WdAllOutWar.jpeg" alt="" className="WdAllOutWar" />
        <div className="boite">
          <h2 className="titreBoite">
            The Walking Dead: All Out War - Immersion dans un Monde
            Post-Apocalyptique
          </h2>
          <img
            src="src/assets/boitewalkingdead.webp"
            alt=""
            className="boiteJeuxWd"
          />
        </div>
      </div>

      <p className="descriptionJeux">
        "The Walking Dead: All Out War" est un jeu de plateau passionnant basé
        sur la célèbre série de bandes dessinées "The Walking Dead" de Robert
        Kirkman. Ce jeu plonge les joueurs dans un univers post-apocalyptique où
        les morts-vivants errent dans un monde ravagé. Concept du Jeu Dans "The
        Walking Dead: All Out War", les joueurs prennent le rôle de survivants
        luttant contre les hordes de zombies, mais aussi contre d'autres groupes
        de survivants. Avec un système de jeu basé sur des dés et des cartes,
        les joueurs doivent gérer leurs ressources, planifier leurs mouvements
        et combattre pour leur survie. Conclusion Pour les amateurs de la série
        et les passionnés de jeux de stratégie, "The Walking Dead: All Out War"
        est un incontournable. Il offre une expérience de jeu captivante et une
        rejouabilité élevée grâce à ses nombreux scénarios et extensions
        disponibles.
      </p>
    </div>
  );
}

export default HomePage;
