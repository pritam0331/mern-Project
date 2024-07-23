// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import './Navbar.css'

// function OffcanvasExample() {
//   const navbarStyle = {
//     backgroundColor: '#212529', // Dark background color
//   };

//   return (
//     <>
//       {['lg'].map((expand) => (
//         <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 custom-navbar">
//           <Container fluid>
//             <Navbar.Brand href="/" className="text-dark">Rakt<span className='text-danger'>Daan</span></Navbar.Brand>
//             <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="custom-toggler"/>
//             <Navbar.Offcanvas
//               id={`offcanvasNavbar-expand-${expand}`}
//               aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//               placement="end"
//               style={navbarStyle}
//             >
//               <Offcanvas.Header closeButton className="custom-close">
//                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='text-dark'>
//                   Logo
//                 </Offcanvas.Title>
//               </Offcanvas.Header>
//               <Offcanvas.Body>
//                 <Nav className="justify-content-end flex-grow-1 pe-3">
//                   <Nav.Link href="/" className='text-dark'>Home</Nav.Link>
//                   <Nav.Link href="/about" className='text-dark'>About</Nav.Link>
//                   <Nav.Link href="/bookanbus" className='text-dark'>Book An Bus</Nav.Link>
//                   <Nav.Link href="/contact" className='text-dark'>Contact Us</Nav.Link>
//                   <Button variant="outline-info" className='nav-item-spacing '>Signup/Login</Button>
//                 </Nav>
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </Container>
//         </Navbar>
//       ))}
//     </>
//   );
// }

// export default OffcanvasExample;

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import {useNavigate } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavLink from 'react-bootstrap/esm/NavLink';

function OffcanvasExample() {
  const history = useNavigate();
  const handleSignupSignin = () => {
    history.push('/signup-signin');
  };

  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="/home">Rakt<span className='text-danger'>Daan</span></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Rakt<span className='text-danger'>Daan</span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/home" className='nav-item-spacing'>Home</Nav.Link>
                  <Nav.Link href="/about" className='text-dark nav-item-spacing'>About</Nav.Link>
                  <Nav.Link href="/contact" className='text-dark nav-item-spacing'>Contact Us</Nav.Link>
                  
                </Nav>
                <Nav.Link href='/signup-signin'><Button onClick={handleSignupSignin} variant="outline-danger">Signup/Signin</Button></Nav.Link>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;