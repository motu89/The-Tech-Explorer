import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCode, FaMobile, FaPalette, FaShoppingCart, FaAmazon, FaRobot } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  // Services data with detailed descriptions
  const services = [
    {
      id: 1,
      title: 'Facebook Marketplace Autolisting Bot',
      description: 'Our advanced Facebook Marketplace Autolisting Bot automates the process of listing products on Facebook Marketplace. Save time and increase your sales with automated listings, inventory management, and price optimization. Perfect for businesses with large inventories or frequent product updates.',
      icon: <FaRobot className="service-icon" />,
      features: [
        'Automated product listing',
        'Inventory synchronization',
        'Price optimization',
        'Listing renewal',
        'Performance analytics',
        'Multi-account support'
      ]
    },
    {
      id: 2,
      title: 'Website Development',
      description: 'We create custom, responsive websites tailored to your business needs. From simple landing pages to complex e-commerce platforms, our development team ensures your website looks great and performs well on all devices. We focus on user experience, SEO optimization, and conversion-focused design.',
      icon: <FaCode className="service-icon" />,
      features: [
        'Responsive design',
        'SEO optimization',
        'Content management systems',
        'E-commerce functionality',
        'Custom web applications',
        'Website maintenance'
      ]
    },
    {
      id: 3,
      title: 'App Development',
      description: 'Our mobile app development services cover both iOS and Android platforms. We build native and cross-platform applications that provide seamless user experiences. Our apps are designed with the latest technologies and best practices to ensure performance, security, and scalability.',
      icon: <FaMobile className="service-icon" />,
      features: [
        'iOS and Android development',
        'Cross-platform solutions',
        'UI/UX design',
        'App testing and QA',
        'App store submission',
        'Ongoing maintenance and updates'
      ]
    },
    {
      id: 4,
      title: 'Graphic Designing',
      description: 'Our graphic design services help you create a strong visual identity for your brand. From logos and branding materials to marketing collateral and social media graphics, our designers create visually appealing designs that communicate your brand message effectively.',
      icon: <FaPalette className="service-icon" />,
      features: [
        'Logo design',
        'Brand identity',
        'Marketing materials',
        'Social media graphics',
        'Packaging design',
        'Print and digital media'
      ]
    },
    {
      id: 5,
      title: 'Facebook Marketplace Handling',
      description: 'We offer complete management of your Facebook Marketplace presence. Our team handles everything from creating compelling listings and responding to inquiries to negotiating with buyers and managing your inventory. Let us handle the day-to-day operations while you focus on growing your business.',
      icon: <FaShoppingCart className="service-icon" />,
      features: [
        'Listing creation and optimization',
        'Inquiry management',
        'Buyer communication',
        'Inventory tracking',
        'Sales analytics',
        'Competitor analysis'
      ]
    },
    {
      id: 6,
      title: 'Amazon & eBay Account Handling',
      description: 'Maximize your sales on Amazon and eBay with our comprehensive account management services. We optimize your product listings, manage inventory, handle customer service, and implement strategies to improve your seller ratings and increase visibility in search results.',
      icon: <FaAmazon className="service-icon" />,
      features: [
        'Account setup and optimization',
        'Product listing creation',
        'Inventory management',
        'Order processing',
        'Customer service',
        'Performance analytics'
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="page-header">
        <Container>
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">Explore our comprehensive range of tech services designed to help your business thrive in the digital world</p>
        </Container>
      </section>

      {/* Services Section */}
      <section className="section">
        <Container>
          <Row>
            {services.map(service => (
              <Col key={service.id} lg={6} className="mb-4">
                <Card className="service-detail-card">
                  <Card.Body>
                    <div className="service-header">
                      <div className="service-icon-container">
                        {service.icon}
                      </div>
                      <h3 className="service-title">{service.title}</h3>
                    </div>
                    <p className="service-description">{service.description}</p>
                    <h5 className="features-title">Key Features</h5>
                    <ul className="features-list">
                      {service.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 24/7 Availability Section */}
      <section className="availability-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2>All Services Available 24/7</h2>
              <p>Our team is available round the clock to assist you with any technical needs or queries. We understand that technology doesn't sleep, and neither do we when it comes to supporting your business.</p>
              <div className="availability-badge">24/7</div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact CTA Section */}
      <section className="section contact-cta">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2>Have Questions About Our Services?</h2>
              <p>Contact us today to learn more about how our services can benefit your business or to request a custom solution tailored to your specific needs.</p>
              <div className="contact-info">
                <p><strong>WhatsApp:</strong> +923197456840</p>
                <p><strong>Email:</strong> thetechexplorer89@gmail.com</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Services;