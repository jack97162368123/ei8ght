import React from "react";
import "../styles/ImageComponentHalf.css";

const ImageComponentHalf = ({ src, alt, type }) => {

  const renderMedia = () => {
    if (type === "video") {
      return (
        <video 
          className="square-image-half" 
          autoPlay 
          muted 
          loop 
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
      return <img src={src} alt={alt} className="square-image-half" />;
    }
  };

  return (
    <div
      className="grid-item-half image-half"
      style={{
        opacity: 1,
        transition: "transform 1.0s ease",
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
