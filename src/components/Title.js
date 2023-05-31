// Title.js
import React from 'react';
import '../styles/Title.css'; // Import the CSS file

const Title = ({ text }) => (
  <div className="grid-item title">
    <h1>{text}</h1>
  </div>
);

export default Title;
