import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import '../css/Equipment.css';

const Equipment = () => {
    const { t, i18n } = useTranslation();
    const [equipment, setEquipment] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedEquipment, setSelectedEquipment] = useState(null);

    useEffect(() => {
        axios.get('https://guarded-chamber-55183.herokuapp.com/equipments')
            .then(response => {
                setEquipment(response.data);
            })
            .catch(error => {
                console.error(`There was an error retrieving the data: ${error}`);
            });
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

    return (
        <div id="equipment">
            <div className="equipment-section">
                <div className="equipment-title-container">
                    <h1 className="equipment-title">{t('EQUIPMENT_TITLE')}</h1>
                </div>
                {Object.entries(groupedEquipment).map(([make, items]) => (
                    <div key={make} className="equipment-group-container">
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
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleOpenModal(item);
                                            }}
                                        >
                                            {t('VIEW_IMAGES')}
                                        </Button>
                                        <Button
                                            variant="primary"
                                            className="equipment-button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                window.open(item.pdf, '_blank');
                                            }}
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
            </div>
        </div>
    );
};

export default Equipment;
