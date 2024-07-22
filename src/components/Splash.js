import React from 'react';
import mainImage from '../assets/images/main.jpg';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import '../css/Splash.css';
import Slogan from './Slogan';

const Splash = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="splash">
        <div className="hero-image" style={{ backgroundImage: `url(${mainImage})` }}></div>
        <div className="hero-content">
          <h1 className="hero-title">{t('HERO_TITLE')}</h1>
          <p className="hero-subtitle">{t('HERO_SUBTITLE')}</p>
          <Button variant="primary" size="lg" href="/contactus">{t('CONTACT_US')}</Button>
        </div>
      </div>
      <Slogan />
    </>
  );
};

export default Splash;
