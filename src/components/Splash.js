import React from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import '../css/Splash.css';
import Slideshow from './Slideshow';
import Slogan from './Slogan';

const Splash = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="splash">
        <Slideshow />
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
