import { Card} from "react-bootstrap";
import {Row,Col} from "react-bootstrap";
function Renderprojects({itens}){
    if (!itens || !Array.isArray(itens)) {
        return null;
      }
    return(
        <>
        <Row  xs={1} md={2} className="d-flex align-items-center g-4 pb-4 border border-top-light border-bottom-light border-end-0 border-start-0">
            {itens.map((e,idx)=>(
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={e.url} />
                            <Card.Body>
                                <Card.Title>{e.title}</Card.Title>
                                <Card.Text>{e.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
        </Row>
        </>
    );
}
export default Renderprojects;