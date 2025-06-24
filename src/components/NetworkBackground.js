import React from 'react';
import './NetworkBackground.css';

const NetworkBackground = () => {
  return (
    <div className="network-background">
      <div className="network-grid">
        {/* Network nodes */}
        <div className="node" style={{ top: '20%', left: '15%' }}></div>
        <div className="node" style={{ top: '15%', left: '40%' }}></div>
        <div className="node" style={{ top: '25%', left: '65%' }}></div>
        <div className="node" style={{ top: '45%', left: '25%' }}></div>
        <div className="node" style={{ top: '40%', left: '55%' }}></div>
        <div className="node" style={{ top: '60%', left: '10%' }}></div>
        <div className="node" style={{ top: '70%', left: '35%' }}></div>
        <div className="node" style={{ top: '65%', left: '70%' }}></div>
        <div className="node" style={{ top: '85%', left: '50%' }}></div>
        <div className="node" style={{ top: '30%', left: '85%' }}></div>
        
        {/* Network lines are created using CSS */}
      </div>
    </div>
  );
};

export default NetworkBackground;