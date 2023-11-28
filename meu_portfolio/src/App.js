import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Presentation from './components/Presentation/Presentation.js';
import Aboutme from './components/Aboutme/Aboutme.js';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from './components/Footer/Footer.js';

function App() {
  
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col xs={12}>
            <Navbar/>
            <Presentation/>
          </Col>
          <Col xs={12} className='mb-5 mt-5'>
            <Aboutme/>
          </Col>
          <Col xs={12}>
            <Footer/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
