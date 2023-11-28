import { Container } from "react-bootstrap";

function Footer(){
    const logo="<G/>";
    return(
        <footer>
            <Container fluid className="d-flex justify-content-between bg-dark">
                <p>Copyright © 2021.Todos os direitos reservados.</p>
                <span>Powered by <b>{logo}</b></span>
            </Container>
        </footer>
    )
}
export default Footer;