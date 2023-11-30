import { Col, Container, Row } from "react-bootstrap";
import styles from "./Projects.module.css";
import Buttons from "./Buttons/Buttons";
import Renderprojects from "./RenderProjects/Renderprojects";
import { useState } from "react";
function Projects() {
  const projectsTitle = "<Projetos/>";

  let teste = [
    {
      title: "Teste",
      text: "Texto de teste",
      url: "https://via.placeholder.com/100",
    },
    {
      title: "Teste",
      text: "Texto de teste",
      url: "https://via.placeholder.com/100",
    },
    {
      title: "Teste",
      text: "Texto de teste",
      url: "https://via.placeholder.com/100",
    },
    {
      title: "Teste",
      text: "Texto de teste",
      url: "https://via.placeholder.com/100",
    },
  ];

  const [View, setView] = useState(true);

  return (
    <section id="s-projects">
      <Container className="d-flex justify-content-center align-items-center mb-5 mt-5">
        <Container fluid className="bg-dark p-5 rounded">
          <h1 className="fw-bold">{projectsTitle}</h1>
          <Row className="mb-4">
            <Col xs={12}>
              <Buttons event={() => setView(!View)} text="Destaques" />
            </Col>
            {View ? <Renderprojects itens={teste} /> : <></>}
          </Row>
          <Row>
            <Col xs={12}>
              <Buttons text="Todos" />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
export default Projects;
