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
        <Nav.Link className = "hvr-underline-reveal nav-link" href="#about">about me</Nav.Link>
        <Nav.Link className = "hvr-underline-reveal nav-link" href="#work_experience">work experience</Nav.Link>
        <Nav.Link className = "hvr-underline-reveal nav-link" href="#projects">projects</Nav.Link>
        <Nav.Link className = "hvr-underline-reveal nav-link" href="#recommendations">recommendations</Nav.Link>
        <Nav.Link className = "hvr-underline-reveal nav-link" href="#coursework">coursework</Nav.Link>


    </Nav>
  </Navbar.Collapse>
</Navbar>
);
}
export default NavigationBar;