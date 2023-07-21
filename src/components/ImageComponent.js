import React from 'react';
import '../styles/ImageComponent.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const ImageComponent = ({ src, alt, title, text }) => {
  return (
    <div className="image-component">
      <div className="image-component-container">
        <div className="image-wrapper">
          <img src={src} alt={alt} className="square-image" />
        </div>
        <div className="image-component-text-container">
          <div className="text-container">
            <p className="image-component-text-bold">{title}</p>
            <p className="image-component-text-light">{text}</p>
          </div>
          <div className="icon-container">
            <LinkedInIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
