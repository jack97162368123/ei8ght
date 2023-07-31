import React, { useState, useEffect } from 'react';
import '../styles/WelcomeEight.css';

const WelcomeEightComponent = ({ welcomeText, contentText }) => {
  const [animateUp, setAnimateUp] = useState(false);

  useEffect(() => {
    setAnimateUp(true);
  }, []);

  return (
    <div className={`parent-container`}>
      <div className={`welcome-component-container ${animateUp ? 'animate-up' : ''}`}>
        <div className="welcome-bar">
          <div className="welcome-text">
            <p>{welcomeText}</p>
          </div>
        </div>
        <div className="two-column-container">
          <div className="welcome-two">
          </div>
          <div className="eight-text">
            <p>{contentText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeEightComponent;
