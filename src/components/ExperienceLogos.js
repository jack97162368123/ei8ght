import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import '../styles/ExperienceLogos.css';

SwiperCore.use([Navigation, Pagination]);

const ExperienceLogos = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { in: ["CompanyLogos/Venues", "CompanyLogos/SportingEvents", "CompanyLogos/SportsFashion"] } }) {
        edges {
          node {
            id
            relativeDirectory
            childImageSharp {
              gatsbyImageData(
                width: 200
              
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `);

  // Group images by their relative directory
  const imagesByDirectory = data.allFile.edges.reduce((groups, image) => {
    const directory = image.node.relativeDirectory;
    if (!groups[directory]) {
      groups[directory] = [];
    }
    groups[directory].push(image);
    return groups;
  }, {});

  return (
    <div className="swiperbg">
      {/* Create a separate Swiper carousel for each group of images */}
      {Object.entries(imagesByDirectory).map(([directory, images]) => (
       <Swiper navigation pagination slidesPerView={3} loop={true} loopFillGroupWithBlank={true}>
       {images.map((image) => (
         <SwiperSlide key={image.node.id}>
           <div className="swiper-slide-content">
             <div className="image">
               <GatsbyImage image={getImage(image.node)} alt="Logo" />
             </div>
           </div>
         </SwiperSlide>
       ))}
     </Swiper>
      
      ))}
    </div>
  );
};

export default ExperienceLogos;
