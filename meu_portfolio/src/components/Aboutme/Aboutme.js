import { Container, Row, Col } from 'react-bootstrap';
import SocialMedia from './SocialMedia/SocialMedia';
function Aboutme(){
    const AboutMeTitle="<Sobre mim/>"
    return(
        <section id='s-about'>
            <Container className='d-flex justify-content-center align-items-center mb-5'>
                <Container fluid className='bg-dark p-5 rounded'>
                    <Row className='gy-4'>
                        <Col lg={6} xs={12} className='d-flex justify-content-center align-itens-center'>
                            <img className='img-fluid' src='https://via.placeholder.com/400'/>
                        </Col>
                        <Col lg={6} xs={12} className='text-start'>
                            <h1 className='fw-bold'>{AboutMeTitle}</h1>
                            <p className='text-wrap text-break fs-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <SocialMedia/>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}
export default Aboutme;