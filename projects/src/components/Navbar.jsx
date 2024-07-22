import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar.css'

function OffcanvasExample() {
  const navbarStyle = {
    backgroundColor: '#212529', // Dark background color
  };

  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-dark bg-gradient mb-3 custom-navbar">
          <Container fluid>
            <Navbar.Brand href="/" className="text-light">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="custom-toggler"/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={navbarStyle}
            >
              <Offcanvas.Header closeButton className="custom-close">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='text-white'>
                  Logo
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/" className='text-light nav-item-spacing '>Home</Nav.Link>
                  <Nav.Link href="/about" className='text-light nav-item-spacing '>About</Nav.Link>
                  <Nav.Link href="/bookanbus" className='text-light nav-item-spacing '>Book An Bus</Nav.Link>
                  <Nav.Link href="/contact" className='text-light nav-item-spacing '>Contact Us</Nav.Link>
                  <Button variant="outline-info" className='nav-item-spacing '>Signup/Login</Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;