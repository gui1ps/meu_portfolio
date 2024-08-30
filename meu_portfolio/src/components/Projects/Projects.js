import { Col, Container, Row } from "react-bootstrap";
import styles from "./Projects.module.css";
import Buttons from "./Buttons/Buttons";
import Renderprojects from "./RenderProjects/Renderprojects";
import { useState, useEffect } from "react";
import axios from 'axios';

function Projects() {
  const baseUrl = "https://meu-portfolio-json-server-vercel.vercel.app/projetos";
  const [items, setItems] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      data: {},
    };
    axios.get(baseUrl,config)
      .then((response) => {
        console.log("Dados da API:", response.data);
        setItems(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.error("Erro na resposta do servidor:", error.response.data);
          console.error("Status do erro:", error.response.status);
          console.error("Cabeçalhos do erro:", error.response.headers);
        } else if (error.request) {
          console.error("Erro na solicitação, sem resposta do servidor:", error.request);
        } else {
          console.error("Erro ao configurar a solicitação:", error.message);
        }
        console.error("Configuração do erro:", error.config);
      });
  }, []);

  const projectsTitle = "<Projetos/>";
  const [ViewHighlights, setViewHighlights] = useState(true);
  const [ViewAll, setViewAll] = useState(true);

  return (
    <section id="s-projects">
      <Container className="d-flex justify-content-center align-items-center mb-5 mt-5">
        <Container
          fluid
          className={`bg-dark p-5 rounded ${styles.ProjectsContainer}`}
        >
          <h1 className="fw-bold">{projectsTitle}</h1>
          <Row className="mb-4">
            <Col xs={12}>
              <Buttons event={() => setViewHighlights(!ViewHighlights)} text="Destaques" />
            </Col>
            {ViewHighlights ? <Renderprojects itens={items} ishighlight={true}/> : <></>}
          </Row>
          <Row>
            <Col xs={12}>
            <Buttons event={() => setViewAll(!ViewAll)} text="Todos" />
            </Col>
            {ViewAll ? <Renderprojects itens={items} ishighlight={false} /> : <></>}
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Projects;
