import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();
  
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  
  return (
    <footer id="footer" className="footer">
      <Container>
        <Row className="py-5">
          <Col lg={4} md={6} className="mb-4 mb-md-0 text-lg-start text-center">
            <h5 className="footer-heading">The Tech Explorer</h5>
            <p className="mt-3">
              We provide top-notch tech services including website development, app development, 
              and automation solutions to help your business grow in the digital world.
            </p>
          </Col>
          
          <Col lg={2} md={6} className="mb-4 mb-md-0 text-lg-start text-center">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="list-unstyled mt-3">
              <li><button onClick={() => handleNavigation('/')} className="footer-link btn btn-link p-0">Home</button></li>
              <li><button onClick={() => handleNavigation('/services')} className="footer-link btn btn-link p-0">Services</button></li>
              <li><button onClick={() => handleNavigation('/reviews')} className="footer-link btn btn-link p-0">Reviews</button></li>
              <li><a href="#footer" className="footer-link">Contact</a></li>
            </ul>
          </Col>
          
          <Col lg={3} md={6} className="mb-4 mb-md-0 text-lg-start text-center">
            <h5 className="footer-heading">Services</h5>
            <ul className="list-unstyled mt-3">
              <li>Facebook Marketplace Autolisting Bot</li>
              <li>Website Development</li>
              <li>App Development</li>
              <li>Graphic Designing</li>
              <li>Marketplace Handling</li>
            </ul>
          </Col>
          
          <Col lg={3} md={6} className="text-lg-start text-center">
            <h5 className="footer-heading">Contact Us</h5>
            <ul className="list-unstyled contact-list mt-3">
              <li>
                <FaPhone className="contact-icon" />
                <span>+923197456840</span>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <span>thetechexplorer89@gmail.com</span>
              </li>
              <li>
                <FaWhatsapp className="contact-icon" />
                <a href="https://wa.me/923197456840" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
            </ul>
            
            <div className="social-links mt-3">
              <a href="https://facebook.com/thetechexplorer" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com/thetechexplorer" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>
        
        <hr className="footer-divider" />
        
        <Row className="py-3">
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} The Tech Explorer. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;