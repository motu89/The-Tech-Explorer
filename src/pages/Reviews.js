import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import './Reviews.css';

const Reviews = () => {
  // Reviews data with fake reviews for each service
  const reviews = [
    // Facebook Marketplace Autolisting Bot Reviews
    {
      id: 1,
      name: 'James Wilson',
      location: 'London, UK',
      service: 'Facebook Marketplace Autolisting Bot',
      rating: 5,
      review: 'The Facebook Marketplace Autolisting Bot has completely transformed how I manage my online business. I used to spend hours manually listing products, but now it\'s all automated. The time saved has allowed me to focus on expanding my product range. Highly recommended!'
    },
    {
      id: 2,
      name: 'Emily Thompson',
      location: 'Manchester, UK',
      service: 'Facebook Marketplace Autolisting Bot',
      rating: 5,
      review: 'I was skeptical at first, but this bot has exceeded all my expectations. My listings are now consistently updated, and I\'ve seen a 40% increase in inquiries since using this service. The Tech Explorer team provided excellent support throughout the setup process.'
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      location: 'New York, USA',
      service: 'Facebook Marketplace Autolisting Bot',
      rating: 4,
      review: 'Great tool for anyone selling multiple products on Facebook Marketplace. The automation saves me at least 15 hours per week. The only reason I\'m not giving 5 stars is that I had a few minor issues during setup, but their support team resolved them quickly.'
    },
    {
      id: 4,
      name: 'Asad Mahmood',
      location: 'Karachi, Pakistan',
      service: 'Facebook Marketplace Autolisting Bot',
      rating: 5,
      review: 'As someone who manages multiple marketplace accounts, this bot has been a game-changer. The ability to schedule listings and track performance has helped me optimize my selling strategy. The Tech Explorer team was very helpful in customizing the bot to my specific needs.'
    },
    
    // Website Development Reviews
    {
      id: 5,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      service: 'Website Development',
      rating: 5,
      review: 'The Tech Explorer team built an amazing website for my business. Professional, responsive, and creative! They took the time to understand my business needs and delivered a website that perfectly represents my brand. The site is fast, mobile-friendly, and has helped increase my online presence significantly.'
    },
    {
      id: 6,
      name: 'Robert Williams',
      location: 'Los Angeles, USA',
      service: 'Website Development',
      rating: 5,
      review: 'I needed an e-commerce website with specific functionality, and The Tech Explorer delivered beyond my expectations. The site is not only beautiful but also very user-friendly. My customers love the smooth shopping experience, and I\'ve seen a 50% increase in online sales since launch.'
    },
    {
      id: 7,
      name: 'Oliver Bennett',
      location: 'Edinburgh, UK',
      service: 'Website Development',
      rating: 4,
      review: 'Very impressed with the website they created for my consulting business. Clean design, fast loading times, and excellent SEO implementation. They were slightly over the initial timeline, but the quality of work made up for it.'
    },
    {
      id: 8,
      name: 'Fatima Ali',
      location: 'Lahore, Pakistan',
      service: 'Website Development',
      rating: 5,
      review: 'The Tech Explorer developed a bilingual website for my business that works flawlessly. They were patient with my revisions and ensured everything was perfect before launch. The website has significantly improved my business credibility and client acquisition.'
    },
    
    // App Development Reviews
    {
      id: 9,
      name: 'David Brown',
      location: 'Chicago, USA',
      service: 'App Development',
      rating: 5,
      review: 'The Tech Explorer developed a custom app for my fitness business that has revolutionized how I interact with clients. The app is intuitive, feature-rich, and performs flawlessly on both iOS and Android. Their development process was transparent, and they kept me updated throughout.'
    },
    {
      id: 10,
      name: 'Ahmed Khan',
      location: 'Islamabad, Pakistan',
      service: 'App Development',
      rating: 5,
      review: 'Their app development service is top-notch. They delivered exactly what I needed and on time. The app they created for my food delivery business has received excellent feedback from users. The Tech Explorer team was responsive to all my queries and implemented changes quickly.'
    },
    {
      id: 11,
      name: 'Charlotte Davies',
      location: 'Bristol, UK',
      service: 'App Development',
      rating: 4,
      review: 'I commissioned an educational app for my tutoring business, and I\'m very pleased with the result. The app is engaging, user-friendly, and has all the features I requested. There were some minor delays in the development process, but the end product was worth the wait.'
    },
    {
      id: 12,
      name: 'Jessica Martinez',
      location: 'Miami, USA',
      service: 'App Development',
      rating: 5,
      review: 'The Tech Explorer team developed a real estate app for my agency that has transformed our business. The app is beautiful, fast, and has all the advanced features we needed. Our clients love using it, and it has given us an edge over competitors.'
    },
    
    // Graphic Designing Reviews
    {
      id: 13,
      name: 'Thomas Wilson',
      location: 'London, UK',
      service: 'Graphic Designing',
      rating: 5,
      review: 'The branding package I received from The Tech Explorer was exceptional. From logo design to marketing materials, everything was cohesive and perfectly captured my brand\'s essence. Their designers are truly talented and took the time to understand my vision.'
    },
    {
      id: 14,
      name: 'Zainab Malik',
      location: 'Islamabad, Pakistan',
      service: 'Graphic Designing',
      rating: 5,
      review: 'I needed social media graphics for my fashion brand, and The Tech Explorer delivered stunning designs that have significantly increased engagement on my posts. Their designers are creative, professional, and quick to implement feedback.'
    },
    {
      id: 15,
      name: 'Daniel Smith',
      location: 'Toronto, Canada',
      service: 'Graphic Designing',
      rating: 4,
      review: 'The Tech Explorer designed packaging for my product line that stands out on shelves. The designs are eye-catching and communicate our brand values effectively. The only reason for 4 stars is that I would have liked more initial concepts to choose from.'
    },
    {
      id: 16,
      name: 'Sophia Johnson',
      location: 'Sydney, Australia',
      service: 'Graphic Designing',
      rating: 5,
      review: 'Exceptional graphic design service! They created a complete visual identity for my startup that has received countless compliments. Their attention to detail and understanding of current design trends is impressive.'
    },
    
    // Facebook Marketplace Handling Reviews
    {
      id: 17,
      name: 'William Taylor',
      location: 'Birmingham, UK',
      service: 'Facebook Marketplace Handling',
      rating: 5,
      review: 'Since handing over my Facebook Marketplace operations to The Tech Explorer, my sales have increased by 70%. Their team creates compelling listings, responds promptly to inquiries, and negotiates effectively with buyers. It\'s like having a dedicated sales team at a fraction of the cost.'
    },
    {
      id: 18,
      name: 'Hassan Ahmed',
      location: 'Lahore, Pakistan',
      service: 'Facebook Marketplace Handling',
      rating: 5,
      review: 'The Tech Explorer has been managing my furniture business on Facebook Marketplace for six months, and the results have been outstanding. They handle everything professionally, from photography to customer inquiries, allowing me to focus on production.'
    },
    {
      id: 19,
      name: 'Emma Wilson',
      location: 'Glasgow, UK',
      service: 'Facebook Marketplace Handling',
      rating: 4,
      review: 'Their marketplace management service has been a great help for my vintage clothing business. They\'ve increased my visibility and sales on the platform. Communication is sometimes delayed, but overall, I\'m satisfied with the service.'
    },
    {
      id: 20,
      name: 'John Anderson',
      location: 'Dallas, USA',
      service: 'Facebook Marketplace Handling',
      rating: 5,
      review: 'The Tech Explorer team has transformed my Facebook Marketplace presence. Their strategic approach to listing and their excellent customer service skills have resulted in faster sales and better prices for my products. Highly recommended!'
    },
    
    // Amazon & eBay Account Handling Reviews
    {
      id: 21,
      name: 'Richard Cooper',
      location: 'Manchester, UK',
      service: 'Amazon & eBay Account Handling',
      rating: 5,
      review: 'The Tech Explorer has been managing my Amazon and eBay accounts for over a year, and I couldn\'t be happier. They\'ve optimized my listings, improved my seller ratings, and significantly increased my sales. Their knowledge of marketplace algorithms is impressive.'
    },
    {
      id: 22,
      name: 'Aisha Khan',
      location: 'Karachi, Pakistan',
      service: 'Amazon & eBay Account Handling',
      rating: 5,
      review: 'I was struggling to manage my eBay store effectively until I hired The Tech Explorer. They revamped my listings, implemented competitive pricing strategies, and improved my customer service processes. My sales have doubled in just three months!'
    },
    {
      id: 23,
      name: 'Patricia Miller',
      location: 'Boston, USA',
      service: 'Amazon & eBay Account Handling',
      rating: 4,
      review: 'The Tech Explorer team has done a great job managing my Amazon account. They\'ve increased my product visibility and helped me maintain a high seller rating. I would give 5 stars if their reporting was more detailed, but the results speak for themselves.'
    },
    {
      id: 24,
      name: 'George Wilson',
      location: 'Liverpool, UK',
      service: 'Amazon & eBay Account Handling',
      rating: 5,
      review: 'After struggling with Amazon\'s complex policies and procedures, I decided to outsource my account management to The Tech Explorer. It was one of the best business decisions I\'ve made. They\'ve navigated all the complexities and grown my sales consistently.'
    }
  ];

  // Group reviews by service
  const reviewsByService = {};
  reviews.forEach(review => {
    if (!reviewsByService[review.service]) {
      reviewsByService[review.service] = [];
    }
    reviewsByService[review.service].push(review);
  });

  // Render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={i} className="star-icon" />);
    }
    return stars;
  };

  return (
    <div className="reviews-page">
      {/* Page Header */}
      <section className="page-header">
        <Container>
          <h1 className="page-title">Client Reviews</h1>
          <p className="page-subtitle">See what our clients have to say about our services</p>
        </Container>
      </section>

      {/* Reviews Section */}
      <section className="section">
        <Container>
          {Object.keys(reviewsByService).map(service => (
            <div key={service} className="service-reviews-section">
              <h2 className="service-title">{service}</h2>
              <Row>
                {reviewsByService[service].map(review => (
                  <Col key={review.id} lg={6} className="mb-4">
                    <Card className="review-card">
                      <Card.Body>
                        <div className="quote-icon">
                          <FaQuoteLeft />
                        </div>
                        <div className="rating mb-3">
                          {renderStars(review.rating)}
                        </div>
                        <Card.Text className="review-text">
                          {review.review}
                        </Card.Text>
                        <div className="reviewer-info">
                          <h5 className="reviewer-name">{review.name}</h5>
                          <p className="reviewer-location">{review.location}</p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2>Ready to Experience Our Services?</h2>
              <p>Join our satisfied clients and let us help you achieve your business goals with our tech solutions.</p>
              <div className="contact-info mt-4">
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

export default Reviews;