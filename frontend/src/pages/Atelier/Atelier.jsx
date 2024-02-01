import "./Atelier.scss";
import Navbar from "../../components/Navbar/Navbar";

function Atelier() {
  return (
    <div className="contenu">
      <h1 className="title">Fallen Figurines game</h1>
      <Navbar />
      <h2 className="titleatelier">Atelier</h2>
      <img src="src/assets/atelier1.png" alt="" className="photoAtelier1" />
      <h2 className="titreAtelier">
        Bienvenue à l'Atelier de Peinture de Figurines et Création de Décors
      </h2>
      <p className="texteAteliers">
        Nous sommes ravis de vous inviter à notre atelier unique, dédié à l'art
        de la peinture de figurines et à la création de décors en maquette pour
        les jeux de plateau. Que vous soyez un passionné de Zombicide, un fan de
        The Walking Dead, ou simplement curieux d'explorer cet univers créatif,
        notre atelier offre un espace idéal pour développer vos talents et
        partager votre passion. Atelier de Peinture de Figurines Notre atelier
        de peinture est équipé de tout le nécessaire pour transformer vos
        figurines brutes en œuvres d'art minutieusement détaillées. Que vous
        débutiez dans le hobby ou que vous soyez un peintre expérimenté, vous
        trouverez chez nous conseils, techniques et inspiration. De la
        préparation de la figurine à l'application des derniers détails, nos
        experts sont là pour vous guider. Création de Décors en Maquette Pour
        ceux qui souhaitent aller plus loin, nous proposons également des
        sessions dédiées à la création de décors en maquette. Apprenez à
        construire des paysages, des bâtiments et des scènes réalistes qui
        donneront vie à vos parties de jeu. Nos ateliers sont conçus pour
        stimuler la créativité et vous enseigner les compétences nécessaires
        pour créer des mondes en miniature époustouflants. Rejoignez Notre
        Communauté Chaque session est une occasion de rencontrer d'autres
        amateurs et de partager des astuces et des histoires autour de nos jeux
        de plateau préférés. Que vous souhaitiez améliorer vos compétences en
        peinture, construire le décor parfait pour votre prochaine session de
        jeu, ou simplement passer un bon moment en bonne compagnie, notre
        atelier est l'endroit parfait pour vous. Nous sommes impatients de vous
        voir parmi nous et de découvrir ensemble l'art extraordinaire de la
        peinture de figurines et de la création de décors en maquette!
      </p>
    </div>
  );
}

export default Atelier;
