import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navbar.module.css";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

function navbar() {
  const logo = "<G/>";

  return (
    <header className={'bg-dark position-fixed vw-100 z-1'} >
      <Container fluid>
        <Row>
          <Col xs={12}>
            <Navbar expand="lg" variant="dark"> 
              <Container>
                <Navbar.Brand href="#s-presentation" className={styles.logo}>
                  {logo}
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  className="navbar-toggler border-0"
                />
                <Navbar.Collapse
                  id="basic-navbar-nav"
                  className="justify-content-end"
                >
                  <Nav>
                    <Nav.Link href="#s-about">Sobre mim</Nav.Link>
                    <Nav.Link href="#s-projects">Projetos</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
export default navbar;
