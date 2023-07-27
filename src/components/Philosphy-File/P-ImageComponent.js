import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './P-ImageComponent.css';

gsap.registerPlugin(ScrollTrigger);

const PImageComponent = ({ src, alt }) => {
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.from(imageRef.current, { 
            y: 100, // start 100px below the final position
            opacity: 0, 
            duration: 1,
            scrollTrigger: {
                trigger: imageRef.current,
                start: 'top bottom', // when the top of the element hits the bottom of the viewport
                end: 'bottom bottom', // when the bottom of the element hits the top of the viewport
                scrub: true
            }
        });
    }, []);

    return (
        <img ref={imageRef} className="p-image" src={src} alt={alt} />
    );
};

export default PImageComponent;
