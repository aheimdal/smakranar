import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLanguage } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/smakranar.png';
import '../css/Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState(i18n.language);

  const handleToggle = () => setOpen(!isOpen);
  const handleClose = () => setOpen(false);
  const checkScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'is' : 'en';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <>
      {/* Placeholder div */}
      <div className={`header-placeholder ${isScrolled ? 'scrolled-placeholder' : ''}`}></div>

      <Navbar bg="light" expand="lg" className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <Navbar.Brand href="/">
          <img src={logo} alt="Company Logo" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleToggle} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={isOpen ? 'show' : ''}>
          <Nav onClick={handleClose} className="ml-auto pr-3">
            <Nav.Link href="/aboutus">{t('ABOUT_US')}</Nav.Link>
            <Nav.Link href="/equipment">{t('EQUIPMENT')}</Nav.Link>
            <Nav.Link href="/projects">{t('PROJECTS')}</Nav.Link>
            <Nav.Link href="/contactus">{t('CONTACT_US')}</Nav.Link>
          </Nav>
          <FontAwesomeIcon 
            icon={faGlobe} 
            onClick={toggleLanguage} 
            className="ml-2 language-icon" 
            title={`Switch to ${language === 'en' ? 'Icelandic' : 'English'}`}
          />
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
