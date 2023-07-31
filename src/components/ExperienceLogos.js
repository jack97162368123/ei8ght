import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";

import "../styles/ExperienceLogos.css";

SwiperCore.use([Pagination, Autoplay]);

const ExperienceLogos = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativeDirectory: {
            in: [
              "CompanyLogos/01VenuesAndDestinations",
              "CompanyLogos/02SportingVenues",
              "CompanyLogos/03EventManagementCompanies",
              "CompanyLogos/04IndustryAssociations",
              "CompanyLogos/05Intelligence+Content",
              "CompanyLogos/06SportingEvents",
              "CompanyLogos/07SportsFashion",
              "CompanyLogos/09MajorEventInfluence",
            ]
          }
        }
      ) {
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

  const directoryToTitle = {
    "CompanyLogos/01VenuesAndDestinations": "Venues & Destinations",
    "CompanyLogos/02SportingVenues": "Sporting Venues",
    "CompanyLogos/03EventManagementCompanies": "Event Management Companies",
    "CompanyLogos/04IndustryAssociations": "Industry Associations",
    "CompanyLogos/05Intelligence+Content": "Intelligence Content",
    "CompanyLogos/06SportingEvents": "Sporting Events",
    "CompanyLogos/07SportsFashion": "Sports Fashion",
    "CompanyLogos/09MajorEventInfluence": "Major Event Influence",
  };

  const directoriesOrder = [
    "CompanyLogos/01VenuesAndDestinations",
    "CompanyLogos/02SportingVenues",
    "CompanyLogos/03EventManagementCompanies",
    "CompanyLogos/04IndustryAssociations",
    "CompanyLogos/05Intelligence+Content",
    "CompanyLogos/06SportingEvents",
    "CompanyLogos/07SportsFashion",
    "CompanyLogos/09MajorEventInfluence",
  ];

  return (
    <div className="swiperbg">
      {/* Create a separate Swiper carousel for each group of images */}
      {directoriesOrder.map((directory) => {
        const images = imagesByDirectory[directory];
        if (!images) return null; // Skip directories without images
        return (
          <div key={directory}>
            <h2 className="carousel-title">{directoryToTitle[directory] || directory}</h2>
            <Swiper
              pagination
              slidesPerView={3}
              loop={true}
              loopFillGroupWithBlank={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
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
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceLogos;
