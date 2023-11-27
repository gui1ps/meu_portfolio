import styles from './Presentation.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Icons from './Icons/Icons';
import Btn from './Btn/Btn';

function Presentation(){
    const Myname='<b>Guilherme</b>'
    return(
        <header>
            <Container className="d-flex justify-content-center align-items-center vh-100">
                    <Row>
                        <Col lg={8} xs={12} className="text-center text-lg-start">
                            <h1>Olá, eu sou o<br/><b>{Myname}</b><br/>Desenvolvedor Front-End</h1>
                            <Icons/>
                            <Btn/>
                        </Col>
                        <Col lg={4} className='d-none d-lg-flex justify-content-center align-items-center'><img className='img-fluid text-center' src='https://via.placeholder.com/300'/></Col>
                    </Row>
            </Container>
        </header>
    )
}
export default Presentation;