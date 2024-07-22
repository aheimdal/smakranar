import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaFacebookF, FaGavel, FaHome, FaPhone, FaShieldAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import '../css/Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className='info-container'>
        <div className='mobile-view-container'>
          <div className='web-info'>
            <h1>{t('WEB')}</h1>
            <Link className="web-info-link" to="/aboutus">{t('ABOUT_US')}</Link>
            <Link className="web-info-link" to="/equipment">{t('EQUIPMENT')}</Link>
            <Link className="web-info-link" to="/projects">{t('PROJECTS')}</Link>
            <Link className="web-info-link" to="/contactus">{t('CONTACT_US')}</Link>
          </div>
          <div className='description-container'>
            <h1>SMÁKRANAR</h1>
            <p className='desc-text'>{t('COMPANY_DESCRIPTION')}</p>
          </div>
        </div>
        <div className='address-container'>
          <h1>{t('CONTACT')}</h1>
          <div className='address-text'>
            <FaHome />
            <a href="https://www.google.com/maps/search/?api=1&query=Stórihjalli+15" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}> {t('ADDRESS')}</a>
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
          <p>{t('COPYRIGHT')}</p>
          <div className='footer-navigation'>
            <Link to="/terms"><FaGavel /> {t('TERMS_OF_SERVICE')}</Link>
            <Link to="/privacy"><FaShieldAlt /> {t('PRIVACY_POLICY')}</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
