import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";

const Nbar = () => {
  return (
    <>
      <motion.div
        className="navBar"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand href="/">
              <h1> {`< LEONARDO MANUEL ARRIETA / >`}</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Link href="/">
                  <a className="nav-link">
                    <motion.h4
                      whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.5 }}
                    >
                      Inicio
                    </motion.h4>
                  </a>
                </Link>
                <Link href="/About">
                  <a className="nav-link">
                    <motion.h4
                      whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.5 }}
                    >
                      {" "}
                      Sobre mí
                    </motion.h4>
                  </a>
                </Link>
                <Link href="/Contacto">
                  <a className="nav-link">
                    <motion.h4
                      whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.5 }}
                    >
                      Contacto
                    </motion.h4>
                  </a>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </motion.div>
    </>
  );
};

export default Nbar;
