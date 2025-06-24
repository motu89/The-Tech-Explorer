import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  
  const closeNavbar = () => setExpanded(false);
  
  const handleNavigation = (path) => {
    closeNavbar();
    navigate(path);
    window.scrollTo(0, 0);
  };
  
  return (
    <header className="header">
      <Navbar bg="dark" expand="lg" fixed="top" className="py-3 shadow-sm" expanded={expanded}>
        <Container>
          <Navbar.Brand as={Link} to="/" className="site-title" onClick={closeNavbar}>
            The Tech Explorer
          </Navbar.Brand>
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            className="navbar-toggler-purple"
            onClick={() => setExpanded(expanded ? false : true)} 
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center-mobile">
              <Nav.Link as="button" className="nav-link" onClick={() => handleNavigation('/')}>Home</Nav.Link>
              <Nav.Link as="button" className="nav-link" onClick={() => handleNavigation('/services')}>Services</Nav.Link>
              <Nav.Link as="button" className="nav-link" onClick={() => handleNavigation('/reviews')}>Reviews</Nav.Link>
              <Nav.Link as="a" href="#footer" className="nav-link" onClick={closeNavbar}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Empty div to push content below fixed navbar */}
      <div className="navbar-spacer"></div>
    </header>
  );
};

export default Header;