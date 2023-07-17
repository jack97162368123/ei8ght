import React, { useEffect, useRef } from 'react';
import '../styles/VerticalScrollCarousel.css';

const VerticalScrollCarousel = ({ words }) => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
      const wrapper = wrapperRef.current;
      

    // Calculate the height of each word element
    const wordHeight = wrapper.children[0].offsetHeight;

    // Set the initial transform value
    let translateY = 0;

    const animateCarousel = () => {
      translateY -= wordHeight;

      // Add a transition effect to create a smooth scrolling motion
      wrapper.style.transition = 'transform 0.5s ease-out';
      wrapper.style.transform = `translateY(${translateY}px)`;

      // Reset the position once the last word has been shown
      if (translateY <= -wordHeight * (words.length - 1)) {
        translateY = 0;
        wrapper.style.transition = 'none';
        wrapper.style.transform = `translateY(${translateY}px)`;
      }
    };

    const intervalId = setInterval(animateCarousel, 2000);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, [words]);

  return (
    <div className="vertical-scroll-carousel" ref={containerRef}>
      <div className="vertical-scroll-carousel-wrapper" ref={wrapperRef}>
        {words.map((word, index) => (
          <div className="vertical-scroll-carousel-word" key={index}>
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalScrollCarousel;
