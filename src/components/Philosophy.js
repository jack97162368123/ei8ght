import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { gsap } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import '../styles/philosophy.css';

let ScrollMagic;

if (typeof window !== 'undefined') {
  ScrollMagic = require('scrollmagic');
  ScrollMagicPluginGsap(ScrollMagic, gsap);
}

const Philosophy = ({ text, title, imageSrc }) => {
  const paragraphs = text.split('<br />').filter(line => line.trim() !== '');
  const refs = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const controller = new ScrollMagic.Controller();

    refs.current.forEach((ref, index) => {
      if (ref) {
        new ScrollMagic.Scene({
          triggerElement: ref,
          reverse: false,
        })
          .setTween(gsap.from(ref, { duration: 0.3, opacity: 0, ease: 'power1.in' }))
          .addTo(controller)
          .on('enter', () => {
            gsap.to(ref, { opacity: 1 });
          })
          .on('leave', () => {
            gsap.to(ref, { opacity: 0 });
          });
      }
    });

    return () => {
      controller.destroy();
    };
  }, [paragraphs.length]);

  return (
    <div className="grid-item right-column philosophy-area">
      <div className="bg-color">
        <h2 className="title">{title}</h2>
        {paragraphs.map((item, index) => (
          <p
            key={index}
            ref={el => (refs.current[index] = el)}
            dangerouslySetInnerHTML={{ __html: item }}
            className="philosophy"
          />
        ))}
        <img src={imageSrc} alt="" className="philosophy-image" />
      </div>
      <Helmet>
        <meta name="description" content="Your page description" />
      </Helmet>
    </div>
  );
};

export default Philosophy;
