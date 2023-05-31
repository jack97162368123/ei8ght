import React, { useRef, useEffect } from "react";
import "../styles/ImageComponentHalf.css";

const ImageComponentHalf = ({ src, alt }) => {
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
      threshold: 0.10,
    });

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="grid-item-half image-half"
      ref={componentRef}
      style={{
        opacity: 0,
        transform: "translateY(50%)",
        transition: "opacity 0.5s ease, transform 1.0s ease",
      }}
    >
      <div className="image-container-half">
        <div className="image-wrapper-half">
          <img src={src} alt={alt} className="square-image-half" />
        </div>
      </div>
    </div>
  );
};

export default ImageComponentHalf;
