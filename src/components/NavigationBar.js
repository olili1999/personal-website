import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
function NavigationBar() {
return (

  <Navbar style={{paddingLeft:"25px"}} collapseOnSelect expand="lg" bg="dark" variant="dark">
  <p style = {{color: "white", marginRight:"20px"}} class = "font-monospace h2 mb-0"> oliver li</p>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{marginRight:"50px"}}/>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
        <Nav.Link href="#about">about me</Nav.Link>
        <Nav.Link href="#projects">projects</Nav.Link>
        <Nav.Link href="#work_experience">work experience</Nav.Link>
        <Nav.Link href="#coursework">coursework</Nav.Link>
        <Nav.Link href="#resume">resume</Nav.Link>


    </Nav>
  </Navbar.Collapse>
</Navbar>
);
}
export default NavigationBar;