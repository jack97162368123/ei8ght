import React, { useEffect, useRef } from "react";
import "../styles/ThreeColumnImageComponent.css";
import ImageComponent from "./ImageComponent";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Al from "../../static/profile-shots/Al.jpeg";
import Person4 from "../../static/profile-shots/MikePic1.jpeg";
import Person5 from "../../static/profile-shots/Unknown-1.jpeg";
import Person2 from "../../static/profile-shots/Amber Pic.jpeg";
import Person3 from "../../static/profile-shots/ClaireKenton.png";
import Person6 from "../../static/profile-shots/Nyomi.png";


gsap.registerPlugin(ScrollTrigger);


const ThreeColumnImageComponent = () => {
  const ref = useRef(null);
  
  useEffect(() => {
    gsap.from(ref.current.children, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom 99%',
        scrub: true,
      },
      y: 100,  // Change x to y
      opacity: 0,
      stagger: 0.5
    });
  }, []);

  return (
    <div ref={ref} className="three-col-image-comp-grid-container">
      <div className="three-col-image-comp-left-column">
        <ImageComponent
          src={Al}
          alt="Alistair"
          title="Alistair Turner"
          text="Managing Director"
          url="https://www.linkedin.com/in/alistair-turner-6b42375/"
        />
      </div>
      <div className="three-col-image-comp-center-column">
        <ImageComponent
          src={Person5}
          alt="Yvonne Turner"
          title="Yvonne Turner"
          text="Marketing Director"
          url="https://www.linkedin.com/in/yvonne-turner-82537024/"
        />{" "}
      </div>
      <div className="three-col-image-comp-right-column">
        <ImageComponent
          src={Person4}
          alt="Mike Fletcher"
          title="Mike Fletcher"
          text="Freelance Writer / Content Producer"
          url="https://www.linkedin.com/in/mikeyfletch/"
        />
      </div>

      <div className="three-col-image-comp-left-column">
        <ImageComponent
          src={Person3}
          alt="Claire Kenton"
          title="Claire Kenton"
          text="Freelance Writer / Journalist"
          url="https://www.linkedin.com/in/clairekenton/"
        />
      </div>
      <div className="three-col-image-comp-center-column">
        <ImageComponent
          src={Person2}
          alt="Amber Maher"
          title="Amber Maher"
          text="Freelance account executive"
          url="https://www.linkedin.com/in/ambermaher/"
        />{" "}
      </div>
      <div className="three-col-image-comp-right-column">
  <ImageComponent
    src={Person6}
    alt="Nyomi Rose"
    title="Nyomi Rose"
    text="Social Media Manager"
    url="https://www.linkedin.com/in/nyomirose/"
  />
</div>
    </div>
  );
};

export default ThreeColumnImageComponent;
