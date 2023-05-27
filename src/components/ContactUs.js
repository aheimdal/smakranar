import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../css/ContactUs.css'
import Footer from './Footer';

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState(null);

    const handleSubmit = async e => {
        e.preventDefault();

        // Basic form validation
        if (!name || !email || !message) {
            setResponseMessage("All fields are required");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('https://guarded-chamber-55183.herokuapp.com/email/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                setResponseMessage('Email sent successfully');
            }
        } catch (error) {
            setResponseMessage('Error sending email: ' + error.toString());
        }

        setLoading(false);
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="contact-form-container">
        <Form className="contact-form" onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} value={message} onChange={e => setMessage(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Submit'}
            </Button>
            {responseMessage && <p>{responseMessage}</p>}
        </Form>
        </div>
    );
};

export default ContactForm;
