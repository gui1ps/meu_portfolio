import styles from './Presentation.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Icons from './Icons/Icons';

function Presentation(){
    const Myname='<b>Guilherme</b>'
    return(
        <Container>
            <Container fluid>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs={6} className={styles.presentationText}>
                        <h1>Olá, eu sou o<br/><b>{Myname}</b><br/>Desenvolvedor Front-End</h1>
                        <Icons/>
                    </Col>
                    <Col  xs={6}>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
export default Presentation