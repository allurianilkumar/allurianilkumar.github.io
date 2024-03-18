import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar bg="dark" data-bs-theme="dark" sticky="top" key={expand} expand={expand} className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">Alluri Anil kumar</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  A.Anil kumar
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                  <Nav.Link as={NavLink} to="/about">About</Nav.Link>                
                  <NavDropdown
                    title="Programming"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item as={NavLink} to="/ruby">Ruby</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/rails">Rails</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/python">Python</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/java">Java</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={NavLink} to="/react">React JS</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/javascript">JavaScript</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={NavLink} to="/resume">Resume</Nav.Link>
                  <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
              </Navbar.Text>
            </Navbar.Collapse>

          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;