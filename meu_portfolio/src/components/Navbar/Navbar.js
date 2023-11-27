import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Navbar.module.css';
import { Col } from 'react-bootstrap';
import {Row} from 'react-bootstrap';

function navbar(){
    const logo="<G/>";
    
    return(
      <Container fluid >
      <Row>
        <Col xs={12}>
          <Navbar expand="lg" variant="dark">
            <Container>
              <Navbar.Brand href="#home" className={styles.logo}>
                {logo}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler border-0" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                  <Nav.Link href="#sobre">Sobre mim</Nav.Link>
                  <Nav.Link href="#projetos">Projetos</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
    )
}
export default navbar