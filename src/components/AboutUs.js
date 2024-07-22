import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/AboutUs.css';
import Employees from './Employees';
import yourImage from '../assets/images/splash.jpg'; // Replace with your actual image path

const AboutUs = () => {
  const { t } = useTranslation();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('https://guarded-chamber-55183.herokuapp.com/employees')
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  return (
    <div id="aboutus">
      <div className="main-container">
        <h1 className="aboutus-title">{t('ABOUT_US_TITLE')}</h1>
        <div className="content-container">
          <div className="image-container">
            <img src={yourImage} alt="Company" className="about-image" />
          </div>
          <div className="text-container">
            <h2>{t('COMPANY_NAME')}</h2>
            <p>{t('ABOUT_US_PARAGRAPH_1')}</p>
            <p>{t('ABOUT_US_PARAGRAPH_2')}</p>
            <p>{t('ABOUT_US_PARAGRAPH_3')}</p>
            <p>{t('ABOUT_US_PARAGRAPH_4')}</p>
            <button className="btn-aboutus" onClick={() => window.location.href='/contactus'}>{t('CONTACT_US_BUTTON')}</button>
          </div>
        </div>
        <div className="employees-section">
          <Employees />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
