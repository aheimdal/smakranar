import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Card, Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import '../css/Equipment.css';

const Equipment = () => {
    const { t, i18n } = useTranslation();
    const [equipment, setEquipment] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedEquipment, setSelectedEquipment] = useState(null);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const groupRefs = useRef({}); // To store references to each group

    useEffect(() => {
        axios.get('https://guarded-chamber-55183.herokuapp.com/equipments')
            .then(response => {
                setEquipment(response.data);
            })
            .catch(error => {
                console.error(`There was an error retrieving the data: ${error}`);
            });

        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleOpenModal = (item) => {
        setSelectedEquipment(item);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedEquipment(null);
        setShowModal(false);
    };

    const getDescription = (item) => {
        return i18n.language === 'en' ? item.description_en : item.description_is;
    };

    const getMake = (item) => {
        return i18n.language === 'en' ? item.make_en : item.make_is;
    };

    const groupedEquipment = equipment.reduce((acc, item) => {
        const make = getMake(item);
        if (!acc[make]) acc[make] = [];
        acc[make].push(item);
        return acc;
    }, {});

    const scrollToGroup = (make) => {
        const element = groupRefs.current[make];
        const offset = -80; // Adjust this value as needed
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset + offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleButtonClick = (e, callback) => {
        e.currentTarget.blur();
        callback();
    };

    return (
        <div id="equipment">
            <div className="equipment-section">
                <div className="equipment-title-container">
                    <h1 className="equipment-title">{t('EQUIPMENT_TITLE')}</h1>
                </div>
                <div className="make-buttons-container">
                    {Object.keys(groupedEquipment).map(make => (
                        <Button
                            key={make}
                            variant="secondary"
                            className="make-button"
                            onClick={(e) => handleButtonClick(e, () => scrollToGroup(make))}
                        >
                            {make}
                        </Button>
                    ))}
                </div>
                {Object.entries(groupedEquipment).map(([make, items]) => (
                    <div key={make} className="equipment-group-container" ref={el => groupRefs.current[make] = el}>
                        <h2 className="equipment-group-title">{make}</h2>
                        <div className="equipment-cards-container">
                            {items.map(item => (
                                <Card className="equipment-card" key={item._id}>
                                    <Card.Img
                                        variant="top"
                                        src={item.images[0]}
                                        className="equipment-card-img"
                                    />
                                    <div className="equipment-text-container">
                                        <div className="equipment-name-hover">{item.name}</div>
                                        <Card.Text>{getDescription(item)}</Card.Text>
                                    </div>
                                    <div className="equipment-button-container">
                                        <Button
                                            variant="primary"
                                            className="equipment-button"
                                            onClick={(e) => handleButtonClick(e, () => handleOpenModal(item))}
                                        >
                                            {t('VIEW_IMAGES')}
                                        </Button>
                                        <Button
                                            variant="primary"
                                            className="equipment-button"
                                            onClick={(e) => handleButtonClick(e, () => window.open(item.pdf, '_blank'))}
                                        >
                                            {t('VIEW_OVERVIEW')}
                                        </Button>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
                {selectedEquipment && (
                    <Modal show={showModal} onHide={handleCloseModal} dialogClassName="equipment-modal">
                        <Modal.Header className="equipment-modal-header" closeButton>
                            <Modal.Title>{selectedEquipment.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="equipment-modal-images">
                                {selectedEquipment.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`equipment ${selectedEquipment.name} image ${index + 1}`}
                                        className="equipment-modal-image"
                                    />
                                ))}
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleCloseModal}>{t('CLOSE')}</Button>
                        </Modal.Footer>
                    </Modal>
                )}
                <button
                    className={`back-to-top ${showBackToTop ? 'show' : ''}`}
                    onClick={(e) => handleButtonClick(e, scrollToTop)}
                >
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
            </div>
        </div>
    );
};

export default Equipment;
