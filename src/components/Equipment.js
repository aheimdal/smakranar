import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Modal, Button, CloseButton } from 'react-bootstrap';
import '../css/Equipment.css'

const Equipment = () => {
    const [equipment, setEquipment] = useState([]);

    const _ = require('lodash');
    const groupedEquipment = _.groupBy(equipment, 'make');

    useEffect(() => {
        axios.get('https://guarded-chamber-55183.herokuapp.com/equipments')
            .then(response => {
                setEquipment(response.data);
            })
            .catch(error => {
                console.error(`There was an error retrieving the data: ${error}`);
            });
    }, []);

    const [showModal, setShowModal] = useState(false);
    const [selectedEquipment, setSelectedEquipment] = useState(null);

    const handleOpenModal = (item) => {
        setSelectedEquipment(item);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedEquipment(null);
        setShowModal(false);
    };

    return (
        <div id="equipment">
            <div className='equipment-section'>
                <div className='equipment-title-container'>
                    <h1 className="equipment-title">Vehicles and Equipment</h1>
                </div>
                {Object.entries(groupedEquipment).map(([make, items]) => (
                    <div key={make} className="equipment-group-container">
                        <h2 className="equipment-group-title">{make}</h2>
                        <div className='equipment-cards-container'>
                            {items.map(item => (
                                <Card className="equipment-card" key={item._id}>
                                    <Card.Img
                                        variant="top"
                                        src={item.images[0]}
                                        className="equipment-card-img"
                                    />
                                    <div className="equipment-name-container">
                                        <div className="equipment-name-default">{item.name}</div>
                                    </div>
                                    <div className="equipment-text-container">
                                        <div className="equipment-name-hover">{item.name} ({item.year})</div>
                                        <Card.Text>{item.description}</Card.Text>
                                        <div className='equipment-button-container'>
                                            <Button
                                                variant="primary"
                                                className="equipment-button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleOpenModal(item);
                                                }}
                                            >
                                                Skoða myndir
                                            </Button>
                                            <Button
                                                variant="primary"
                                                className="equipment-button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    window.open(item.pdf, '_blank');
                                                }}
                                            >
                                                Skoða yfirlit Tækis
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
                <Modal className='equipment-modal' show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton className="equipment-modal-header">
                        <Modal.Title>{selectedEquipment ? selectedEquipment.name : ''}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="equipment-modal-images">
                            {selectedEquipment && selectedEquipment.images.map((image, index) =>
                                <img
                                    key={index}
                                    src={image}
                                    alt={`equipment ${selectedEquipment.name} image ${index + 1}`}
                                    className="equipment-modal-image"
                                />
                            )}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="custom-close-button" onClick={handleCloseModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default Equipment;