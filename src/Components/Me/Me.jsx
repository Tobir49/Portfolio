import picture from "../../../images/picture.png";
import "./me.css";

function Me() {
  return (
    <main id="me" className="z-index align-items">
      <img src={picture} alt="image Ribot Baptiste" className="picture-me" />
      <div className="text-main">
        <div className="biopic">
          <h2 className="blue border">BIO</h2>
          <p className="blue center">
            Jeune <span className="blue bold">développeur</span> de 19 ans,
            ayant découvert ce domaine fin 2022, à la suite d'un
            <span className="blue bold"> changement d'orientation</span>.
          </p>
          <p className="blue center">
            J'ai suivi une formation de
            <span className="blue bold"> Développeur Web </span>
            sur <span className="blue bold">Openclassrooms</span> de décembre
            2022 à août 2023, et acquis de nombreuses compétences dans le
            domaine du web (langages ou frameworks). De plus j'ai appris à
            utiliser certains outils, comme Figma, GitHub ou bien Postman.
          </p>
          <p className="blue center">
            Finalement, cette formation m'aura aussi permis d'acquérir des soft
            skills comme l'<span className="blue bold">autonomie</span> et de la{" "}
            <span className="blue bold">flexibilité.</span> Hormis ceux-ci, j'ai
            un bon <span className="blue bold">esprit</span> et une bonne{" "}
            <span className="blue bold">gestion d'équipe</span>, suis{" "}
            <span className="blue bold">sociable</span> et je{" "}
            <span className="blue bold">communique </span>
            facilement et agréablement. Pour plus de détails sur mes skills,
            cliquez{" "}
            <a href="#skills" className="blue border bold">
              ici
            </a>
            .
          </p>
          <p className="blue center">
            Si vous souhaitez en savoir plus sur moi je vous invite à découvrir
            les{" "}
            <a href="#projects" className="blue border bold">
              projets
            </a>{" "}
            que j'ai menés, ou bien à me{" "}
            <a href="#contact" className="blue border bold">
              contacter
            </a>{" "}
            !
          </p>
        </div>
        <div className="hobbies">
          <h2 className="blue border">HOBBIES</h2>
          <p className="blue center">
            Amateur de <span className="blue bold">lecture</span>, je suis
            surtout tourné vers les
            <span className="blue bold"> mangas</span>. Les collectionner est ma
            plus grande passion (plus de 700 actuellement). J’aime partager ce
            hobby en créant du contenu divertissant sur diverses plateformes.
          </p>
          <p className="blue center">
            En plus de mes autres passions, j’adore me
            <span className="blue bold"> balader</span>,
            <span className="blue bold"> profiter</span> de mes proches et
            <span className="blue bold"> jouer</span> avec eux (jeux de sociétés
            / vidéos).
          </p>
        </div>
      </div>
    </main>
  );
}

export default Me;
