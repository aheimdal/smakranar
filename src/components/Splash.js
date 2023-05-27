import React from 'react';
import mainImage from '../assets/images/main.jpg';
import { Button } from 'react-bootstrap';
import '../css/Splash.css'
import Slogan from './Slogan';

const Splash = () => {

  return (
    <>
    <div className="splash">
      <div className="hero-image" style={{backgroundImage: `url(${mainImage})`}}></div>
      <div className="hero-content">
        <h1 className="hero-title">Þegar stærðin skiptir öllu</h1>
        <p className="hero-subtitle">Traust fyrirtæki síðan 2003</p>
        <Button variant="secondary" size="lg" href="/aboutus">Um Okkur</Button>
        <Button variant="primary" size="lg" href="/contactus">Hafðu Samband</Button>
      </div>
    </div>
    <Slogan/>
    </>
  );
};

export default Splash;