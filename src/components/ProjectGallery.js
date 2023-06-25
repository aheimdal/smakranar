import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Modal, Button } from 'react-bootstrap';
import '../css/ProjectGallery.css'

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
            <div className="project-gallery-container">
            <div className="project-title-container">    {/* This is the new block */}
                    <h1 className="project-title">Verkefni</h1>
                </div>
            {projects.map(project => (
                <Card className="project-card" onClick={() => handleOpenModal(project)}>
                    <Card.Img variant="top" src={project.images[0]} className="d-inline-block align-top" />
                    <Card.Body>
                        <Card.Title>{project.name}</Card.Title>
                    </Card.Body>
                </Card>
            ))}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedProject ? selectedProject.name : ''}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-text">
                        <div className="modal-text-header-container">
                            <h1 className="modal-text-header">Staðsetning</h1>
                            <div className='modal-text-red-line'></div>
                        </div>
                        <p>{selectedProject ? selectedProject.location : ''}</p>
                        <div className="modal-text-header-container">
                            <h1 className="modal-text-header">Lýsing</h1>
                            <div className='modal-text-red-line'></div>
                        </div>
                        <p>{selectedProject ? selectedProject.description : ''}</p>
                    </div>
                    <div className="modal-images">
                        {selectedProject && selectedProject.images.map((image, index) =>
                            <img key={index} src={image} alt={`project ${selectedProject.name} image ${index + 1}`} />
                        )}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
        </div>
    );
};

export default ProjectGallery;