import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/VerticalScrollCarousel.css';

gsap.registerPlugin(ScrollTrigger);

const VerticalScrollCarousel = ({ words }) => {
  const containerRef = useRef(null);
  const elementsRef = useRef([]);
  elementsRef.current = [];

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%", // Adjust this value to make the word stay in the middle of the screen longer
        end: "bottom 50%", // Adjust this value to make the word stay in the middle of the screen longer
        scrub: true,
      },
    });

    tl.to(elementsRef.current, {
      y: (i) => ((i - words.length / 2) * 400) % (window.innerHeight * 1.5), // Increase vertical distance
      rotationX: (i) => ((i - words.length / 2) * 360) % 360, // Increase rotation
      opacity: (i) => i === Math.floor(words.length / 2) ? 1 : 0 // Adjust opacity to show only one word at a time
    });

    return () => {
      tl.kill();
    };
  }, [words]);

  return (
    <div className="carousel" ref={containerRef}>
      {words.map((word, index) => (
        <div
          className="carousel-element"
          key={index}
          ref={addToRefs}
        >
          {word}
        </div>
      ))}
    </div>
  );
};

export default VerticalScrollCarousel;
