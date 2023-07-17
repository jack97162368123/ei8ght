import React, { useState, useEffect } from 'react';
import '../styles/WelcomeEight.css';

const WelcomeComponent = () => {
  const [animateUp, setAnimateUp] = useState(false);

  useEffect(() => {
    setAnimateUp(false);
  }, []);

  return (
    <div className="parent-container">
      <div className={`welcome-component-container ${animateUp ? 'animate-up' : ''}`}>
        <div className="welcome-bar">
          <div className="welcome-text">
            <p>Welcome to</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeComponent;
