import React, { useState } from 'react';

import {
  Container, Row, Col,
  Button, Form, Nav, Navbar, Dropdown, NavDropdown,Offcanvas
} from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
import './styles/submenu.css';
function NavBar({ isAuthenticated }) {
  const [show,setShow] = useState(false);
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
              bg="dark"
              data-bs-theme="dark"
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
                  <Nav.Link title="Home" as={NavLink} to="/"><i className="d-block fa fa-home fa-2x" aria-hidden="true"></i>Home</Nav.Link>
                  <Nav.Link as={NavLink} to="/about"><i className="d-block fa fa-pencil fa-2x" aria-hidden="true"></i>About</Nav.Link>
                  <NavDropdown
                    title={<><i className="d-block fa fa-code faa-code fa-2x" aria-hidden="true"></i>Technologies</>}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className="mydropdownmenu"
                    onMouseEnter={() => setShow(true) }
                    onMouseLeave={ () => setShow(false) }
                    show={ show }
                  >
                  <Row>
                  <Col xs="12" md="6" className="mymenu text-left">
                  <NavDropdown.Divider />
                  <h3>Back-End</h3>
                  <NavDropdown.Divider />
                    <NavDropdown.Item onClick={ () => setShow(false) } as={NavLink} to="/ruby">Ruby</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => setShow(false) } as={NavLink} to="/rails">Rails</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => setShow(false) } as={NavLink} to="/python">Python</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => setShow(false) } as={NavLink} to="/java">Java</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => setShow(false) } as={NavLink} to="/php">PHP</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => setShow(false) } as={NavLink} to="/c">C</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => setShow(false) } as={NavLink} to="/c#">C#</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <h3>Databases</h3>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={ () => setShow(false) } as={NavLink} to="/mysql">MySQL</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => setShow(false) } as={NavLink} to="/postgresql">PostgreSQL</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => setShow(false) } as={NavLink} to="/oracle">Oracle</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => setShow(false) } as={NavLink} to="/MongoDB">MongoDB</NavDropdown.Item>
                    </Col>
                    <Col xs="12" md="6" className="mymenu text-left">
                    <NavDropdown.Divider />
                    <h3>Front-End</h3>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={ () => setShow(false) } as={NavLink} to="/react">React JS</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => setShow(false) } as={NavLink} to="/javascript">JavaScript</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => setShow(false) } as={NavLink} to="/jquery">JQuery</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => setShow(false) } as={NavLink} to="/bootstrap">Bootstrap</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => setShow(false) } as={NavLink} to="/axios">Axios</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => setShow(false) } as={NavLink} to="/nodejs">NodeJS</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => setShow(false) } as={NavLink} to="/html">HTML</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => setShow(false) } as={NavLink} to="/css">CSS</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => setShow(false) } as={NavLink} to="/images_fonts">Images/Fonts</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => setShow(false) } as={NavLink} to="/json_xml">JSON/XML</NavDropdown.Item>
                    <Dropdown.Divider/>
                    <h3>Testing Tools</h3>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={ () => setShow(false) } as={NavLink} to="/manual_testing">Manual</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => setShow(false) } as={NavLink} to="/selenium_automation">Selenium</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => setShow(false) } as={NavLink} to="/rspec">RSpec</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => setShow(false) } as={NavLink} to="/maven">Maven</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => setShow(false) } as={NavLink} to="/testNG">TestNG</NavDropdown.Item>
                    </Col>
                    </Row>
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
