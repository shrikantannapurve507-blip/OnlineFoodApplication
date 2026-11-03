
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        alert('Your message has been submitted successfully!');

        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="contact-page">

            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>We would love to hear from you. Get in touch with us!</p>
            </div>

            <div className="contact-container">

                {/* Contact Information */}
                <div className="contact-info">
                    <h2>Get In Touch</h2>
                    <p>
                        Have questions about your order or our services?
                        Our team is here to help.
                    </p>

                    <div className="contact-info-item">
                        <span>📍</span>
                        <div>
                            <h4>Our Location</h4>
                            <p>Pune, Maharashtra, India</p>
                        </div>
                    </div>

                    <div className="contact-info-item">
                        <span>📧</span>
                        <div>
                            <h4>Email Us</h4>
                            <p>support@foodie.com</p>
                        </div>
                    </div>

                    <div className="contact-info-item">
                        <span>📞</span>
                        <div>
                            <h4>Call Us</h4>
                            <p>+91 98765 43210</p>
                        </div>
                    </div>

                    <div className="contact-info-item">
                        <span>🕒</span>
                        <div>
                            <h4>Working Hours</h4>
                            <p>Monday - Sunday: 9 AM - 10 PM</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form">
                    <h2>Send Us a Message</h2>

                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />

                        <textarea
                            name="message"
                            placeholder="Write your message..."
                            rows="6"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit">
                            Send Message
                        </button>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;
