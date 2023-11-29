import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import Navbar from './components/Navbar/Navbar.js';
import Presentation from './components/Presentation/Presentation.js';
import Aboutme from './components/Aboutme/Aboutme.js';
import Projects from './components/Projects/Projects.js';
import Footer from './components/Footer/Footer.js';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Presentation/>
        <Aboutme/>
        <Projects/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
