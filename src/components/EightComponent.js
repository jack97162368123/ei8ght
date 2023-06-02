import React, { useState, useEffect } from 'react';
import '../styles/WelcomeEight.css';

const EightComponent = () => {
  const [animateUp, setAnimateUp] = useState(false);

  useEffect(() => {
    setAnimateUp(true);
  }, []);

  return (
    <div className={`welcome-component-container ${animateUp ? 'animate-up' : ''}`}>
      <div className="eight-text">
        <p>EI8HT</p>
      </div>
    </div>
  );
};

export default EightComponent;
