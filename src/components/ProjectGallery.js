import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Modal, Button } from 'react-bootstrap';
import '../css/ProjectGallery.css';

const ProjectGallery = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('https://guarded-chamber-55183.herokuapp.com/projects')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error(`There was an error retrieving the data: ${error}`);
            });
    }, []);

    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
        setShowModal(false);
    };

    return (
        <div id="projectGallery">
            <div className="project-title-container">
                <h1 className="project-title">Verkefni</h1>
            </div>
            <div className="project-gallery-grid">
                {projects.map((project) => (
                    <Card key={project.id} className="project-card" onClick={() => handleOpenModal(project)}>
                        <div className="card-image-container">
                            <Card.Img variant="top" src={project.images[0]} className="project-card-img" />
                            <Card.Body className="project-card-body">
                                <Card.Title className="project-card-title">{project.name}</Card.Title>
                            </Card.Body>
                        </div>
                    </Card>
                ))}
            </div>
            {selectedProject && (
                <Modal show={showModal} onHide={handleCloseModal} dialogClassName="custom-modal">
                    <Modal.Header>
                        <Modal.Title>{selectedProject.name}</Modal.Title>
                        <Button type="button" className="custom-close" onClick={handleCloseModal}aria-label="Close">X</Button>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal-text-container">
                            <div className="modal-text">
                                <h2>Staðsetning</h2>
                                <p>{selectedProject.location}</p>
                                <h2>Lýsing</h2>
                                <p>{selectedProject.description}</p>
                            </div>
                        </div>
                        <div className="modal-images-container">
                            {selectedProject.images.map((image, index) => (
                                <img key={index} src={image} alt={`project ${selectedProject.name} image ${index + 1}`} className="modal-image"/>
                            ))}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleCloseModal}>Loka</Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
};

export default ProjectGallery;
