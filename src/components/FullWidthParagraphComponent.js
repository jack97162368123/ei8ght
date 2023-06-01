import React, { useRef, useEffect } from "react";
import "../styles/FullWidthParagraphComponent.css";

const FullWidthParagraphComponent = ({ text }) => {
  const componentRef = useRef(null);

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Adjust threshold as needed
    });

    observer.observe(componentRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="full-width-paragraph-column">
    
    <div
      className="full-width-paragraph-component"
      ref={componentRef}
      style={{
        opacity: 0,
        transform: "translateY(10%)",
        transition: "opacity 0.5s, transform 0.5s",
      }}
    >
      <p>{text}</p>
      </div>
      </div>
  );
};

export default FullWidthParagraphComponent;
