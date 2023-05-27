import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/images/smakranar.png';
import '../css/Header.css';

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleToggle = () => setOpen(!isOpen);
    const handleClose = () => setOpen(false);
    const checkScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };

      useEffect(() => {
        window.addEventListener("scroll", checkScroll);
        return () => {
          window.removeEventListener("scroll", checkScroll);
        };
      }, []);

    return (
        <Navbar bg="light" expand="lg" className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <Navbar.Brand href="/">
                <img src={logo} alt="Company Logo" className="d-inline-block align-top" />
            </Navbar.Brand>
            <Navbar.Toggle onClick={handleToggle} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse in={isOpen} id="basic-navbar-nav">
                <Nav onClick={handleClose} className="ml-auto pr-3">
                    <Nav.Link href="/aboutus">UM OKKUR</Nav.Link>
                    <Nav.Link href="/equipment">VINNUTÆKI</Nav.Link>
                    <Nav.Link href="/projects">VERKEFNI</Nav.Link>
                    <Nav.Link href="/contactus">HAFA SAMBAND</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;