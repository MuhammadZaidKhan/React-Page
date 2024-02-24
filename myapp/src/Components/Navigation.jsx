import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavigationBar() {
  return (
     <Navbar bg="" expand="lg" variant="" className="px-3 mt-2" class="navigation">
      {/* <Navbar.Brand href="#home">Brand Logo</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
    <Nav.Link href="#about" className="mx-3">About Us</Nav.Link>
    <Nav.Link href="#services" className="mx-3">Our Services</Nav.Link>
    <Nav.Link href="#contact1" className="mx-3">Get in Touch</Nav.Link>
    <Nav.Link href="#contact2" className="mx-3">Contact Us</Nav.Link>
    <Nav.Link href="#portfolio" className="mx-3">Our Portfolio</Nav.Link>
    <Nav.Link href="#team" className="mx-3">Meet Our Team</Nav.Link>
    <Nav.Link href="#pricing" className="mx-3">Pricing</Nav.Link>
    <Nav.Link href="#testimonials" className="mx-3">Testimonials</Nav.Link>
    <Nav.Link href="#faq" className="mx-3">FAQs</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
