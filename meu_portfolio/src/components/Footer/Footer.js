import { Container } from "react-bootstrap";

function Footer() {
  const logo = "<G/>";
  return (
    <footer>
      <Container
        fluid
        className="d-flex justify-content-sm-between justify-content-center flex-column flex-sm-row bg-dark text-center mt-5 py-4 px-md-5 px-sm-3 fs-6"
      >
        <p className="m-0">Copyright © 2021.Todos os direitos reservados.</p>
        <span className="d-none d-sm-block">
          Powered by <b>{logo}</b>
        </span>
      </Container>
    </footer>
  );
}
export default Footer;
