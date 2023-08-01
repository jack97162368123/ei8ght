import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HalfWidthContainer.css';

gsap.registerPlugin(ScrollTrigger);

const HalfWidthContainer = ({ children, topRightText = "" }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.from(containerRef.current, { 
            y: 300, // start 100px below the final position
            opacity: 0, 
            duration: 1,
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top bottom', // when the top of the element hits the bottom of the viewport
                end: 'top center', // when the bottom of the element hits the top of the viewport
                scrub: true
            }
        });
    }, []);

    const formattedText = topRightText.split('\n').join('<br />');

    return (
        <div ref={containerRef} className="half-width-container">
            <p className="top-right-paragraph" dangerouslySetInnerHTML={{ __html: formattedText }}></p>
            <div className="content-paragraph">
                {children}
            </div>
        </div>
    );
};

export default HalfWidthContainer;
