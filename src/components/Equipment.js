import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Modal, Button } from 'react-bootstrap';
import '../css/Equipment.css'

const Equipment = () => {
    const [equipment, setEquipment] = useState([]);

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
                <h2 className='equipment-title'>Vehicles and Equipment</h2>
                <div className='equipment-cards-container'>
                    {equipment.map(item => (
                        <Card className="equipment-card" style={{ width: '18rem' }} onClick={() => handleOpenModal(item)}>
                            <Card.Img variant="top" src={item.images[0]} width="auto" height="300" className="d-inline-block align-top equipment-card-img-top" />
                            <Card.Body className="equipment-card-body">
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                    <Modal show={showModal} onHide={handleCloseModal}>
                        <Modal.Header closeButton className="equipment-modal-header">
                            <Modal.Title>{selectedEquipment ? selectedEquipment.name : ''}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="equipment-modal-text">
                                <p>{selectedEquipment ? selectedEquipment.description : ''}</p>
                            </div>
                            <div className="equipment-modal-images">
                                {selectedEquipment && selectedEquipment.images.map((image, index) =>
                                    <img key={index} src={image} alt={`equipment ${selectedEquipment.name} image ${index + 1}`} className="equipment-modal-images img" />
                                )}
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );    
};

export default Equipment;