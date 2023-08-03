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
    animationData: animationData, // Use the fetched data
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
    flexDirection: 'column', // Change to column direction
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 2s cubic-bezier(0.25, 1, 0.5, 1)', // Custom cubic-bezier curve
    opacity: opacity, // Transition from 1 to 0
  };

  const titleStyle = {
    color: '#FFFFFF', // You can customize the color
    fontSize: '4em', // You can customize the font size
    textAlign: 'center',
    marginTop: '20px', // Spacing between the animation and the title
    fontWeight: 'bold',
  };

  return (
    <div style={loadingStyle}>
      {animationData && <Lottie options={defaultOptions} height="30%" width="30%" />}
      <div style={titleStyle}>READY?</div>
    </div>
  );
};

export default Loading;
