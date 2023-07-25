import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DesignBrandingImage from "../../static/DesignBranding.svg";
import "../styles/DesignBranding.css";
import Row1 from "../../static/DesignBrandingImages/Rowing1.png";
import Row2 from "../../static/DesignBrandingImages/ConcertHall.png";

gsap.registerPlugin(ScrollTrigger);

const DesignBranding = () => {
  const sectionRef = useRef(null);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef = useRef(null);
  const imageRefLast = useRef(null);
  const textSectionRef = useRef(null);
  const secondTextSectionRef = useRef(null);
  const newSectionRef = useRef(null); // new
  const newImageRef = useRef(null); // new
  const newTextRef = useRef(null); // new

  useEffect(() => {
    if (window.innerWidth > 768) {
      gsap.fromTo(
        sectionRef.current,
        { autoAlpha: 0, x: -200 },
        {
          duration: 1,
          autoAlpha: 1,
          x: 0,
          ease: "power2.easeInOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        textSectionRef.current,
        { autoAlpha: 0, x: -200 },
        {
          duration: 1,
          autoAlpha: 1,
          x: 0,
          ease: "power2.easeInOut",
          scrollTrigger: {
            trigger: textSectionRef.current,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        secondTextSectionRef.current,
        { autoAlpha: 0, x: -200 },
        {
          duration: 1,
          autoAlpha: 1,
          x: 0,
          ease: "power2.easeInOut",
          scrollTrigger: {
            trigger: secondTextSectionRef.current,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { xPercent: -100, autoAlpha: 0 }, // Start with opacity 0
        {
          xPercent: 0, // Animate to its natural position
          autoAlpha: 1, // End with opacity 1
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        imageRefLast.current,
        { xPercent: -100, autoAlpha: 0 }, // Start with opacity 0
        {
          xPercent: 0, // Animate to its natural position
          autoAlpha: 1, // End with opacity 1
          ease: "none",
          scrollTrigger: {
            trigger: imageRefLast.current, // Trigger on the last image itself
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        newSectionRef.current,
        { autoAlpha: 0, x: -200 },
        {
          duration: 1,
          autoAlpha: 1,
          x: 0,
          ease: "power2.easeInOut",
          scrollTrigger: {
            trigger: newSectionRef.current,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        newImageRef.current,
        { xPercent: -100, autoAlpha: 0 },
        {
          xPercent: 0,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            trigger: newSectionRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        newTextRef.current,
        { autoAlpha: 0, x: -200 },
        {
          duration: 1,
          autoAlpha: 1,
          x: 0,
          ease: "power2.easeInOut",
          scrollTrigger: {
            trigger: newTextRef.current,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div className="DesignBranding" ref={sectionRef}>
      <div className="column">
        <div className="design-branding-large-image">
          <img src={DesignBrandingImage} alt="Placeholder" />
        </div>
        <div className="design-branding-text-section" ref={textSectionRef}>
          <p className="design-branding-paragraph">
            To do this takes an agency that understands the audiences you’re
            trying to reach, that make it their business to research who they
            are, what they care about - both at work and in their day to day
            lives.
          </p>
          <img src={Row1} alt="Placeholder" ref={imageRef} />
        </div>
      </div>
      <div className="column">
        <div
          className="design-branding-text-section"
          ref={secondTextSectionRef}
        >
          <p className="design-branding-paragraph">
            This is design and branding EIGHT-style. Building on intelligence
            and audience insight before we let loose with the creatives.
          </p>
          <img src={Row1} alt="Placeholder" ref={imageRef} />
        </div>
        <div className="design-branding-large-image">
          <img src={Row2} alt="Placeholder" ref={imageRefLast} />
        </div>
      </div>

      <div className="newSection">
        <div className="design-branding-text-section" ref={newTextRef}>
          <p className="design-branding-paragraph">
            The role of brand is increasingly important when it comes to how
            event planners select the people that they choose to work with. They
            don’t just want expertise and experience, that’s a given, they want
            brand alignment and shared values too. EIGHT gets this.
          </p>
        </div>
      </div>
      <div className="column" ref={newSectionRef}>
        <div className="design-branding-large-image">
          <img src={Row2} alt="Placeholder" ref={newImageRef} />
        </div>
      </div>
    </div>
  );
};

export default DesignBranding;
