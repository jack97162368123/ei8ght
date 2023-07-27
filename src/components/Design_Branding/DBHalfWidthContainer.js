import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './DBHalfWidthContainer.css';

gsap.registerPlugin(ScrollTrigger);

const DBHalfWidthContainer = ({ children, topRightText = "", imageSrc }) => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    const formattedText = topRightText.split('\n').join('<br />');

    useEffect(() => {
        gsap.to(imageRef.current, { 
            y: -200, // adjust this value as needed
            scrollTrigger: {
                trigger: imageRef.current,
                scrub: true,
                start: 'top bottom',
                end: 'bottom top'
            }
        });
    }, []);

    return (
        <div ref={containerRef} className="half-width-container-DB">
            <p className="top-right-paragraph-DB" dangerouslySetInnerHTML={{ __html: formattedText }}></p>
            <div className="content-paragraph-DB">
                {children}
            </div>
            <img ref={imageRef} src={imageSrc} className="parallax-image" alt="description" />
        </div>
    );
};

export default DBHalfWidthContainer;
