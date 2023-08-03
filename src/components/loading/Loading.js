import React from 'react';
import Lottie from 'react-lottie';
import animationData from './Main.json';

const Loading = ({ opacity }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const loadingStyle = {
    backgroundColor: '#00C7FF',
    height: '100vh',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 2s cubic-bezier(0.25, 1, 0.5, 1)', // Custom cubic-bezier curve
    opacity: opacity, // Transition from 1 to 0
  };

  return (
    <div style={loadingStyle}>
      <Lottie options={defaultOptions} height="30%" width="30%" />
    </div>
  );
};


export default Loading;
