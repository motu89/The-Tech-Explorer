import React, { useEffect, useRef } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const particlesContainerRef = useRef(null);
  
  useEffect(() => {
    // Create particles dynamically
    const createParticles = () => {
      const particlesContainer = particlesContainerRef.current;
      if (!particlesContainer) return;
      
      // Clear existing particles
      particlesContainer.innerHTML = '';
      
      // Calculate number of particles based on screen size
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Adjust particle count based on screen size
      let particleCount;
      if (width <= 768) {
        particleCount = 25; // Mobile
      } else if (width <= 1200) {
        particleCount = 40; // Tablet/Small laptop
      } else {
        particleCount = 60; // Desktop
      }
      
      // Create tech-themed particles (circles, squares, triangles)
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random size (smaller on mobile)
        const size = width <= 768 ? 
          Math.random() * 8 + 4 : 
          Math.random() * 15 + 6;
        
        // Random animation duration and delay
        const duration = Math.random() * 20 + 15;
        const delay = Math.random() * 5;
        
        // Random opacity
        const opacity = Math.random() * 0.7 + 0.3;
        
        // Apply styles
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.opacity = opacity;
        
        // Add shape variation (every 3rd particle is a square, every 5th is a triangle)
        if (i % 5 === 0) {
          particle.style.borderRadius = '0'; // Square
          particle.style.transform = `rotate(${Math.random() * 45}deg)`;
          particle.style.width = `${size * 1.2}px`;
          particle.style.height = `${size * 1.2}px`;
        } else if (i % 7 === 0) {
          // Create a triangle using clip-path
          particle.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
          particle.style.borderRadius = '0';
          particle.style.width = `${size * 1.5}px`;
          particle.style.height = `${size * 1.5}px`;
        }
        
        // Add particle to container
        particlesContainer.appendChild(particle);
      }
    };
    
    // Initial creation
    createParticles();
    
    // Recreate on resize
    window.addEventListener('resize', createParticles);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', createParticles);
    };
  }, []);
  
  return (
    <div className="animated-background">
      <div className="network-grid"></div>
      <div className="particles-container" ref={particlesContainerRef}></div>
    </div>
  );
};

export default AnimatedBackground;