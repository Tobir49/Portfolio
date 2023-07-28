function test(id) {
  const image = document.getElementById(id);
  // image.style.filter = "grayscale(100%)";
  console.log(image);
}

function OneProject(props) {
  return (
    <div className="all-projects">
      <div className="one-project">
        <div
          className="techno-project align-items"
          onMouseEnter={test("1")}
          // onMouseLeave=""
        >
          <i className={`${props.technoIconOne} blue icon-project`}></i>
          <i className={`${props.technoIconTwo} blue icon-project`}></i>
          <i className={`${props.technoIconThree} blue icon-project`}></i>

          {props.isList ? (
            <ul className="text-skills-project">
              <li className="bold li-skills-project">{props.liOne}</li>
              <li className="bold li-skills-project">{props.liTwo}</li>
              <li className="bold li-skills-project">{props.liThree}</li>
            </ul>
          ) : (
            " "
          )}

          <a href={props.href} target="blank">
            <i className={`${props.gitHubIcon} blue icon-project`}></i>
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
