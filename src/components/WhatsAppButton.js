import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/923197456840" 
      className="whatsapp-button" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
      <span className="tooltip">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;