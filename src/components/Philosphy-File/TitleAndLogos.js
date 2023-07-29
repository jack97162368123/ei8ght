// TitleAndLogos.js
import React, { useEffect, useRef } from 'react';
import './TitleAndLogos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TitleAndLogos = ({ title, logos }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current && window.innerWidth > 768) {
            gsap.fromTo(
                containerRef.current,
                { autoAlpha: 0, x: -200 },
                {
                    duration: 1,
                    autoAlpha: 1,
                    x: 0,
                    ease: "power2.easeInOut",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom",
                        end: "bottom 85%",
                        scrub: true,
                    },
                }
            );
        }
    }, []);

    return (
        <div className="title-and-logos-container" ref={containerRef}>
            <div className="BigWord">{title}</div>
            <div className="logos">
                {logos.map((logo, index) => (
                    <img key={index} src={logo.src} alt={logo.alt} />
                ))}
            </div>
        </div>
    );
};

export default TitleAndLogos;
