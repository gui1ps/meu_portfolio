import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "./SocialMedia/SocialMedia";
function Aboutme() {
  const AboutMeTitle = "<Sobre mim/>";
  return (
    <section id="s-about">
      <Container className="d-flex justify-content-center align-items-center mb-5">
        <Container fluid className="bg-dark p-5 rounded">
          <Row className="gy-4">
            <Col
              lg={6}
              xs={12}
              className="d-flex justify-content-center align-itens-center"
            >
              <img
                className="img-fluid"
                src="https://via.placeholder.com/400"
              />
            </Col>
            <Col lg={6} xs={12} className="text-start">
              <h1 className="fw-bold">{AboutMeTitle}</h1>
              <p className="text-wrap text-break fs-5">
                Meu nome é Guilherme Roberto dos Passos, tenho 21 anos e sou
                apaixonado por programação. Atualmente, estou focado em
                desenvolver habilidades fullstack, com uma carga maior, por
                enquanto, no front end. Faço questão de dar o meu melhor em cada
                projeto que desenvolvo, buscando sempre aprofundar o
                conhecimento que já possuo e desenvolver novas habilidades.
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
export default Aboutme;
