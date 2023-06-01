import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import '../styles/ExperienceLogos.css';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const ExperienceLogos = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "CompanyLogos/Venues" } }) {
        nodes {
          id
          childImageSharp {
            gatsbyImageData(
              width: 1000
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `);

  const images = data.allFile.nodes;

  return (
    <div className="swiperbg">
    <Swiper navigation pagination>
      {images.map((image, index) => (
        
        <SwiperSlide key={image.id}>
          <div className="swiper-slide-content">
            <h3 className="slide-title">Slide {index + 1} Title</h3>
            <div className="image">
              <GatsbyImage image={getImage(image)} alt="Logo" />
            </div>
            
            </div>
          </SwiperSlide>
          
      ))}
      </Swiper>
      
      </div>
  );
};

export default ExperienceLogos;
