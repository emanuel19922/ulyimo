import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CartWidget } from "../CartWidget/CartWidget";
import ImageLogo from "../ImageLogo/ImageLogo";
import '../NavBar/_NavBar.scss';
import {Link} from "react-router-dom";

function OffcanvasExample() {
  return (
    <>
      {[  'sm'].map((expand) => (
     
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container  >
            {/* aca  esta la imagen importada de cartwidget */}
            <Navbar.Brand as={Link} to='/'> <ImageLogo/> </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className="justify-content-end flex-grow-1 pe-3 "  >
                <Link to='/' className="nav-link"> Home </Link>
          <Link to='/product/jeans' className="nav-link"> jeans </Link> 
          <Link to='/product/remera' className="nav-link">   remeras </Link> 
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
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
            <Link  to='/CartWidget'>  <CartWidget/> </Link>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;