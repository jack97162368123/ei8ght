// FullWidthVideo.js
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './../Philosphy-File/FullWidthVideo.css';

gsap.registerPlugin(ScrollTrigger);

const FullWidthVideo = ({ videoSrc }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (window.innerWidth > 768) {
            gsap.from(videoRef.current, {
                x: 200,
                autoAlpha: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: videoRef.current,
                    start: "top bottom",
                    end: "bottom center",
                    scrub: true,
                    once: true, // add this line
                    toggleActions: "play none none none" // add this line
                },
            });
        }
    }, []);

    return (
        <div className="video-container" ref={videoRef}>
            <video autoPlay loop muted className="background-video">
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h1 className="video-title">Philosophy</h1>
            <p className="video-quote">"The unexamined life is not worth living" - Socrates</p>
        </div>
    );
};

export default FullWidthVideo;
