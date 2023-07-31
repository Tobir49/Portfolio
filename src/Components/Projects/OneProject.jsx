function OneProject(props) {
  return (
    <div className="all-projects">
      <div className="one-project justify">
        <div className="techno-project align-items justify">
          {props.technos.length > 0
            ? props.technos.map((techno, index) => (
                <i key={index} className={`${techno} blue icon-project`}></i>
              ))
            : " "}

          {props.skills.length > 0 ? (
            <ul className="text-skills-project">
              {props.skills.map((skill, index) => (
                <li key={index} className="bold li-skills-project">
                  {skill}
                </li>
              ))}
            </ul>
          ) : (
            " "
          )}

          <a href={props.href} target="blank">
            <i
              className={`${props.gitHubIcon} blue icon-project icon-github`}
            ></i>
          </a>
        </div>
        <img
          src={props.src}
          alt={props.alt}
          className="img-project"
          id={props.id}
        />
        <div className="text-project white">
          <p className="white">⏰ {props.date}</p>
          <p className="white">🪪 {props.title}</p>
          <p className="white center">💻 {props.textOne}</p>
          <p className="white center">⛔️{props.textTwo}</p>
        </div>
      </div>
    </div>
  );
}

export default OneProject;
