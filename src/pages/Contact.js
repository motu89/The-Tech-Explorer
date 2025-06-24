import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <Container>
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">Get in touch with our team for any inquiries or to discuss your project</p>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="section">
        <Container>
          <Row>
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="contact-info-container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="mb-4">
                  Have questions about our services or need a custom solution? 
                  Contact us today and our team will be happy to assist you.
                </p>
                
                <div className="contact-info">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <FaPhone />
                    </div>
                    <div className="contact-text">
                      <h5>Phone</h5>
                      <p>+923197456840</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <FaEnvelope />
                    </div>
                    <div className="contact-text">
                      <h5>Email</h5>
                      <p>thetechexplorer89@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <FaWhatsapp />
                    </div>
                    <div className="contact-text">
                      <h5>WhatsApp</h5>
                      <p>+923197456840</p>
                      <a 
                        href="https://wa.me/923197456840" 
                        className="whatsapp-link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Chat with us on WhatsApp
                      </a>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="contact-text">
                      <h5>Working Hours</h5>
                      <p>Available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={6}>
              <div className="contact-form-container">
                <h2 className="section-title">Send Us a Message</h2>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your first name" required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your last name" required />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" required />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="tel" placeholder="Enter your phone number" />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Service Interested In</Form.Label>
                    <Form.Select>
                      <option>Select a service</option>
                      <option>Facebook Marketplace Autolisting Bot</option>
                      <option>Website Development</option>
                      <option>App Development</option>
                      <option>Graphic Designing</option>
                      <option>Facebook Marketplace Handling</option>
                      <option>Amazon & eBay Account Handling</option>
                      <option>Other</option>
                    </Form.Select>
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Enter your message" required />
                  </Form.Group>
                  
                  <Button variant="primary" type="submit" className="w-100">
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Social Media Section */}
      <section className="section social-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2>Connect With Us</h2>
              <p>Follow us on social media for updates, tips, and more</p>
              <div className="social-links">
                <a href="https://facebook.com/thetechexplorer" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                  <FaFacebookF />
                  <span>Facebook</span>
                </a>
                <a href="https://instagram.com/thetechexplorer" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                  <FaInstagram />
                  <span>Instagram</span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;