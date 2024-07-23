import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import '../css/ProjectGallery.css';

const ProjectGallery = () => {
    const { t, i18n } = useTranslation();
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

    const getName = (project) => {
        return i18n.language === 'en' ? project.name_en : project.name_is;
    };

    const getDescription = (project) => {
        return i18n.language === 'en' ? project.description_en : project.description_is;
    };

    return (
        <div id="projectGallery">
            <div className="project-title-container">
                <h1 className="project-title">{t('PROJECTS_TITLE')}</h1>
            </div>
            <div className="project-gallery-grid">
                {projects.map((project) => (
                    <Card key={project.id} className="project-card" onClick={() => handleOpenModal(project)}>
                        <div className="card-image-container">
                            <Card.Img variant="top" src={project.images[0]} className="project-card-img" />
                            <Card.Body className="project-card-body">
                                <Card.Title className="project-card-title">{getName(project)}</Card.Title>
                            </Card.Body>
                        </div>
                    </Card>
                ))}
            </div>
            {selectedProject && (
                <Modal show={showModal} onHide={handleCloseModal} dialogClassName="custom-modal">
                    <Modal.Header>
                        <Modal.Title>{getName(selectedProject)}</Modal.Title>
                        <Button type="button" className="custom-close" onClick={handleCloseModal} aria-label="Close">X</Button>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal-text-container">
                            <div className="modal-text">
                                <h2>{t('LOCATION')}</h2>
                                <p>{selectedProject.location}</p>
                                <h2>{t('DESCRIPTION')}</h2>
                                <p>{getDescription(selectedProject)}</p>
                            </div>
                        </div>
                        <div className="modal-images-container">
                            {selectedProject.images.map((image, index) => (
                                <img key={index} src={image} alt={`project ${getName(selectedProject)} image ${index + 1}`} className="modal-image"/>
                            ))}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleCloseModal}>{t('CLOSE')}</Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
};

export default ProjectGallery;
