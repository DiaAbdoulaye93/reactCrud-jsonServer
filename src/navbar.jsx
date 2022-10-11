import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from 'react-router-dom';
import './App.css';
function Topbar() {
  return (
    <Navbar bg="info" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React crud lite </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to={`/`}>Liste etudiants </Link></Nav.Link>
            <Nav.Link href="/"><Link to={`/interface2`}> Interface 2 </Link></Nav.Link>
            <NavDropdown title="Sous menus" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Sous menu 1
              </NavDropdown.Item>
              <NavDropdown.Item href="/add-student">
                Sous menu 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Sous menu 3
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;
