import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import './header.css'
function Header() {
  return (
    <Navbar expand="lg" className="navbar-bg">
      <Container>
        <Navbar.Brand href="#home" className='brand-name'>Ship<strong>Up</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
          <NavDropdown className="me-auto nav-items" title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Company</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="nav-items" href="#home">Services</Nav.Link>
            <Nav.Link className="nav-items" href="#link">Solutions</Nav.Link>
            <Nav.Link className="nav-items" href="#link">Industries</Nav.Link>
            <Nav.Link className="nav-items" href="#link">Insights</Nav.Link>
            <Nav.Link className="nav-items" href="#link">News And Media</Nav.Link>
      
          </Nav>
          <div className='d-flex justify-content-evenly ms-5'>
            <div>
            <Button variant="outline-primary outlined-button w-100">Request Quote</Button>{' '}

            </div>
            <div>
            <Button variant="primary normal-button ms-5 w-100">Join Now</Button>{' '}
            </div>
          </div>
        </Navbar.Collapse>


      </Container>
    </Navbar>
  );
}

export default Header;