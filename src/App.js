import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AnimatedNetworkBackground from './components/AnimatedNetworkBackground';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Reviews from './pages/Reviews';

function App() {
  return (
    <Router>
      <div className="App">
        <AnimatedNetworkBackground />
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
