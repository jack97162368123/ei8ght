import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { gsap } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import '../styles/Paragraph.css';

let ScrollMagic;

if (typeof window !== 'undefined') {
  ScrollMagic = require('scrollmagic');
  ScrollMagicPluginGsap(ScrollMagic, gsap);
}

const Paragraph = ({ text }) => {
  const paragraphs = text.split('<br />').filter(line => line.trim() !== '');
  const refs = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const controller = new ScrollMagic.Controller();

    refs.current.forEach((ref, index) => {
      if (ref) {
        const scene = new ScrollMagic.Scene({
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
    <div className="grid-item right-column paragraph-area">
      <div className="bg-color">
        {paragraphs.map((item, index) => (
          <p
            key={index}
            ref={el => (refs.current[index] = el)}
            dangerouslySetInnerHTML={{ __html: item }}
            className="paragraph"
          />
        ))}
      </div>
      <Helmet>
        <meta name="description" content="Your page description" />
      </Helmet>
    </div>
  );
};

export default Paragraph;
