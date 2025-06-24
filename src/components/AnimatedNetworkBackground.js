import React, { useEffect, useRef } from 'react';
import './AnimatedNetworkBackground.css';

const AnimatedNetworkBackground = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Initialize canvas size
    setCanvasDimensions();
    
    // Handle window resize
    window.addEventListener('resize', setCanvasDimensions);
    
    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 2; // Size between 2-4
        this.speedX = (Math.random() - 0.5) * 0.5; // Slow horizontal movement
        this.speedY = (Math.random() - 0.5) * 0.5; // Slow vertical movement
        this.color = '#00c8ff'; // Bright blue color
        this.connections = [];
      }
      
      update() {
        // Move the particle
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      
      draw() {
        // Draw the particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Add glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
      }
    }
    
    // Create particles
    const particleCount = Math.min(Math.floor(window.innerWidth / 20), 50); // Responsive count, max 50
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Find connections between particles
    const findConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        particles[i].connections = [];
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Connect if within range
          const connectionDistance = canvas.width / 7;
          if (distance < connectionDistance) {
            particles[i].connections.push({
              particle: particles[j],
              distance: distance
            });
          }
        }
      }
    };
    
    // Draw connections between particles
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = 0; j < particles[i].connections.length; j++) {
          const connection = particles[i].connections[j];
          const opacity = 1 - (connection.distance / (canvas.width / 7));
          
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(connection.particle.x, connection.particle.y);
          ctx.strokeStyle = `rgba(0, 200, 255, ${opacity * 0.6})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Reset shadow properties
      ctx.shadowBlur = 0;
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      
      // Find and draw connections
      findConnections();
      drawConnections();
      
      // Draw particles on top of connections
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
      }
      
      // Continue animation loop
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div className="animated-network-background">
      <canvas ref={canvasRef} className="network-canvas"></canvas>
      <div className="overlay"></div>
    </div>
  );
};

export default AnimatedNetworkBackground;