import picture from "../../../images/picture.png";
import "./me.css";

function Me() {
  return (
    <main id="me">
      <img src={picture} alt="image Ribot Baptiste" />
      <div className="text-main">
        <div className="biopic">
          <h2 className="yellow">BIO</h2>
          <p className="white center">
            Jeune <span className="yellow bold">développeur</span> de 19 ans,
            ayant découvert ce domaine fin 2022.
          </p>
          <p className="white center">
            Ayant suivi une formation de
            <span className="yellow bold"> Développeur Web </span>
            sur <span className="yellow bold">Openclassrooms</span> de décembre
            2022 à août 2023, j’ai acquis de nombreuses compétences (langages et
            frameworks) et su utiliser certains outils, comme Figma, GitHub ou
            bien Postman.
          </p>
        </div>
        <div className="hobbies">
          <h2 className="yellow">HOBBIES</h2>
          <p className="white center">
            Amateur de <span className="yellow bold">lecture</span>, je suis
            surtout tourné vers les
            <span className="yellow bold"> mangas</span>. Les collectionner sont
            ma plus grande passion (plus de 700 actuellement). J’aime partager
            ce hobby en créant du contenu divertissant sur diverses plateformes.
          </p>
          <p className="white center">
            En plus de mes autres passions, j’adore me
            <span className="yellow bold"> balader</span>,
            <span className="yellow bold"> profiter</span> de mes proches et
            <span className="yellow bold"> jouer</span> avec eux (jeux de
            sociétés / vidéos).
          </p>
        </div>
      </div>
    </main>
  );
}

export default Me;
