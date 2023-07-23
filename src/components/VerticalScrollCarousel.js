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
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => "+=" + (containerRef.current.offsetHeight),
        scrub: true,
        pin: true, // Pin the container during scroll
        pinSpacing: false, // Disable pin spacing
      },
    });

    tl.to(elementsRef.current, {
      y: (i) => ((i - words.length / 2) * 500) % (window.innerHeight * 1), // Increase to control vertical distance
      rotationX: (i) => ((i - words.length / 2) * 360) % 360, // Adjust to control rotation
    });

    elementsRef.current.forEach((el, i) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 75%",
        end: "bottom 75%",
        onEnter: () => gsap.to(el, { opacity: 1, overwrite: "auto" }),
        onLeave: () => gsap.to(el, { opacity: 0, overwrite: "auto" }),
        onEnterBack: () => gsap.to(el, { opacity: 1, overwrite: "auto" }),
        onLeaveBack: () => gsap.to(el, { opacity: 0, overwrite: "auto" }),
      });
    });

    return () => {
      tl.kill();
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
          style={{ opacity: 0 }} // Initially all words are hidden
        >
          {word}
        </div>
      ))}
    </div>
  );
};

export default VerticalScrollCarousel;
