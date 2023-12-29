import { Card, Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import styles from "./Renderprojects.module.css";
import isUrl from "is-url";

function Renderprojects({ itens,ishighlight }) {
  if (!itens || !Array.isArray(itens) || itens.length === 0) {
    return (
      <Container className="bg-secondary p-2 rounded mt-3">
        <span>Estou trabalhando em novos projetos🖥️☕</span>
      </Container>
    );
  }
  return (
    <>
      <Row
        xs={1}
        md={2}
        className={`d-flex align-items-center g-4 pb-4 border border-top-light border-bottom-light border-end-0 border-start-0 ${styles.ProjectsContainer}`}
      >
        {ishighlight
          ? itens
              .filter((e) => e.destaque === 1)
              .map((e, idx) => (
                <Col key={idx}>
                  <Card>
                    <Card.Img variant="top" src={e.url_foto} />
                    <Card.Body className="d-grid gap-2">
                      <Card.Title>{e.titulo}</Card.Title>
                      <Card.Text>{e.texto}</Card.Text>
                      <Button size="sm" variant="outline-dark">Ver no GitHub</Button>
                      {isUrl(e.url_projeto)?<Button href={e.url_projeto} target="_blank" size="sm" variant="outline-dark">Acessar Projeto</Button>:<Button size="sm" variant="outline-dark" disabled>{e.url_projeto}</Button>}
                    </Card.Body>
                  </Card>
                </Col>
              ))
          : itens
              .filter((e) => e.destaque === 0)
              .map((e, idx) => (
                <Col key={idx}>
                  <Card>
                    <Card.Img variant="top" src={e.url_foto} />
                    <Card.Body className="d-grid gap-2">
                      <Card.Title>{e.titulo}</Card.Title>
                      <Card.Text>{e.texto}</Card.Text>
                      <Button size="sm" variant="outline-dark">Ver no GitHub</Button>
                      {isUrl(e.url_projeto)?<Button href={e.url_projeto} target="_blank" size="sm" variant="outline-dark">Acessar Projeto</Button>:<Button size="sm" variant="outline-dark" disabled>{e.url_projeto}</Button>}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
      </Row>
    </>
  );
}
export default Renderprojects;