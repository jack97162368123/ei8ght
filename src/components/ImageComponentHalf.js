import React, { useRef, useEffect, useState } from "react";
import "../styles/ImageComponentHalf.css";

const ImageComponentHalf = ({ src, alt, type }) => {
  const componentRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

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
    if (loaded) {
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.10,
      });

      if (componentRef.current) {
        observer.observe(componentRef.current);
      }

      return () => {
        observer.disconnect();
      };
    }
  }, [loaded]);

  const handleOnLoadedData = () => {
    setLoaded(true);
  };

  const renderMedia = () => {
    if (type === "video") {
      return (
        <video 
          className="square-image-half" 
          autoPlay 
          muted 
          loop 
          onLoadedData={handleOnLoadedData} 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            borderRadius: '30px'
          }}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return <img src={src} alt={alt} className="square-image-half" onLoad={handleOnLoadedData} />;
    }
  };

  return (
    <div
      className="grid-item-half image-half"
      ref={componentRef}
      style={{
        opacity: loaded ? 1 : 0,
        transform: "translateY(50%)",
        transition: "opacity 0.5s ease, transform 1.0s ease",
      }}
    >
      <div className="image-container-half">
        <div className="image-wrapper-half">
          {renderMedia()}
        </div>
      </div>
    </div>
  );
};

export default ImageComponentHalf;
