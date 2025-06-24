import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCode, FaMobile, FaPalette, FaShoppingCart, FaAmazon } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  // Services data
  const services = [
    {
      id: 1,
      title: 'Facebook Marketplace Autolisting Bot',
      description: 'Automate your Facebook Marketplace listings with our advanced bot solution.',
      icon: <FaShoppingCart className="service-icon" />
    },
    {
      id: 2,
      title: 'Website Development',
      description: 'Custom website development tailored to your business needs and goals.',
      icon: <FaCode className="service-icon" />
    },
    {
      id: 3,
      title: 'App Development',
      description: 'Mobile app development for iOS and Android platforms with cutting-edge technology.',
      icon: <FaMobile className="service-icon" />
    },
    {
      id: 4,
      title: 'Graphic Designing',
      description: 'Professional graphic design services to enhance your brand identity.',
      icon: <FaPalette className="service-icon" />
    },
    {
      id: 5,
      title: 'Marketplace Handling',
      description: 'Complete management of your online marketplace presence and operations.',
      icon: <FaShoppingCart className="service-icon" />
    },
    {
      id: 6,
      title: 'Amazon & eBay Account Handling',
      description: 'Professional management of your Amazon and eBay seller accounts.',
      icon: <FaAmazon className="service-icon" />
    }
  ];

  // Featured reviews
  const featuredReviews = [
    {
      id: 1,
      name: 'James Wilson',
      location: 'London, UK',
      review: 'The Facebook Marketplace Autolisting Bot has completely transformed how I manage my online business. Highly recommended!',
      service: 'Facebook Marketplace Autolisting Bot'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      review: 'The Tech Explorer team built an amazing website for my business. Professional, responsive, and creative!',
      service: 'Website Development'
    },
    {
      id: 3,
      name: 'Ahmed Khan',
      location: 'Lahore, Pakistan',
      review: 'Their app development service is top-notch. They delivered exactly what I needed and on time.',
      service: 'App Development'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="hero-content">
              <h1 className="hero-title">Your Tech Solutions Partner</h1>
              <p className="hero-subtitle">
                We provide cutting-edge technology solutions to help your business grow in the digital world.
                From automation tools to custom websites and apps, we've got you covered.
              </p>
              <div className="hero-buttons">
                <Button as={Link} to="/services" variant="primary" size="lg" className="me-3">
                  Our Services
                </Button>
                <Button as={Link} to="/contact" variant="outline-primary" size="lg">
                  Contact Us
                </Button>
              </div>
            </Col>
            <Col lg={6} className="hero-image-container">
              <div className="hero-image">
                {/* Hero image is added via CSS background */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <Container>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">We offer a wide range of tech services to meet your business needs</p>
          
          <Row>
            {services.map(service => (
              <Col key={service.id} lg={4} md={6} className="mb-4">
                <Card className="service-card">
                  <Card.Body>
                    <div className="service-icon-wrapper">
                      {service.icon}
                    </div>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          
          <div className="text-center mt-4">
            <Button as={Link} to="/services" variant="primary">
              View All Services
            </Button>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="section why-us-section">
        <Container>
          <h2 className="section-title">Why Choose Us</h2>
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <div className="feature-box">
                <div className="feature-number">01</div>
                <h4>Expert Team</h4>
                <p>Our team consists of experienced professionals who are experts in their respective fields.</p>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="feature-box">
                <div className="feature-number">02</div>
                <h4>24/7 Support</h4>
                <p>We provide round-the-clock support to ensure your business operations run smoothly.</p>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="feature-box">
                <div className="feature-number">03</div>
                <h4>Custom Solutions</h4>
                <p>We create tailored solutions that address your specific business challenges and goals.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <Container>
          <h2 className="section-title">What Our Clients Say</h2>
          <Row>
            {featuredReviews.map(review => (
              <Col key={review.id} lg={4} md={6} className="mb-4">
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <p>"{review.review}"</p>
                  </div>
                  <div className="testimonial-info">
                    <h5>{review.name}</h5>
                    <p>{review.location}</p>
                    <small>{review.service}</small>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button as={Link} to="/reviews" variant="outline-primary">
              View All Reviews
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2>Ready to Transform Your Business?</h2>
              <p>Contact us today to discuss how we can help you achieve your business goals with our tech solutions.</p>
              <Button as={Link} to="/contact" variant="primary" size="lg" className="mt-3">
                Get in Touch
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;