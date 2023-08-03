import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';

const Loading = ({ opacity }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Fetch the JSON data from the static folder
    fetch('/Main.json')
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error('Error loading animation data:', error));
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const loadingStyle = {
    backgroundColor: '#00C7FF',
    height: '100vh',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 2s cubic-bezier(0.25, 1, 0.5, 1)',
    opacity: opacity,
  };

  const animationContainerStyle = {
    height: '80%', // Reserve 80% of the container's height for the animation
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const titleStyle = {
    color: '#FFFFFF',
    fontSize: '4em',
    textAlign: 'center',
    marginTop: '20px',
    fontWeight: 'bold',
  };

  return (
    <div style={loadingStyle}>
      <div style={animationContainerStyle}>
        {animationData && <Lottie options={defaultOptions} height="30%" width="30%" />}
      </div>
      <div style={titleStyle}>READY?</div>
    </div>
  );
};

export default Loading;
