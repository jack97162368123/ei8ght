import React from 'react';
import '../styles/Bg.css';
import bgImage from '../images/Bg.svg';

const Bg = () => {
  const bgStyle = {
    backgroundImage: `url(${bgImage})`,
  };

  return (
    <div className="bg-container">
      <div className="bg" style={bgStyle}></div>
    </div>
  );
};

export default Bg;
