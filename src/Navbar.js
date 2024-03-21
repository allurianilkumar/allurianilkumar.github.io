import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';

function NavBar({ isAuthenticated }) {
  // const user = sessionStorage.getItem("user") ? sessionStorage.getItem("user") : null;
  // const isLogined = sessionStorage.getItem("isLogined") ? sessionStorage.getItem("isLogined") : false;
  return (
    <>
      {['md'].map((expand) => (
        <Navbar bg="dark" data-bs-theme="dark" sticky="top" key={expand} expand={expand} className="bg-body-tertiary text-center">
          <Container fluid>
            <Navbar.Brand>
              <Nav.Link as={NavLink} to="/">Alluri Anil kumar</Nav.Link>
            </Navbar.Brand>
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
                  <Nav.Link as={NavLink} to="/"><i className="d-block fa fa-home fa-2x" aria-hidden="true"></i>Home</Nav.Link>
                  <Nav.Link as={NavLink} to="/about"><i className="d-block fa fa-pencil fa-2x" aria-hidden="true"></i>About</Nav.Link>
                  
                  <NavDropdown
                    title={<><i className="d-block fa fa-code faa-code fa-2x" aria-hidden="true"></i>Programming</> }
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className="text-center"
                  >
                    <NavDropdown.Item as={NavLink} to="/ruby">Ruby</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/rails">Rails</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/python">Python</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/java">Java</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={NavLink} to="/react">React JS</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/javascript">JavaScript</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={NavLink} to="/resume"><i className="d-block fa fa-file-pdf-o fa-2x" aria-hidden="true"></i>Resume</Nav.Link>
                  <Nav.Link as={NavLink} to="/contact"><i className="d-block fa fa-address-card-o fa-2x" aria-hidden="true"></i>Contact</Nav.Link>
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
            {isAuthenticated ?
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <Nav.Link as={NavLink} to="/logout"><i className="d-block fa fas fa-sign-out fa-2x animated faa-pulse" aria-hidden="true"></i>Logout</Nav.Link>
                </Navbar.Text>
              </Navbar.Collapse>
              :
              <>
                <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text>
                    <Nav.Link as={NavLink} to="/login"><Button variant="primary" size="sm"><i className="d-block fa fa-sign-in fa-fade fa-2x animated" aria-hidden="true"></i>Login</Button></Nav.Link>
                  </Navbar.Text>
                </Navbar.Collapse>
                
                <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text>
                    <Nav.Link as={NavLink} to="/register"><Button variant="warning" size="sm"><i className="d-block fa fa-user-plus fa-2x animated faa-tada" aria-hidden="true"></i>Register</Button></Nav.Link>
                  </Navbar.Text>
                </Navbar.Collapse>
              </>
            }
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;