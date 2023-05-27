import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaFacebookF, FaGavel, FaHome, FaPhone, FaShieldAlt } from 'react-icons/fa';
import '../css/Footer.css';

const Footer = () => {

  return (
    <>
      <div className='info-container'>
        <div className='web-info'>
          <h1>VEFURINN</h1>
          <Link className="web-info-link" to="/aboutus">Um Okkur</Link>
          <Link className="web-info-link" to="/equipment">Vinnutæki</Link>
          <Link className="web-info-link" to="/projects">Verkefni</Link>
          <Link className="web-info-link" to="/contactus">Hafa Samband</Link>
        </div>
        <div className='description-container'>
          <h1>SMÁKRANAR</h1>
          <p className='desc-text'>Smákranar hafa tekið þátt í nokkrum af stærstu byggingaframkvæmdum á Íslandi frá því þeir voru stofnaðir árið 2003</p>
        </div>
        <div className='address-container'>
          <h1>HAFA SAMBAND</h1>
          <div className='address-text'>
            <FaHome />
            <a href="https://www.google.com/maps/search/?api=1&query=Stórihjalli+15" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}> Stórihjalli 15, 200 Kópavogur</a>
          </div>

          <div className='address-text'>
            <FaPhone />
            <a href="tel:6994241" style={{ color: 'inherit', textDecoration: 'none' }}> 699 4241</a>
          </div>

          <div className='address-text'>
            <FaEnvelope />
            <a href="mailto:ese@smakranar.is" style={{ color: 'inherit', textDecoration: 'none' }}> ese@smakranar.is</a>
          </div>

          <div className='address-text'>
            <FaFacebookF />
            <a href="https://www.facebook.com/Smakranar" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}> Facebook</a>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>© 2023 Smákranar</p>
          <div className='footer-navigation'>
            <Link to="/terms"><FaGavel />  Terms of Service</Link>
            <Link to="/privacy"><FaShieldAlt />  Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;