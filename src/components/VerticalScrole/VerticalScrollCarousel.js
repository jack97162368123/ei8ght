import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './VerticalScrollCarousel.css';

gsap.registerPlugin(ScrollTrigger);

const words = ['Learn', 'Share', 'Connect'];

const VerticalScrollCarousel = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = Array.from(sectionRef.current.children);
    elements.forEach((element, index) => {
      gsap.fromTo(
        element,
        {
          autoAlpha: 0,
          y: 50,
        },
        {
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: element,
            start: `top center+=${index * 100}`,
            end: 'bottom bottom',
            pin: true,
            scrub: 1,
            onLeaveBack: () => {
              gsap.to(element, { autoAlpha: 0, y: 50 });
            },
          },
        }
      );
    });
  }, []);

  return (
    <div className="SectionVerticalScrollCarousel" ref={sectionRef}>
      {words.map((word, index) => (
        <h1 key={index}>{word}</h1>
      ))}
    </div>
  );
};

export default VerticalScrollCarousel;
