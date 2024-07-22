import React from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import { FaHome, FaPhone, FaEnvelope, FaFacebookF } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import '../css/ContactUs.css';
import glerSkalImage from '../assets/images/glerskal.jpg';

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <div className='contact-us-section'>
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={12}>
            <Card className="text-center card-container">
              <Card.Header as="h1" className="contact-header">{t('CONTACT_US_TITLE')}</Card.Header>
              <div className="d-flex flex-column flex-md-row align-items-center w-100">
                <div className="contact-text-container">
                  <Card.Text className="contact-text">
                    <FaHome className="contact-icon" />
                    <a href="https://www.google.com/maps/search/?api=1&query=Stórihjalli+15" target="_blank" rel="noopener noreferrer">{t('ADDRESS')}</a>
                  </Card.Text>
                  <Card.Text className="contact-text">
                    <FaPhone className="contact-icon" />
                    <a href="tel:6994241">{t('PHONE')}</a>
                  </Card.Text>
                  <Card.Text className="contact-text">
                    <FaEnvelope className="contact-icon" />
                    <a href="mailto:ese@smakranar.is">{t('EMAIL')}</a>
                  </Card.Text>
                  <Card.Text className="contact-text">
                    <FaFacebookF className="contact-icon" />
                    <a href="https://www.facebook.com/Smakranar" target="_blank" rel="noopener noreferrer">{t('FACEBOOK')}</a>
                  </Card.Text>
                </div>
                <div className="contact-image-container">
                  <Image src={glerSkalImage} alt="Company" className="contact-image" />
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactInfo;
