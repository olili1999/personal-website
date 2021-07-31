import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
function NavigationBar() {
return (



  <Navbar style={{paddingLeft:"25px"}} collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand>Oliver Li - Personal Website</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{marginRight:"50px"}}/>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <LinkContainer to ="/">
        <Nav.Link>🏠 &nbsp;&nbsp;Home</Nav.Link>
    </LinkContainer>
    <LinkContainer to ="/hobbies">
        <Nav.Link>🧗 &nbsp;&nbsp;Hobbies</Nav.Link>
    </LinkContainer>
    <LinkContainer to ="/about">
        <Nav.Link>📖&nbsp;&nbsp;About</Nav.Link>
    </LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);
}
export default NavigationBar;