import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/images/smakranar.png';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
  <img
    src={logo}
    alt="Company Logo"
    width="155"
    height="30"
    className="d-inline-block align-top"
  />
</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#aboutus">About Us</Nav.Link>
          <Nav.Link href="#employees">Employees</Nav.Link>
          <Nav.Link href="/projectgallery">Project Gallery</Nav.Link>
          <Nav.Link href="/equipment">Equipment</Nav.Link>
          <Nav.Link href="#contactus">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
