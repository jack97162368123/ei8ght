import React from 'react';
import '../styles/welcome.css';

const Welcome = ({ column = 'left' }) => (
  <div className={column === 'left' ? 'left-column' : 'right-column'}>
    <h1 className="welcome-text">Welcome to</h1>
    <h1 className="welcome-text">eight</h1>
  </div>
);

export default Welcome;
