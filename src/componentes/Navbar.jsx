import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export default function Navigation() {
  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Container className="justify-content-start">
          <Navbar.Brand className="position-absolute top-0 end-0">  Happy Cake 🍰 </Navbar.Brand>
          <Link to="/home" className="text-white ms-3 text-decoration-none" > 
              🏠 Home
          </Link>

          <Link to="/contacto" className="text-white ms-3 text-decoration-none">
              📒 Contacto
          </Link>
         
        </Container>
      </Navbar>
    </>
  );
}
