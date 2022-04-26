import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";

const Nbar = () => {
  return (
    <>
      <div className="navBar">
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <h1> {`< LEONARDO ARRIETA / >`}</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Link href="/">
                  <a className="nav-link">
                    <h4>Inicio</h4>
                  </a>
                </Link>
                <Link href="/About">
                  <a className="nav-link">
                    <h4>Sobre mí</h4>
                  </a>
                </Link>
                <Link href="/Contacto">
                  <a className="nav-link">
                    <h4>Contacto</h4>
                  </a>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Nbar;
