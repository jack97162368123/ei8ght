import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/VerticalScrollCarousel.css';

gsap.registerPlugin(ScrollTrigger);

const VerticalScrollCarousel = ({ words }) => {
  const containerRef = useRef(null);
  const elementsRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useEffect(() => {
    const timelines = words.map((_, i) => {
      const el = elementsRef.current[i];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top+=" + (window.innerHeight * i), // Each word start time is staggered
          end: "+=" + window.innerHeight, // Adjust to control the end of scroll
          scrub: true,
          pin: true, // Pin the container during scroll
          pinSpacing: false, // Disable pin spacing
        },
      });

      tl.fromTo(el, 
        { y: 0, rotationX: 0, opacity: 0 },
        { y: "-50%", rotationX: 360, opacity: 1, duration: 1 }) // Increase to control vertical distance and rotation
        .to(el, { opacity: 0, duration: 1 }); // Adjust to control how long it takes to fade out

      return tl;
    });

    return () => {
      timelines.forEach(tl => tl.kill());
      ScrollTrigger.getAll().forEach((st) => st.kill());
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
