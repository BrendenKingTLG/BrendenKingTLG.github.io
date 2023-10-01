import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";

import "./Projects.css";

export default function Projects() {
  return (
    <Container id="projects">
      <section className="projectsContainer">
        <h3>Projects</h3>
        <Figure>
          <a href="https://brendenkingtlg.github.io/examplecompanyapp/">
            {" "}
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src="company-app.png"
            />
          </a>

          <Figure.Caption>
            <strong>Example Company App</strong>
          </Figure.Caption>
        </Figure>
        <Figure>
          <a href="https://brendenkingtlg.github.io/portfolio-frontend/">
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src="web-dev.png"
            />
          </a>
          <Figure.Caption>
            <strong>Web dev concepts portfolio</strong>
          </Figure.Caption>
        </Figure>
      </section>
    </Container>
  );
}
