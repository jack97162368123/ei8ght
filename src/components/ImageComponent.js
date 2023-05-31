import React, { useRef, useEffect, useState } from 'react';
import '../styles/ImageComponent.css';

const ImageComponent = ({ src, alt }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const componentRef = useRef(null);
  const whiteBoxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(componentRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset || document.documentElement.scrollTop;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`image-component ${isVisible ? 'is-visible' : ''}`}
      ref={componentRef}
    >
      <div className="white-box" style={{ top: `${scrollPosition}px` }} ref={whiteBoxRef}></div>
      <div className="image-component-container">
        <div className="image-wrapper">
          <img src={src} alt={alt} className="square-image" />
        </div>
        <div className="image-component-text-container">
          <p className="image-component-text-bold">Your Inter Bold Text</p>
          <p className="image-component-text-light">Your Inter Light Text</p>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
